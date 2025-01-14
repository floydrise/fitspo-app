import { sql } from '@vercel/postgres';

export async function fetchUsers() {
  try {
    const data = await sql`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error('error fetching users', error);
    throw new Error('error fetching users');
  }
}

export async function fetchUserById(user_id: number) {
  try {
    const data = await sql`SELECT * FROM users 
    WHERE user_id = ${user_id}`;
    return data.rows[0];
  } catch (error) {
    console.error('error fetching user', error);
    throw new Error('error fetching user');
  }
}

export async function fetchWorkouts() {
  try {
    const data = await sql`SELECT * FROM workouts`;
    return data.rows;
  } catch (error) {
    console.error('error fetching workouts', error);
    throw new Error('error fetching workouts');
  }
}

// export async function fetchExerciseById(exercise_id: string) {
//   try {
//     const response = await fetch(
//       `https://exercisedb-api.vercel.app/api/v1/exercises/${exercise_id}}`
//     );
//     if (!response.ok) {
//       throw new Error(`Error fetching exercise with ID: ${exercise_id}`);
//     }
//     const exercise = await response.json();
//     return exercise;
//   } catch (error) {
//     console.error(`Error fetching exercise with ID: ${exercise_id}`, error);
//     throw new Error(`Error fetching exercise with ID: ${exercise_id}`);
//   }
// }
