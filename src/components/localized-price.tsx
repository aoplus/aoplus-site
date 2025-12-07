
"use client";
import { useGeolocation } from "@/hooks/use-geolocation";
import { formatPrice } from "@/lib/currency";
import { Skeleton } from "@/components/ui/skeleton";

type LocalizedPriceProps = {
    basePriceInr: number;
    className?: string;
}

export function LocalizedPrice({ basePriceInr, className }: LocalizedPriceProps) {
    const { countryCode, loading } = useGeolocation();

    if (loading) {
        return <Skeleton className={cn("h-6 w-24", className)} />;
    }

    return <>{formatPrice(basePriceInr, countryCode)}</>;
}
