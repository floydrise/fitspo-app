import type { NextAuthConfig } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.username = token.username as string;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const protectedRoutes = ['/dashboard', '/tracker'];
      const publicRoutes = [
        '/exercises',
        '/workouts',
        '/about',
        '/contact',
        '/home',
      ];
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );
      const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
      if (isPublicRoute) {
        return true;
      }
      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return NextResponse.redirect(new URL(`/dashboard`, nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;