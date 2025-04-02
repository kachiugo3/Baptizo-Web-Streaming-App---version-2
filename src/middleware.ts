import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  const protectedRoutes = ["/home", "/discover", "/library", "/"];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  const hasCookies = request.cookies.get("accessToken");
  const unprotectedRoutes = ["/login", "sign-up", "/discover"];

  if (hasCookies && unprotectedRoutes.includes(request.url)) {
    return NextResponse.redirect("/home");
  }

  const {searchParams} = new URL(request.url);

  const reset = searchParams.get("reset");
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  //Use case applies for Verifiying email upon signup
  if (token && !reset) {
    const resetPasswordUrl = new URL("/confirm-email", request.url);

    resetPasswordUrl.searchParams.set("token", token);
    if (email) {
      resetPasswordUrl.searchParams.set("email", email);
    }

    return NextResponse.redirect(resetPasswordUrl);
  }

  //Use case applies for reseting password
  if (reset === "true" && token) {
    const forgotPasswordURL = new URL("/reset-password", request.url);

    forgotPasswordURL.searchParams.set("token", token);
    if (email) {
      forgotPasswordURL.searchParams.set("email", email);
    }

    return NextResponse.redirect(forgotPasswordURL);
  }

  // If trying to access a protected route without a token, redirect to login
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/library", "/profile"],
};
