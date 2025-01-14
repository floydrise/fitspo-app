export type User = {
  user_id: number;
  username: string;
  name: string;
  avatar_img_url: string;
};

export type Workout = {
  workout_id: number;
  workout_name: string;
  exercise_ids: string[];
};

export type Exercise = {
  name: string;
  previous_weight: number;
  reps_count: number;
  weight: number;
  sets_count: number;
};

export type workout_history = {
  workout_history_id: number;
  user_id: number;
  workout_id: number;
  date: string;
  duration: number;
  exercise_list: Exercise[];
};
