'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  user_id: z.string(),
  username: z.string(),
  name: z.string(),
  imgUrl: z.string(),
});

const RegisterUser = FormSchema.omit({ user_id: true });

export async function signUp(formData: FormData) {
  const { username, name, imgUrl } = RegisterUser.parse({
    username: formData.get('username'),
    name: formData.get('name'),
    imgUrl: formData.get('imgUrl'),
  });

  await sql`insert into users (username, name, avatar_img_url) values (${username}, ${name}, ${imgUrl})`

  redirect("/");
}