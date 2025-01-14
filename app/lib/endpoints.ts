import { sql } from '@vercel/postgres';
import { Workout_history } from './definitions';
import { NextApiRequest, NextApiResponse } from 'next';

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

export async function fetchWorkoutHistoryByUserId(user_id: number) {
  try {
    const data = await sql`SELECT * FROM workout_history
    WHERE user_id = ${user_id}`;
    return data.rows;
  } catch (error) {
    console.error('error fetching workout history ', error);
    throw new Error('error fetching workout history');
  }
}

/* export async function postWorkoutHistory(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        workout_history_id,
        user_id,
        workout_id,
        date,
        duration,
        exercise_list,
      } = req.body as Workout_history;
    
      if (!workout_history_id || !user_id || !workout_id || !date || !duration || !exercise_list) {
        return res.status(400).json({ message: 'All fields are required.' });
      }
      try {
        const workoutResult = await sql(
          `INSERT INTO workout_history (workout_history_id, user_id, workout_id, date, duration) 
           VALUES ($1, $2, $3, $4, $5) RETURNING *`,
          [workout_history_id, user_id, workout_id, date, duration]
        );

        const workout = workoutResult.rows[0]
        const exerciseQueries = exercise_list.map(exercise =>
          await sql (
            `INSERT INTO exercises (workout_history_id, name, previous_weight, reps_count, weight, sets_count) 
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [
              workout_history_id,
              exercise.name,
              exercise.previous_weight,
              exercise.reps_count,
              exercise.weight,
              exercise.sets_count,
            ]
          )
        );

        await Promise.all(exerciseQueries);
        return res.status(201).json({ message: 'Workout added successfully!', workout });
}
    catch (error) {
      console.error('error fetching workout history ', error);
      throw new Error('error fetching workout history');
}

} */



export async function fetchExerciseById() {
  try {
    const response = await fetch(
      `https://exercisedb-api.vercel.app/api/v1/exercises/I4hDWkc`
    );
    if (!response.ok) {
      throw new Error(`Error fetching exercise with ID: I4hDWkc`);
    }
    const exercise = await response.json();
    console.log(exercise, 'exercise');
    return exercise;
  } catch (error) {
    console.error(`Error fetching exercise with ID: I4hDWkc`, error);
    throw new Error(`Error fetching exercise with ID: I4hDWkc`);
  }
}
