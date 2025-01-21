"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Workout_history } from "../lib/definitions"


interface WorkoutCountChartProps {
  history: Workout_history[]
}

export function ProcessWorkoutData({ history }: WorkoutCountChartProps) {
  const workoutName: { [key: number]: string } = {
    1: "Upper Body",
    2: "Lower Body",
    3: "Core",
    4: "Chest",
    5: "Back",
    6: "Biceps",
    7: "Triceps",
    8: "Shoulders",
  }

  const processWorkoutData = () => {
    const workoutCounts = Object.values(workoutName).reduce(
      (acc, name) => {
        acc[name] = 0
        return acc
      },
      {} as Record<string, number>,
    )

    history.forEach((historyItem) => {
      const workoutNameValue = workoutName[historyItem.workout_id]
      if (workoutNameValue) {
        workoutCounts[workoutNameValue]++
      }
    })

    return Object.entries(workoutCounts).map(([name, count]) => ({ name, count }))
  }

  const chartData = processWorkoutData()

  const chartConfig = {
    count: {
      label: "Workout Count",
      color: "hsl(272, 61%, 34%)",
    },
  }

  return (
    <Card className="w-72 md:w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-center">Your total workouts</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[210px] w-64 md:w-full">
          <BarChart data={chartData} layout="vertical" margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Workout</span>
                          <span className="font-bold text-muted-foreground">{payload[0].payload.name}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Count</span>
                          <span className="font-bold">{payload[0].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar dataKey="count" fill="var(--color-count)">
              <LabelList dataKey="count" position="right" fill="hsl(var(--foreground))" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
