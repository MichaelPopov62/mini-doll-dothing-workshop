/* читає з data/mockData.ts*/

import { NextResponse } from "next/server";
import { users } from "@/app/data/mockData";
// import { api, ApiError } from '../route';// використаєш пізніше для реального бекенду

export async function GET() {
    try {
    // const { data } = await api('/users')// колись тут буде справжній бекенд
  return NextResponse.json(users);
}
catch (error:unknown) {
   if (error instanceof Error){
  	// У випадку помилки — повертаємо обʼєкт з помилкою
    return NextResponse.json(
      {
        error:error.message ||  "Server error"
      },
      { status: (500)}
    )
  }
}}
