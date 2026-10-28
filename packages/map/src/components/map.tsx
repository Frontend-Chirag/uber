"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { importLibrary } from "@googlemaps/js-api-loader";

import { Loader } from "@repo/ui/loader";

import { configureMaps } from "../config/maps-config";
import MapControl from "./map-controls";
import { MapPin } from "./map-pin";
import { useMapStore } from "../store/map-store";


type MapProps = {
  children?: React.ReactNode;
  apikey: string;
  mapId: string
};


function MapInner({
  children,
  mapId,
  apikey
}: MapProps) {

  const mapRef = useRef<HTMLDivElement | null>(null);

  const mapInstance = useRef<google.maps.Map | null>(null);

  const {
    isLoaded,
    setIsLoaded,
    setMap,
    location,
    setLocation
  } = useMapStore();



  useEffect(() => {
    if (mapInstance.current) return;
    const init = async () => {
      await configureMaps(apikey);
      try {
        const { Map } = await importLibrary("maps");
        if (!mapRef.current ) return;
        console.log(location)
        const map = new Map(
          mapRef.current,
          {
            center: {
              lat: 28.6327,
              lng:  77.2198
            },
            zoom: 14,
            mapId: mapId,
            disableDefaultUI: true,
            gestureHandling: "greedy",
          }
        );

        map.addListener('idle', () => {
          const center = map.getCenter();
          console.log(center)
          if (!center) return;
          const lat = center.lat(); 
          const lng = center.lng();
          setLocation({
            latitude: lat,
            longitude: lng
          })
        })
        mapInstance.current = map;
        setMap(map);
        setIsLoaded(true);
      } catch (err) {

        console.error(
          "Error loading map:",
          err
        );
      }
    };
    init();
  }, []);

  return (
    <div className="map:relative map:w-full map:h-full">
      <div
        ref={mapRef}
        className="map:w-full map:h-full"
      />
      <MapControl />
      <MapPin/>
      {children}
    </div>
  );
}
export const Map:
  React.ComponentType<MapProps> = dynamic(
    () => Promise.resolve(MapInner),
    {
      ssr: false,

      loading: () => (
        <div className="map:h-full map:w-full map:animate-pulse" />
      ),
    }
  );