"use client"
import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
// import { Workout_history } from "../lib/definitions"

const chartConfig: ChartConfig = {
  visitors: {
    label: "Times worked out",
    color: "hsl(var(--chart-1))", // Add a color property for compatibility
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-2))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-3))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-4))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-5))",
  },

} satisfies ChartConfig
export function Component(){
  // { history }: { history: Workout_history[] }

/*    const data = history.flatMap((history) =>
        history.exercise_list.map((exercise) => {
          return {
            exercise: exercise.name,
            
          };
        })
      );*/
    
    const chartData = [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
        { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
        { browser: "other", visitors: 190, fill: "var(--color-other)" },
      ]


  const generateChartData = (data: string[]): ChartData[] => {
    const exerciseCounts: Record<string, number> = data.reduce((acc, exercise) => {
      acc[exercise] = (acc[exercise] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    
    const chartData: ChartData[] = Object.entries(exerciseCounts).map(
      ([exercise, count]) => {
        const configItem = chartConfig[exercise as keyof typeof chartConfig];
        return {
          exercise,
          attempts: count,
          fill: configItem?.color || "hsl(var(--default-color))", 
        };
      }
    );
  
    return chartData;
  };
  const chartData =generateChartData(userData)
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Your most popular exercises</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="attempts"
              nameKey="exercise"
              innerRadius={60}
              outerRadius={100}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          Exercises
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          <TrendingUp className="h-4 w-4" />
          <span>Keep up the great work!</span>
        </div>
        <div className="leading-none text-muted-foreground"></div>
      </CardFooter>
    </Card>
  )
}