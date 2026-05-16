import { auth } from "src/shared/lib"

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(new URL("/login", req.url))
  }
})

export const config = {
  matcher: ["/profile"],
}
