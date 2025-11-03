import { NextResponse } from "next/server";
import { users } from "@/app/data/mockData";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // Перевірка: чи вже є користувач
    const existingUser = users.find((u) => u.email === email && u.password === password);
    if (existingUser || password !== "1234") {
      return NextResponse.json(
        { success: false, message: "Користувач з таким email вже існує" },
        { status: 400 }
      );
    }

    // Створюємо нового користувача
    const newUser = {
      id: users.length + 1,
      name,
      email,
      role: "user" as const,
    };

    users.push(newUser); // додаємо у мок-дані (на час роботи сервера)

    return NextResponse.json({
      success: true,
      message: "Користувач зареєстрований успішно",
      user: newUser,
    });
  } catch (error) {
     console.error("Помилка при реєстрації:", error);
    return NextResponse.json(
      { success: false, message: "Помилка сервера" },
      { status: 500 }
    );
  }
}
