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
  {
    workout_history_id: 2,
    user_id: 1,
    workout_id: 1,
    date: '2025-01-14',
    duration: 1100,
    exercise_list: [
      {
        name: 'Bench press',
        previous_weight: 20,
        reps_count: 2,
        weight: 25,
        sets_count: 4,
      },
      {
        name: 'Incline bench press',
        previous_weight: 15,
        reps_count: 4,
        weight: 20,
        sets_count: 2,
      },
      {
        name: 'Cable flies',
        previous_weight: 6,
        reps_count: 5,
        weight: 8,
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
  {
    workout_id: 4,
    workout_name: 'Chest',
    exercise_ids: ['EIeI8Vf', '3TZduzM', '0CXGHya', 'hl8DUh8'],
  },
  {
    workout_id: 5,
    workout_name: 'Back',
    exercise_ids: ['eYnzaCm', 'SzX3uzM', 'i6LWjok', 'dG7tG5y'],
  },
  {
    workout_id: 6,
    workout_name: 'Biceps',
    exercise_ids: ['faHKVkK', 'qOgPVf6', 'BCGQ6J5'],
  },
  {
    workout_id: 7,
    workout_name: 'Triceps',
    exercise_ids: ['dZl9Q27', 'HJ63mSO', '1xHyxys'],
  },
  {
    workout_id: 8,
    workout_name: 'Shoulders',
    exercise_ids: ['UDlhcO8', 'S8mo30S', 'S9zHIvU', 'goJ6ezq'],
  },
];

export { users, workouts, workout_history };
