"use client";

import { NuqsAdapter } from "nuqs/adapters/next";
import { Navbar } from "../../components/nav-bar";
import { Map } from "@repo/map/components/map";
import { env } from "../../env";

interface HomeLayoutProps {
  sidebar: React.ReactNode;
}

export default function HomeLayout({ sidebar }: HomeLayoutProps) {

  return (
    <NuqsAdapter>
      <div className="h-dvh flex flex-col  relative">
        <Navbar />
        {/* Main */}
        <main className="flex-1 lg:pt-[65px] overflow-hidden ">
          <div className="flex h-full flex-col-reverse lg:flex-row lg:gap-x-4 p-0 lg:px-8 xl:px-16 lg:py-8">
            {/* Sidebar */}
            <section className="
              w-full
              lg:w-[340px]
              lg:min-w-[340px]
              shrink-0
              lg:h-full
              lg:overflow-y-auto
              xl:border-2
              xl:rounded-xl
              border-neutral-200
              bg-white
              md:p-4 xl:p-6
              ">
              {sidebar}
            </section>

            {/* Map */}
            <section className="
              relative
              w-full
              min-h-[64vh]
              lg:min-h-0
              lg:h-full
              lg:flex-1
              lg:rounded-xl
              overflow-hidden
              bg-neutral-100
              ">
              <Map
                apikey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                mapId={env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
              />
            </section>
          </div>
        </main>
      </div>
    </NuqsAdapter>
  );
}