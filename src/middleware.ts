import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  const protectedRoutes = ["/home", "/discover", "/library"];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  const {searchParams} = new URL(request.url);

  const reset = searchParams.get("reset");
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  if (reset === "true" && token) {
    const resetPasswordUrl = new URL("/reset-password", request.url);

    resetPasswordUrl.searchParams.set("token", token);
    if (email) {
      resetPasswordUrl.searchParams.set("email", email);
    }

    return NextResponse.redirect(resetPasswordUrl);
  }

  // If trying to access a protected route without a token, redirect to login
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/discover", "/library", "/profile"],
};
