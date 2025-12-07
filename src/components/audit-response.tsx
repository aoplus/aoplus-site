"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Lightbulb, Rocket, Target, RefreshCw } from "lucide-react"
import type { GrowthAuditOutput } from "@/ai/schemas/audit-schemas"

type AuditResponseProps = {
  result: GrowthAuditOutput;
  onReset: () => void;
};

export const AuditResponse = ({ result, onReset }: AuditResponseProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Your Growth Audit is Ready!</h2>
        <p className="text-muted-foreground">Here's a summary of our AI's analysis and recommendations.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Core Problem Diagnosis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium">{result.coreProblem}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            Recommended Service Bundle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Badge className="text-lg">{result.recommendedBundle}</Badge>
          <p className="mt-2 text-muted-foreground">This bundle is tailored to address your core problem effectively.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Actionable Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {result.actionableSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Your Quick Win
          </CardTitle>
          <CardDescription>A high-impact action to take in the next 7 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">{result.quickWin}</p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button onClick={onReset} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Start a New Audit
        </Button>
      </div>
    </div>
  )
}