import Link from "next/link";
import { Check, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { StarterKit } from "@/lib/starter-kits";

type QuickStarterCardProps = {
  kit: StarterKit;
};

export function QuickStarterCard({ kit }: QuickStarterCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{kit.label}</Badge>
          <p className="text-sm font-medium text-muted-foreground">{kit.delivery}</p>
        </div>
        <CardTitle className="pt-4">{kit.name}</CardTitle>
        <CardDescription className="!mt-1 text-2xl font-bold text-primary">
          {kit.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <ul className="flex-1 space-y-3">
          {kit.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">{kit.target}</p>
        {kit.upsellPath && (
            <>
                <Separator className="my-4" />
                 <div className="flex items-start gap-3 text-xs text-muted-foreground">
                    <Info className="h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                        <p className="font-semibold">Upsell Path</p>
                        <p>{kit.upsellPath}</p>
                    </div>
                </div>
            </>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`mailto:connect@aoplus.in?subject=Inquiry about ${kit.name} Starter Kit`}>
            {kit.cta}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}