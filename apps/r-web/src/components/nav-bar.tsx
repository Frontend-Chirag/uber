"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink
} from "@repo/ui/navigation-menu";
import { links } from "../lib/links";
import { Button } from "@repo/ui/button";
import { cn } from "@repo/ui/lib/utils";
import uber from "@repo/ui/assets/icons/Uber_Logo_Black_RGB.png";
import Image from "next/image";


export function Navbar() {

    const pathname = usePathname();

    return (
        <div className="w-full h-[65px] flex absolute left-0 top-0 z-20 bg-transparent shadow-none lg:after:content-[''] lg:after:absolute after:h-[6px] lg:after:w-full lg:after:bg-neutral-100 lg:after:bottom-0 lg:after:left-0 lg:after:z-10 ">
            <header className="w-full max-w-[1732px] h-full flex justify-between items-center px-4 lg:px-8">
                <NavigationMenu className="flex ">
                    <NavigationMenuItem className='list-none mr-12'>
                        <NavigationMenuLink
                            asChild
                            className="hover:bg-tranparent"
                        >
                            <Link href={'/go/home'} >
                                <Image
                                    src={uber}
                                    width={100}
                                    height={100}
                                    alt="image"
                                    loading='eager'
                                />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {links.map(({ activePrefix, label, linkaddress, icon: Icon }) => {
                        const isActive = pathname.startsWith(activePrefix);
                        return (
                            <NavigationMenuItem
                                key={label}
                                className={cn(
                                    'list-none relative lg:flex hidden px-2 ',
                                    isActive && "after:content-[''] after:absolute after:h-[6px] after:w-full after:bg-black after:left-0 after:bottom-[-14px]  after:z-20")}
                            >

                                <NavigationMenuLink asChild className="hover:bg-transparent">
                                    <Link href={linkaddress} className="flex flex-row items-center">
                                        {Icon &&
                                            <Icon
                                                className="size-4 text-black mr-1"
                                            />
                                        }
                                        <span className='text-sm font-medium'>
                                            {label}
                                        </span>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenu>
                <div className="flex gap-x-4">
                    <Button
                        variant='ghost'
                        className="rounded-full text-sm font-medium cursor-pointer"
                    >
                        Login
                    </Button>
                    <Button
                        className="lg:block hidden rounded-full text-sm font-medium cursor-pointer"
                    >
                        signup
                    </Button>
                </div>
            </header>
        </div>
    )
}