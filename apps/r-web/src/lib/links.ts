import { FaCar } from "react-icons/fa";
import { TbKeyFilled } from "react-icons/tb";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";



type linkType = {
  icon?: LucideIcon | IconType;
  linkaddress: string;
  label: string;
  /** Match prefix for active state detection */
  activePrefix: string;
}

export const links: linkType[] = [
  {
    label: 'Ride',
    linkaddress: '/go/home',
    activePrefix: '/go',
    icon: FaCar
  },
  {
    label: 'Rent',
    linkaddress: '/rent',
    activePrefix: '/rent',
    icon: TbKeyFilled
  }
]