import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";

interface CtaButtonProps {
  label: string;
  icon: IconType;
  url: string;
  className?: string;
}

const CtaLink = ({ label, icon: Icon, url, className }: CtaButtonProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      className={cn(
        "bg-btn-bg rounded-full px-4 py-2 text-white flex items-center gap-x-2 hover:scale-95 hover:opacity-70 transition-all duration-300",
        className
      )}
    >
      {label}
      <Icon size={24} className="text-white animate-ping hover:animate-none" />
    </Link>
  );
};

export default CtaLink;
