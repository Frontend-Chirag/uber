"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { MdMyLocation } from "react-icons/md";
import { useMapStore } from "../store/map-store";
import { Button } from "@repo/ui/button";

export default function MapControl() {
  const { map } = useMapStore();

  if (!map) return null;

  const zoomIn = () => {
    map.setZoom(map.getZoom()! + 1);
  };

  const zoomOut = () => {
    map.setZoom(map.getZoom()! - 1);
  };

  return (
    <div className="map:flex map:flex-col map:gap-y-5 map:absolute map:border map:top-4 map:right-4 map:z-10">
      <Button
        className="map:text-black map:bg-white map:w-10 map:h-10 hover:map:bg-neutral-100 map:rounded-full map:shadow-[0_0px_20px_rgba(0,0,0,0.2)]"
      >
        <MdMyLocation className="map:size-5" />
      </Button>

      <div className="map:flex map:flex-col map:w-11 map:bg-white map:rounded-md map:overflow-hidden map:shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
        <Button
          onClick={zoomIn}
          className="map:text-black map:bg-white map:p-0 hover:map:bg-neutral-100 map:rounded-none"
        >
          <PlusIcon className="map:size-6" />
        </Button>

        <Button
          onClick={zoomOut}
          className="map:text-black map:bg-white map:p-2 hover:map:bg-neutral-100 map:rounded-none"
        >
          <MinusIcon className="map:size-6" />
        </Button>
      </div>
    </div>
  );
}