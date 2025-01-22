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

export interface SubmitData {
  name: string;
  weight: number;
  reps_count: number;
  sets_count: number;
}

export type Workout_history = {
  workout_history_id?: number;
  user_id: number;
  workout_id: number;
  date: Date;
  duration: number;
  exercise_list: SubmitData[];
};

// in case we need it
export type APIExercise = {
  data: {
    exerciseId: string;
    name: string;
    gifUrl: string;
    instructions: string[];
    targetMuscles: string[];
    bodyParts: string[];
    equipment: string[];
    secondaryMuscles: string[];
  };
};

export type ExerciseCardType = {
  name: string;
  exerciseId: string;
};
