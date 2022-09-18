import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = "admin@123";

export default function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.access_token;

  const url = req.url;

  if (url.includes("/admin")) {
    if (jwt === "undefined") {
      return NextResponse.redirect("/auth/login");
    }
    try {
      verify(jwt, secret);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect("/auth/login");
    }
  }
  return NextResponse.next();
}
