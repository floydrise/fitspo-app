'use client';
import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { ChartData, Workout_history } from '../lib/definitions';
const chartConfig: ChartConfig = {
  exercise: {
    label: 'Times worked out',
    color: 'hsl(272, 61%, 34%)',
  },
};
export function MostPopularExercises({ history }: { history: Workout_history[] }) {
  const data = history.flatMap((history) =>
    history.exercise_list.map((exercise) => {
      return {
        exercise: exercise.name,
      };
    })
  );
  const userData: string[] = data.map((data) => data.exercise);

  const generateChartData = (data: string[]): ChartData[] => {
    const exerciseCounts: Record<string, number> = data.reduce(
      (acc, exercise) => {
        acc[exercise] = (acc[exercise] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const generateColours = (numOfExercises: number): string[] => {
      const saturation = '100%';
      const lightness = '50%';
      const colours = [];

      for (let i = 0; i < numOfExercises; i++) {
        const hue = Math.floor((360 / numOfExercises) * i);
        colours.push(`hsl(${hue}, ${saturation}, ${lightness})`);
      }
      return colours;
    };

    const chartData: ChartData[] = Object.entries(exerciseCounts).map(
      ([exercise, count], index) => {
        return {
          exercise,
          attempts: count,
          fill: generateColours(Object.keys(exerciseCounts).length)[index],
        };
      }
    );
    return chartData;
  };

  const chartData = generateChartData(userData);
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Your most popular exercises</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[300px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='attempts'
              nameKey='exercise'
              innerRadius={60}
              outerRadius={100}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-2xl font-bold'
                        >
                          Exercises
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        ></tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          <TrendingUp className='h-4 w-4' />
          <span>Keep up the great work!</span>
        </div>
        <div className='leading-none text-muted-foreground'></div>
      </CardFooter>
    </Card>
  );
}
