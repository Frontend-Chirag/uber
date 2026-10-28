"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@repo/ui/combobox";

import {
  FLOATING_SIZE,
  FloatingMarker,
} from "./floating-marker";

import { InputGroupAddon } from "@repo/ui/input-group";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@repo/ui/item";

import { Label } from "@repo/ui/label";
import { cn } from "@repo/ui/lib/utils";

import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type BaseOption = {
  label: string;
  value: string;
  description?: string;
  icon?: LucideIcon | IconType;
};

type LocationSelectorProps<T> =
  React.ComponentProps<typeof Combobox<T>> & {
    inputOverides?: React.ComponentProps<typeof ComboboxInput>;
  };

export function LocationSelector<T extends BaseOption>({
  inputOverides,
  ...rest
}: LocationSelectorProps<T>) {
  return (
    <Combobox {...rest}>
      <ComboboxInput
        showTrigger={false}
        showClear={true}
     
        className={cn(
          "map:relative map:shadow-none map:focus-within:bg-white  map:overflow-hidden map:border-none map:gap-x-1",
        )}
        {...inputOverides}
      >
      </ComboboxInput>

      <ComboboxContent
        align="center"
        className="map:w-full map:max-w-max"
      >
        <ComboboxEmpty>
          No results found
        </ComboboxEmpty>

        <ComboboxList className="map:px-0! map:py-4">
          {(option) => {
            const Icon = option.icon;

            return (
              <ComboboxItem
                key={option.value}
                value={option}
                className="map:rounded-none map:p-0! map:bg-white"
              >
                <Item className="map:flex map:py-2.5">
                  <ItemMedia
                    variant="icon"
                    className="map:rounded-full map:size-9 map:bg-black map:text-white"
                  >
                    <Icon className="map:size-5" />
                  </ItemMedia>

                  <ItemContent className="map:gap-y-0!">
                    <ItemTitle className="map:text-base map:font-medium">
                      {option.label}
                    </ItemTitle>

                    <ItemDescription className="map:text-black map:font-light">
                      {option.description}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </ComboboxItem>
            );
          }}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}