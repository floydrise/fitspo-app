'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Workout_history } from '../lib/definitions';

interface WeightVsTimeProps {
  date: string;
  tWeight: number;
  tReps: number;
}

function WeightVsTime({ history }: { history: Workout_history[] }) {
  const WeightAndRepData: WeightVsTimeProps[] = history.map((workout) => {
    const exercisesData = workout.exercise_list.map((exercise) => {
      return {
        weight: exercise.weight,
        reps: exercise.reps_count,
      };
    });
    const totalWeight = exercisesData.reduce(
      (total, current) => total + current.weight,
      0
    );
    const totalReps = exercisesData.reduce(
      (total, current) => total + current.reps,
      0
    );

    return {
      date: new Date(workout.date).toLocaleDateString(),
      tWeight: totalWeight,
      tReps: totalReps,
    };
  });

  const chartConfig = {
    count: {
      label: 'Weight Lifted by Day',
      color: 'hsl(272, 61%, 34%)',
    },
  };

  const aggregatedData = Object.values(
    WeightAndRepData.reduce(
      (acc, curr) => {
        if (!acc[curr.date]) {
          acc[curr.date] = { date: curr.date, weight: 0, reps: 0 };
        }
        acc[curr.date].weight += curr.tWeight;
        acc[curr.date].reps += curr.tReps;
        return acc;
      },
      {} as Record<string, { date: string; weight: number; reps: number }>
    )
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Card className='w-72 max-w-3xl md:w-full'>
      <CardHeader>
        <CardTitle className='text-center'>
          Your Weight Lifted Over Time
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className='h-[210px] w-64 md:w-full'
        >
          <LineChart
            data={aggregatedData}
            layout='horizontal'
            margin={{ top: 20, right: 20, left: -5, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='date'
              tickMargin={5}
              minTickGap={10}
              interval='preserveStartEnd'
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`;
              }}
              label={{
                value: 'Date',
                position: 'bottom',
                offset: -10,
                dy: 5,
              }}
            />
            <YAxis
              dataKey={'weight'}
              tickMargin={5}
              minTickGap={10}
              label={{
                value: 'Weight Lifted (kgs)',
                angle: -90,
                position: 'middleLeft',
                dx: -15,
              }}
            />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className='rounded-lg border bg-background p-2 shadow-sm'>
                      <div className='grid grid-cols-2 gap-2'>
                        <div className='flex flex-col'>
                          <span className='text-[0.70rem] uppercase text-muted-foreground'>
                            Date
                          </span>
                          <span className='font-bold text-muted-foreground'>
                            {payload[0].payload.date}
                          </span>
                        </div>
                        <div className='flex flex-col'>
                          <span className='text-[0.70rem] uppercase text-muted-foreground'>
                            Weight
                          </span>
                          <span className='font-bold'>{payload[0].value}</span>
                          <div className='flex flex-col'>
                            <span className='text-[0.70rem] uppercase text-muted-foreground'>
                              Reps
                            </span>
                            <span className='font-bold'>
                              {payload[0].payload.reps}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              dataKey='weight'
              stroke='hsl(272, 61%, 34%)'
              dot={true}
            ></Line>
            {/* <Line dataKey='reps' stroke='hsl(162, 61%, 34%)' dot={true}></Line> */}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default WeightVsTime;
