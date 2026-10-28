import { cn } from '@repo/ui/lib/utils';
import React from 'react'

export enum FLOATING_NEEDLE_SIZE {
  none = "map:h-0",
  short = "map:h-2",
  medium = "map:h-4",
  tall = "map:h-6"
}
export enum FLOATING_SIZE {
  "x-small-square" = `
    map:w-3 map:h-3
    map:flex map:justify-center map:items-center
    map:before:content-[""]
    map:before:bg-white
    map:before:w-1 map:before:h-1
  `,

  "x-small-circle" = `
    map:w-3 map:h-3
    map:flex map:justify-center map:items-center
    map:rounded-full
    map:before:content-[""]
    map:before:bg-white
    map:before:w-1 map:before:h-1
    map:before:rounded-full
  `,

  small = "map:w-6 map:h-6 map:rounded-full",

  medium = "map:w-6 map:h-9 map:rounded-full",

  large = "map:w-6 map:h-12 map:rounded-full",
}

export enum FLOATING_KIND {
  "default" = "map:bg-black",
  "accent" = "map:bg-blue-500",
  "negative" = "map:bg-red-500"
}

interface FloatingMarkerProps {
  needle?: FLOATING_NEEDLE_SIZE;
  size?: FLOATING_SIZE
  dragging?: boolean;
  kind?: FLOATING_KIND;
  markerVisible?: boolean;
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  label?: string;
  secondarylabel?: string;
  anchorPosition?: {
    position: FloatingRouteMarkerAnchorPositions,
    offset: number
  }
}

export const FloatingMarker = ({
  dragging,
  needle,
  size = FLOATING_SIZE.small,
  kind = FLOATING_KIND.default,
  markerVisible = true,
  label,
  secondarylabel,
  startEnhancer,
  endEnhancer,
  anchorPosition = {
    position: FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomCenter,
    offset: 0
  }
}: FloatingMarkerProps) => {
  return (
    <div className='map:relative'>
      {label && (
        <div
          className='map:absolute map:bg-white map:p-2 map:flex map:gap-x-1'
          style={{
            transform: calculateFloatingRouteMarkerOffsets(
              anchorPosition.position,
              anchorPosition.offset
            )
          }}
        >
          {startEnhancer}

          <div className='map:flex map:flex-col'>
            <p className='map:text-[14px] map:font-uber-semibold map:text-black map:text-nowrap'>
              {label}
            </p>

            <p className='map:text-[14px] map:font-uber-semibold map:text-black map:text-nowrap'>
              {secondarylabel}
            </p>
          </div>
        </div>
      )}

      <div className="map:flex map:flex-col map:items-center">
        <div className="map:relative map:flex map:flex-col map:items-center">
          <div
            className={cn(
              size,
              kind,
              "map:transition-all map:duration-300 map:ease-in-out"
            )}
          />

          <div
            className={cn(
              "map:w-1",
              needle,
              kind,
              "map:transition-all map:duration-300 map:ease-in-out"
            )}
          />

          <div
            className={cn(
              dragging ? "map:h-2" : "map:h-0",
              "map:transition-all map:duration-300 map:ease-in-out"
            )}
          />

          {dragging && (
            <div className="map:w-1.5 map:h-1 map:rounded-full map:shadow-[0_0_6px_rgba(0,0,0,0.7)] map:bg-black map:transition-all map:duration-300 map:ease-in-out" />
          )}
        </div>
      </div>
    </div>
  );
};

export const FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS = Object.freeze({
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  rightCenter: 'right-center',
  bottomRight: 'bottom-right',
  bottomCenter: 'bottom-center',
  bottomLeft: 'bottom-left',
  leftCenter: 'left-center',
} as const);

export type FloatingRouteMarkerAnchorPositions =
  (typeof FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS)[keyof typeof FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS];

const arrowSize = 8;

const FLOATING_ROUTE_MARKER_OFFSETS = Object.freeze({
  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topLeft]: (offset: number) =>
    `translate(calc(${arrowSize}px + ${offset}px), calc(${arrowSize}px + ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topRight]: (offset: number) =>
    `translate(calc(-100% - ${arrowSize}px - ${offset}px), calc(${arrowSize}px + ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomLeft]: (offset: number) =>
    `translate(calc(${arrowSize}px + ${offset}px), calc(-100% - ${arrowSize}px - ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomRight]: (offset: number) =>
    `translate(calc(-100% - ${arrowSize}px - ${offset}px), calc(-100% - ${arrowSize}px - ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topCenter]: (offset: number) =>
    `translate(-50%, calc(${arrowSize}px + ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomCenter]: (offset: number) =>
    `translate(-50%, calc(-100% - ${arrowSize}px - ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.leftCenter]: (offset: number) =>
    `translate(calc(${arrowSize}px + ${offset}px), -50% )`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.rightCenter]: (offset: number) =>
    `translate(calc(-100% - ${arrowSize}px - ${offset}px), -50%)`,
} as const);

export function calculateFloatingRouteMarkerOffsets(
  anchorPosition: FloatingRouteMarkerAnchorPositions,
  offset = 0
) {
  return FLOATING_ROUTE_MARKER_OFFSETS[anchorPosition](offset);
}