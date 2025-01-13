import { db } from "@vercel/postgres";
import { users, workouts, workout_history } from "../lib/placeholder-data";

const client = await db.connect();

async function dropTables() {
  await client.sql`DROP TABLE IF EXISTS users`;
  await client.sql`DROP TABLE IF EXISTS workouts`;
  await client.sql`DROP TABLE IF EXISTS workout_history`;
}

async function seedUsers() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      username VARCHAR(32) NOT NULL UNIQUE,
      name VARCHAR(255) NOT NULL,
      avatar_img_url VARCHAR,
      workout_history_id INT REFERENCES workout_history(workout_history_id) ON DELETE CASCADE
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      return client.sql`
        INSERT INTO users (username, name, avatar_img_url, workout_history_id)
        VALUES (${user.username}, ${user.name}, ${user.avatar_img_url}, ${user.workout_history_id});
      `;
    })
  );

  return insertedUsers;
}

async function seedWorkouts() {
  await client.sql`
      CREATE TABLE IF NOT EXISTS workouts (
        workout_id SERIAL PRIMARY KEY,
        workout_name VARCHAR(255) NOT NULL,
        exercise_ids JSON
      );
    `;

  const insertedWorkouts = await Promise.all(
    workouts.map(
      (workouts) => client.sql`
          INSERT INTO workouts (workout_name, exercise_ids)
          VALUES (${workouts.workout_name}, ${JSON.stringify(workouts.exercise_ids)});
        `
    )
  );

  return insertedWorkouts;
}

async function seedWorkoutHistory() {
  await client.sql`
      CREATE TABLE IF NOT EXISTS workout_history (
        workout_history_id SERIAL PRIMARY KEY,
        user_id REFERENCES users(user_id) INT NOT NULL,
        workout_id REFERENCES workouts(workout_id) INT NOT NULL,
        date DATE NOT NULL,
        duration INT NOT NULL,
        exercise_list JSON
      );
    `;

  const insertedWorkoutHistory = await Promise.all(
    workout_history.map(
      (workout_history) => client.sql`
          INSERT INTO workout_history (user_id, workout_id, date, duration, exercise_list)
          VALUES (${workout_history.user_id}, ${workout_history.workout_id}, ${workout_history.date}, ${workout_history.duration}, ${JSON.stringify(workout_history.exercise_list)});
        `
    )
  );

  return insertedWorkoutHistory;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await dropTables();
    await seedUsers();
    await seedWorkouts();
    await seedWorkoutHistory();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
