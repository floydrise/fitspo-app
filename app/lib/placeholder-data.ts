const users = [
  {
    user_id: 1,
    username: 'ThisIsAUsername',
    name: 'David',
    avatar_img_url:
      'https://cdn.pixabay.com/photo/2024/02/10/15/03/flowers-8564948_960_720.png',
  },
  {
    user_id: 2,
    username: 'ThisIsA',
    name: 'Steve',
    avatar_img_url:
      'https://thumbs.dreamstime.com/z/strict-fair-stunned-stylish-small-dog-strictly-looks-his-glasses-striped-fashion-scarf-pet-fashion-white-39029138.jpg?ct=jpeg',
  },
  {
    user_id: 3,
    username: 'Usernametest',
    name: 'Oli',
    avatar_img_url:
      'https://thumbs.dreamstime.com/z/owl-branch-indoors-high-quality-photo-352800472.jpg?ct=jpeg',
  },
];

const workout_history = [
  {
    workout_history_id: 1,
    user_id: 1,
    workout_id: 1,
    date: '2025-01-13',
    duration: 1200,
    exercise_list: [
      {
        name: 'Bench press',
        previous_weight: 0,
        reps_count: 2,
        weight: 20,
        sets_count: 4,
      },
      {
        name: 'Incline bench press',
        previous_weight: 0,
        reps_count: 4,
        weight: 15,
        sets_count: 2,
      },
      {
        name: 'Cable flies',
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
    workout_name: 'Upper Body',
    exercise_ids: ['I4hDWkc', 'lBDjFxJ', 'aXtJhlg'],
  },
  {
    workout_id: 2,
    workout_name: 'Lower Body',
    exercise_ids: ['JZuApnB', 'IZVHb27', 'MrgP9L6'],
  },
  {
    workout_id: 3,
    workout_name: 'Core',
    exercise_ids: ['VBAWRPG', 'XVDdcoj', 'tZkGYZ9'],
  },
];

export { users, workouts, workout_history };
