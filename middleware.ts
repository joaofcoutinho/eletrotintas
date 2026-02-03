import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Verifica se a rota começa com /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Verifica se o usuário está autenticado
    const isAuthenticated = request.cookies.has("admin_authenticated")

    // Se não estiver autenticado e não estiver na página principal do admin, redireciona para o admin
    if (!isAuthenticated && request.nextUrl.pathname !== "/admin") {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
