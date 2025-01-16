import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(() => {
  return NextResponse.next();
});

// This ensures that static files, favicon, and Next.js internals are excluded from Clerk's Middleware
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
