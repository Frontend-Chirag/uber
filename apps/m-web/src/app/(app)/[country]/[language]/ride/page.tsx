import { Suspense } from "react";

interface RidePageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default function RidePage({ params }: RidePageProps) {
  return (
    <Suspense fallback={<div>Loading ride page...</div>}>
      <RideContent params={params} />
    </Suspense>
  );
}

async function RideContent({ params }: RidePageProps) {
  const { country, language } = await params;

  return (
    <main>
      <h1>Book a ride</h1>
      <p>Country: {country}</p>
      <p>Language: {language}</p>
    </main>
  );
}