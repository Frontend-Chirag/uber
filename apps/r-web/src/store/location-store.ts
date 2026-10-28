import { create } from "zustand";

type GeoLocation = {
    latitude: number;
    longitude: number;
}

type LocationType = {
    location: GeoLocation | null
    setLocation: (location: GeoLocation) => void;
}

export const useLocation = create<LocationType>((set) => ({
    location: null,
    setLocation(location) {
        set({ location: location });
    },
}));
