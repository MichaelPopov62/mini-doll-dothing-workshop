 // читає з data/mockData.ts

import { NextResponse } from "next/server";
import { orders } from "@/app/data/mockData";

export async function GET() {
  return NextResponse.json(orders);
}
