import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { User } from '@/app/lib/definitions';

async function getUser(username: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT *
                                 FROM users
                                 WHERE username = ${username}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string() })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { username } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;
          return user;
        }
      },
    }),
  ],
});
