import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered for:", request.nextUrl.pathname);

  const accessToken = request.cookies.get("accessToken")?.value;
  console.log("accessToken", accessToken);
  const protectedRoutes = ["/home", "/discover", "/library", "/login"];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  // If trying to access a protected route without a token, redirect to login
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // Continue request
}

export const config = {
  matcher: ["/home", "/discover", "/library", "/profile"],
};
