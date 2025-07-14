"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export function PlannerTest() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ subtasks: string[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTest = async () => {
    if (!input.trim()) {
      setError("Please enter a request to test");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/run-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setResult(data.result);
    } catch {
      setError("Failed to connect to the API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-slate-50 dark:bg-slate-900 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">🤖 AI Task Planner</h3>
      
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Enter a complex request (e.g., 'Plan a wedding with a $20k budget')"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-base"
            onKeyDown={(e) => e.key === 'Enter' && handleTest()}
          />
        </div>
        
        <Button onClick={handleTest} disabled={loading} className="w-full">
          {loading ? "Processing..." : "Generate Subtasks"}
        </Button>

        {loading && (
          <div className="space-y-3 p-4 rounded border">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <span className="text-sm text-muted-foreground">Generating subtasks...</span>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result && (
          <div className="space-y-3 bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-800">
            <h4 className="font-medium text-green-800 dark:text-green-200">✅ Generated Subtasks:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {result.subtasks.map((task: string, index: number) => (
                <li key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
