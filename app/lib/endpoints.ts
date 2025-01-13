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

export async function fetchWorkouts () {
  try {
    const data = await sql `SELECT * FROM workouts`;
    return data.rows
  }
  catch (error) {
    console.error('error fetching workouts', error);
    throw new Error('error fetching workouts');
  }
}
