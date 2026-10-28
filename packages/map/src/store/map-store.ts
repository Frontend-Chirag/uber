import { create, } from "zustand";

type Location = {
    latitude: number;
    longitude: number;
};

interface MapStore {
    map: google.maps.Map | null;
    setMap: (map: google.maps.Map | null) => void;
    location: Location | null;
    setLocation: (location: Location | null) => void;
    isLoaded: boolean;
    setIsLoaded: (isLoaded: boolean) => void;
}

export const useMapStore = create<MapStore>((set) => ({
    map: null,
    setMap: (map) => set({ map }),
    location: null,
    setLocation: (location) => set({ location }),
    isLoaded: false,
    setIsLoaded: (isLoaded) => set({isLoaded})
}));