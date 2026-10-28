"use client";

import { FLOATING_SIZE, FloatingMarker } from "@repo/map/components/floating-marker";
import { LocationSelector } from "@repo/map/components/location-selector";

import { Button } from "@repo/ui/button";
import { ButtonGroup, ButtonGroupAddon } from "@repo/ui/button-group";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@repo/ui/input-group";
import { ChevronDownIcon, Clock3Icon, SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSelectedLayoutSegment } from "next/navigation";
import { TbClockHour3Filled } from "react-icons/tb";


interface TripPageProps {
    type: 'home' | 'pickup' | 'drop'
}

export const TripPage = ({
    type
}: TripPageProps) => {

    const isPickup = type === 'pickup';
    const isDrop = type === 'drop';
    const pathname = usePathname();
 
    const router = useRouter();

    const onSelectorFocus = (e: React.FocusEvent, { type }: TripPageProps) => {
        e.preventDefault();
        console.log(pathname)
        router.replace(`/go/${type}`)
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold items-start">Get a Ride</h1>
            <div className="flex flex-col gap-4">
                <LocationSelector
                    inputOverides={{
                        autoFocus: isPickup,
                        onFocus: (e) => onSelectorFocus(e, { type: 'pickup' }),
                        placeholder: 'Pickup location',
                        children: <InputGroupAddon><FloatingMarker size={FLOATING_SIZE["x-small-square"]} /></InputGroupAddon>,
                        className: "bg-neutral-100 focus-within:bg-white text-base"
                    }}
                />
                <LocationSelector
                    inputOverides={{
                        autoFocus: isDrop,
                        onFocus: (e) => onSelectorFocus(e, { type: 'drop' }),
                        placeholder: 'Dropoff location',
                        children: <InputGroupAddon><FloatingMarker size={FLOATING_SIZE["x-small-circle"]} /></InputGroupAddon>,
                        className: "bg-neutral-100 focus-within:bg-white"
                    }}
                />
                <Button
                    size='lg'
                    variant='secondary'
                    className="hidden lg:flex rounded-lg justify-between px-2 "
                >
                    <div className='flex items-center gap-x-2'>
                        <TbClockHour3Filled
                            size='8'
                        />
                        Pickup now
                    </div>
                    <ChevronDownIcon size='6' />
                </Button>
            </div>
            <Button size='lg' className="hidden lg:flex rounded-lg ">Search</Button>
        </div>
    );
}
