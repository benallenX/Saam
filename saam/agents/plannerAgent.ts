import { Sample} from "@/lib/gemini"
import { TaskSchema } from "../lib/taskSchemas"

export async function runPlannerAgent(input: string) {
  const prompt = `Split the following user request into clear subtasks:\n\n"${input}"\n\nReturn only a bullet-point list.`

  const result = await Sample(prompt)
  const rawText = result.content

  const subtasks = rawText
    .split("\n")
    .map((line: string) => line.replace(/^[\-\d\.\s]+/, "").trim())
    .filter(Boolean)

  const validated = TaskSchema.safeParse({ subtasks })

  if (!validated.success) {
    throw new Error("PlannerAgent: Invalid subtask format")
  }

  return validated.data
}
