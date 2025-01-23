import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorize", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Nama Toko Perlu di Tambahkan", { status: 400 });
    }

    const store = await db.store.create({
      data: {
        name,
        userId,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.error("[STORES_POST]", error);
    return new NextResponse(JSON.stringify({ message: "Internal Error" }), { status: 500 });
  }
}
