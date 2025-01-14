'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { Workout_history } from './definitions';

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

export async function postWorkoutHistory(formData: Workout_history) {
  const { user_id, workout_id, date, duration, exercise_list } = formData;
  await sql`
            INSERT INTO workout_history (user_id, workout_id, date, duration, exercise_list)
            VALUES (${user_id}, ${workout_id}, ${date}, ${duration}, ${JSON.stringify(exercise_list)});
          `;
        
}