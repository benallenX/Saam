import { runPlannerAgent } from "@/agents/plannerAgent"

async function testPlanner() {
  const input = "Get the weather in Tokyo and tell me if it's safe to go outside."
  const result = await runPlannerAgent(input)

  console.log("✅ PlannerAgent output:")
  console.log(result)

  if (!Array.isArray(result.subtasks)) throw new Error("Invalid output structure")
  if (result.subtasks.length === 0) throw new Error("No subtasks returned")
}

testPlanner()
