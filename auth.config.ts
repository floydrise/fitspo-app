import type { NextAuthConfig } from 'next-auth';
import { revalidatePath } from 'next/cache';

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
      const protectedRoutes = ['/dashboard']
      const publicRoutes = ["/", "/exercises", "/workouts", "/about", "/contact", "/home"]
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
      const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
      if(isPublicRoute) {
        return true
      }
      if (isProtectedRoute) {
        if (isLoggedIn) return  true;
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL(`/dashboard`, nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;


/*
import type { NextAuthConfig } from 'next-auth';

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
      const isLoggedIn = !!auth?.user;
      const username = isLoggedIn ? auth?.user?.username : null;

      // Define paths that require authentication
      const protectedPaths = [`/${username}/history`];

      // Publicly accessible paths
      const publicPaths = ["/home",`/exercises`, "/workouts", "/signup", '/login'];

      const isOnProtectedPath = protectedPaths.some((path) => nextUrl.pathname.startsWith(path));
      const isOnPublicPath = publicPaths.some((path) => nextUrl.pathname.startsWith(path));

      // If the user is on a protected path, they must be logged in
      if (isOnProtectedPath) {
        return isLoggedIn;
      }

      // Allow access to public paths
      if (isOnPublicPath) {
        return true;
      }

      // Redirect logged-in users to a default path
      if (isLoggedIn) {
        return Response.redirect(new URL(`/${username}/history`, nextUrl));
      }
    },
  },
  providers: [],
} satisfies NextAuthConfig;
*/
