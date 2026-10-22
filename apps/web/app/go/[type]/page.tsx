import { Button } from "@repo/ui/button";
import { notFound } from "next/navigation";

interface TripProps {
  params: Promise<{
    type: string;
  }>;
}

export default async function Trip({ params }: TripProps) {
  const { type } = await params;

  if (type !== "home" && type !== "pickup" && type !== "drop") {
    notFound();
  }

  return (
    <div>
      <h1>Trip {type}</h1>
      <Button>{type}</Button>
    </div>
  );
}
