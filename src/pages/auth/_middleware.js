import { NextResponse } from "next/server";

export default function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.access_token;

  const url = req.url;

  if (url.includes("/auth")) {
    if (jwt !== undefined) {
      return NextResponse.redirect("/admin/user-management");
    }
    try {
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect("/auth/login");
    }
  }
  return NextResponse.next();
}
