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

export interface ExerciseExercisePage {
  name: string;
  exerciseId: string;
  bodyParts: string;
}

export interface TeamMember {
  id: number;
  name: string;
  gitHub: string;
  mail: string;
  linkedin: string;
}

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

export interface PaginationWithLinksProps {
  pageSizeSelectOptions?: {
    pageSizeSearchParam?: string;
    pageSizeOptions: number[];
  };
  totalCount: number;
  pageSize: number;
  page: number;
  pageSearchParam?: string;
}

export interface WorkoutDescription {
  workoutName: string;
  description: string;
}

export interface ExerciseProps {
  query?: string;
  page?: string;
  pageSize?: string;
  modal?: string;
  exercise_id?: string;
}

export interface ExerciseInfoInterface {
  exerciseId: string;
  name: string;
  gifUrl: string;
  instructions: string[];
  targetMuscles: string[];
  bodyParts: string[];
  equipments: string[];
  secondaryMuscles: string[];
}

export interface WorkoutCountChartProps {
  history: Workout_history[];
}

export type ChartData = {
  exercise: string;
  attempts: number;
  fill: string;
};