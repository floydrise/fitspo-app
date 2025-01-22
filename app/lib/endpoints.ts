'use server';
import { sql } from '@vercel/postgres';
import {
  APIExercise,
  User,
  Workout,
  Workout_history,
} from '@/app/lib/definitions';

export async function fetchUsers() {
  try {
    const data = await sql`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error('error fetching users', error);
    throw new Error('error fetching users');
  }
}

export async function fetchUserByUsername(username: string | undefined) {
  try {
    const data = await sql<User>`SELECT * FROM users 
    WHERE username = ${username}`;
    return data.rows[0];
  } catch (error) {
    console.error('error fetching user', error);
    throw new Error('error fetching user');
  }
}

export async function fetchWorkouts() {
  try {
    const data = await sql<Workout>`SELECT * FROM workouts`;
    return data.rows;
  } catch (error) {
    console.error('error fetching workouts', error);
    throw new Error('error fetching workouts');
  }
}

export async function fetchWorkoutById(workout_id: number) {
  try {
    const data = await sql`SELECT * FROM workouts
    WHERE workout_id = ${workout_id}`;
    return data.rows[0];
  } catch (error) {
    console.error('error fetching workout', error);
    throw new Error('error fetching workout');
  }
}

export const fetchWorkoutByName = async (workout_name: string | undefined) => {
  try {
    const data = await sql<Workout>`SELECT * FROM workouts
    WHERE workout_name = ${workout_name}`;
    return data.rows[0];
  } catch (error) {
    console.error('error fetching workout', error);
    throw new Error('error fetching workout');
  }
};

export async function fetchWorkoutHistoryByUserId(user_id: number) {
  try {
    const data = await sql<Workout_history>`SELECT * FROM workout_history
    WHERE user_id = ${user_id}`;
    return data.rows;
  } catch (error) {
    console.error('error fetching workout history ', error);
    throw new Error('error fetching workout history');
  }
}

export async function fetchExerciseById(
  exercise_id: string
): Promise<APIExercise> {
  try {
    const response = await fetch(
      `https://exercisedb-api.vercel.app/api/v1/exercises/${exercise_id}`,
      {
        headers: {
          'X-Api-Key': `${process.env.API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error fetching exercise with ID: ${exercise_id}`);
    }
    const exercise = await response.json();
    return exercise;
  } catch (error) {
    console.error(`Error fetching exercise with ID: ${exercise_id}`, error);
    throw new Error(`Error fetching exercise with ID: ${exercise_id}`);
  }
}

export async function postWorkoutHistory(exercise_data: Workout_history) {
  const { user_id, workout_id, date, duration, exercise_list } = exercise_data;
  try {
    const data =
      await sql`INSERT INTO workout_history (user_id, workout_id, date, duration, exercise_list)
    VALUES (${user_id}, ${workout_id}, ${date}, ${duration}, ${JSON.stringify(exercise_list)});`;
  } catch (error) {
    console.error('error posting workout history ', error);
    throw new Error('error posting workout history');
  }
}
