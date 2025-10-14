import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || 1);
  const pageSize = Number(searchParams.get("pageSize") || 10);
  const transactions: any[] = [];
  const total = 0;
  return NextResponse.json({ transactions, total, page, pageSize });
}

