import { NextResponse } from "next/server";
import { users } from "@/app/data/mockData";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log("Отримані дані:", email, password);
console.log("Користувачі:", users);

    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Акаунт не знайдено" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Вітаємо, ${user.name}!`,
      user,
    });
  } catch (error) {
     console.error("Помилка при вході користувача:", error);
    return NextResponse.json(
      { success: false, message: "Помилка сервера" },
      { status: 500 }
    );
  }
}
