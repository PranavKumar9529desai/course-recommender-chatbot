import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (["/", "/about", "/team", "/contact"].includes(pathname)) {
    return NextResponse.next();
  }
  
  // Redirect logged-in users away from login/register routes
  if (["/login", "/register"].includes(pathname)) {
    const token = await getToken({
      req: request,
      // Use NEXTAUTH_SECRET if available, fallback to AUTH_SECRET
    secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
    });
    if (token) {
      return NextResponse.redirect(new URL("/chat", request.url));
    }
  }

  // Protect /chat routes
  if (pathname.startsWith("/chat")) {
    const token = await getToken({
      req: request,
      // Use NEXTAUTH_SECRET if available, fallback to AUTH_SECRET
      secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
    });
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/about", "/team", "/contact", "/chat/:path*", "/login", "/register"],
};
