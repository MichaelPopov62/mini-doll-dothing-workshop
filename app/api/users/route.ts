/* читає з data/mockData.ts*/

import { NextResponse } from "next/server";
import { users } from "@/app/data/mockData";

export async function GET() {
  return NextResponse.json(users);
}
