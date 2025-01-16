'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

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

  try {
    await sql`insert into users (username, name, avatar_img_url)
              values (${username}, ${name}, ${imgUrl})`;
  } catch (e: unknown) {
    throw e;
  }
  revalidatePath('/signup');
  redirect(`/login`);
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData );
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
  redirect("/dashboard")
}


// export async function postWorkoutHistory(formData: Workout_history) {
//   const { user_id, workout_id, date, duration, exercise_list } = formData;
//   await sql`
//             INSERT INTO workout_history (user_id, workout_id, date, duration, exercise_list)
//             VALUES (${user_id}, ${workout_id}, ${date}, ${duration}, ${JSON.stringify(exercise_list)});
//           `;
// }

// Needs revisiting

/*
const WorkoutHistoryScheme = z.object({
  workout_history_id: z.number(),
  user_id: z.number(),
  workout_id: z.number(),
  date: z.date(),
  duration: z.number(),
  exercise_list: z.array(z.string()),
});

const submittedWorkoutHistory = WorkoutHistoryScheme.omit({
  workout_history_id: true,
});


export async function postWorkoutHistory(formData: FormData): Promise<void> {
  const { user_id, workout_id, date, duration, exercise_list } =
    submittedWorkoutHistory.parse({
      user_id: Number(formData.get('user_id')),
      workout_id: Number(formData.get('workout_id')),
      date: new Date(formData.get('date') as string),
      duration: Number(formData.get('duration')),
      exercise_list: Array(formData.get('exercise_list')),
    });

  // const parsedData = WorkoutHistoryScheme.safeParse(formData);
  // if (!parsedData.success) {
  //   throw new Error(`Invalid request: ${parsedData.error}`);
  // }

  // try {
  await sql`
    INSERT INTO workout_history (user_id, workout_id, date, duration, exercise_list)
    VALUES (${user_id}, ${workout_id}, ${date.toISOString()}, ${duration}, 
    ${JSON.stringify(exercise_list)});`;

  // } catch (error) {
  //   console.error('Error inserting workout history', error);
  //   throw error;
  // }
}
  */
