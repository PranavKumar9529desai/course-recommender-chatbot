import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (["/", "/about", "/team", "/contact"].includes(pathname)) {
    return NextResponse.next();
  }

  // Protect /chat routes
  if (pathname.startsWith("/chat")) {
    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    });
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/about", "/team", "/contact", "/chat/:path*"],
};
