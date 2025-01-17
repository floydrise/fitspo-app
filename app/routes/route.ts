const apiKey = process.env.DATA_API_KEY || '';

export default async function exerciseHandler() {
  try {
    const response = await fetch(
      `https://exercisedb-api.vercel.app/api/v1/exercises`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
  }
}

export async function fetchExerciseById(exercise_id: string) {
  try {
    const response = await fetch(
      `https://exercisedb-api.vercel.app/api/v1/exercises/${exercise_id}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': 'edb_cX9xwiLzwQK7N7fec-JY2-xvEHssimU2V4N4kVxFbKlS7',
          'Content-Type': 'application/json',
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
