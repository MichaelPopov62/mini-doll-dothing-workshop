// controllers/productController.js
import { Product } from "../models/productModel.js";

// Отримати всі товари
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Помилка при отриманні товарів", error });
  }
};

// Створити новий товар
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: "Помилка при створенні товару", error });
  }
};

// Отримати один товар за ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Товар не знайдено" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Помилка при пошуку товару", error });
  }
};
