"use client";

import {
  FLOATING_NEEDLE_SIZE,
  FLOATING_SIZE,
  FloatingMarker,
} from "./floating-marker";

import { cn } from "@repo/ui/lib/utils";
import { useEffect, useState } from "react";
import { useMapStore } from "../store/map-store";

export  function MapPin() {
  const { map } = useMapStore();
  const isPin = true;

  const [dragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!map) return;

    const dragStartListener = map.addListener("dragstart", () =>
      setIsDragging(true)
    );

    const dragEndListener = map.addListener("dragend", () =>
      setIsDragging(false)
    );

    return () => {
      google.maps.event.removeListener(dragStartListener);
      google.maps.event.removeListener(dragEndListener);
    };
  }, [map]);

  if (!isPin || !map) return null;

  return (
    <div
      className={cn(
        "map:pointer-events-none map:absolute map:block"
      )}
      style={{
        transform: "translate(-50%, -100%)",
        top: "50%",
        left: "50%",
      }}
    >
      <FloatingMarker
        dragging={dragging}
        markerVisible={true}
        size={FLOATING_SIZE["x-small-circle"]}
        needle={FLOATING_NEEDLE_SIZE.medium}
      />
    </div>
  );
}