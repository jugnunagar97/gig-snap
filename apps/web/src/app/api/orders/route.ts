import { NextResponse } from "next/server";

// Placeholder endpoint with pagination shape. Replace with DB later.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || 1);
  const pageSize = Number(searchParams.get("pageSize") || 10);
  // No data yet; return empty slice and total
  const orders: any[] = [];
  const total = 0;
  return NextResponse.json({ orders, total, page, pageSize });
}

