import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req: Request){
    try {
        const { userId } = auth()
        const body = await req.json();

        const {name} = body

        if (!userId){
            return new NextResponse("Unauthorize", {status:401})
        }

    } catch (error) {
        console.log("[STORES_POST]", error)
        return new NextResponse("Internal Error", {status:500})
    }
}