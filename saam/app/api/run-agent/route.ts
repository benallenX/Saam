import { runPlannerAgent } from "@/agents/plannerAgent";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

    if (!input || typeof input !== "string") {
      return NextResponse.json(
        { error: "Input is required and must be a string" },
        { status: 400 }
      );
    }

    const result = await runPlannerAgent(input);
    
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Planner agent error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}