import { setOptions } from "@googlemaps/js-api-loader";

let configPromise: Promise<void> | null = null;

export function configureMaps(apiKey: string): Promise<void> {
   if (configPromise) return configPromise;

   configPromise = Promise.resolve().then(() => {
      setOptions({
         key: apiKey,
         v: "quarterly"
      })
   });

   return configPromise
}