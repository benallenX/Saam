import { z } from "zod"

export const TaskSchema = z.object({
  subtasks: z.array(z.string().min(3, "Subtask too short")),
})

export type TaskType = z.infer<typeof TaskSchema>
