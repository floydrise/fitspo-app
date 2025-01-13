const users = [
  {
    user_id: 1,
    username: "ThisIsAUsername",
    name: "David",
    avatar_img_url:
      "https://cdn.pixabay.com/photo/2024/02/10/15/03/flowers-8564948_960_720.png",
    workout_history_id: 1,
  },
];

const workout_history = [
  {
    workout_history_id: 1,
    user_id: 1,
    workout_id: 1,
    date: 1586179020000,
    duration: 1200,
    exercise_list: [
      {
        name: "Bench press",
        previous_weight: 0,
        reps_count: 2,
        weight: 20,
        sets_count: 4,
      },
      {
        name: "Incline bench press",
        previous_weight: 0,
        reps_count: 4,
        weight: 15,
        sets_count: 2,
      },
      {
        name: "Cable flies",
        previous_weight: 0,
        reps_count: 5,
        weight: 6,
        sets_count: 6,
      },
    ],
  },
];

const workouts = [
  {
    workout_id: 1,
    workout_name: "Push",
    exercise_ids: ["guT8YnS", "U6G2gk9", "BReCuOn"],
  },
];

export { users, workouts, workout_history };
