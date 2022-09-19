import { NextResponse } from "next/server";
// import verifyAdmin from "src/api/utils/verifyAdmin";

export default async function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.access_token;

  const url = req.url;

  if (url.includes("/admin")) {
    if (jwt === undefined) {
      return NextResponse.redirect("/auth/login");
    }
    try {
      // await verifyAdmin(jwt);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect("/auth/login");
    }
  }
  return NextResponse.next();
}
