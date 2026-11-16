import {
  BadgeCheck,
  CalendarClock,
  Layers,
  Users,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/company";

const icons: Record<IconName, LucideIcon> = {
  wrench: Wrench,
  layers: Layers,
  users: Users,
  badge: BadgeCheck,
  wallet: Wallet,
  calendar: CalendarClock,
};

/** Maps the icon names used in the data files to Lucide icons. */
export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" />;
}
