"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { PlannerTest } from "@/components/PlannerTest";

export function HomeContent() {
  return (
    <main className="p-8 flex flex-col gap-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI Task Planner
        </h1>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
          Enter any complex task and let AI break it down into manageable subtasks
        </p>
        
        {/* Component Examples Section */}
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">Component Examples</h2>
          
          {/* AlertDialog Example */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">AlertDialog Example</h3>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* Skeleton Example */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Skeleton Example</h3>
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </div>
        
        <PlannerTest />
      </div>
    </main>
  );
}
