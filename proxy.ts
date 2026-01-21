import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./app/(auth)/auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();
  console.log("session info is this", session);

  // Allow public routes
  if (["/", "/about", "/team", "/contact"].includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect logged-in users away from login/register routes using session
  if (["/login", "/register"].includes(pathname)) {
    if (session) {
      return NextResponse.redirect(new URL("/chat", request.url));
    }
  }

  // Protect /chat routes using session
  if (pathname.startsWith("/chat")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/team",
    "/contact",
    "/chat/:path*",
    "/login",
    "/register",
  ],
};
