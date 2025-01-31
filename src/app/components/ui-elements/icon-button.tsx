// A simple resusable component that renders an icon inside a button element

import { cn } from "@/app/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  label,
}) => {
  return (
    <button
      aria-label={label}
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center shadow-md",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
