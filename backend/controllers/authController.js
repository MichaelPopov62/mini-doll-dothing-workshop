import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    res.status(201).json({
       success: true,               // <-- тепер фронтенд спрацює на редірект
       message: "Користувач створений",
        user:user });
  } catch (error) {
    res.status(400).json({
        success: false, 
       message: "Помилка реєстрації", error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Користувач не знайдений" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Невірний пароль" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Успішний вхід", token, user });
  } catch (error) {
    res.status(500).json({ message: "Помилка логіну", error });
  }
};
