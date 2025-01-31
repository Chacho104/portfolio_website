import { cn } from "@/app/lib/utils";
import { IconType } from "react-icons";

interface CtaButtonProps {
  label: string;
  icon: IconType;
  className?: string;
  onClick: () => void;
}

const CtaButton = ({
  label,
  icon: Icon,
  className,
  onClick,
}: CtaButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "bg-btn-bg rounded-full px-4 py-3 text-white text-sm flex items-center gap-x-2 hover:scale-95 hover:opacity-70 transition-all duration-300 font-mono",
        className
      )}
    >
      {label}
      <Icon size={24} className="text-white animate-ping hover:animate-none" />
    </button>
  );
};

export default CtaButton;
