import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  theme?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="relative flex items-center bg-transparent"
      aria-label="Rayco Property Market Ghana Limited home"
    >
      <Image
        src="/rayco-logo.png"
        alt="Rayco Property Market Ghana Limited"
        width={769}
        height={635}
        priority
        className={
          compact
            ? "h-12 w-auto bg-transparent object-contain object-left"
            : "h-[4.5rem] w-auto bg-transparent object-contain object-left sm:h-[4.85rem]"
        }
      />
    </Link>
  );
}
