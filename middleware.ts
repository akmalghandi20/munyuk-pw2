import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/api/:path*"], // Mirip dengan publicRoutes
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Terapkan middleware ke rute tertentu
};
