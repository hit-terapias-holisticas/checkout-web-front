import {
  Button as ButtonBase,
  buttonVariants,
} from "@/components/ui/button-base";
import { ColorType } from "@/lib/colors";
import { spacing } from "@/lib/spacing";
import { cn } from "@/lib/utils";

import { CSSProperties, ReactNode } from "react";

type ButtonSize = "Large" | "Medium" | "Small";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "Primary" | "Secondary";
  backgroundColor?: ColorType;
  layoutMode?: "width-full" | "flex";
  size?: "Large" | "Medium" | "Small";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  Large: { padding: spacing(16), fontSize: spacing(16) },
  Medium: { padding: `${spacing(8)} ${spacing(16)}`, fontSize: spacing(12) },
  Small: { padding: `${spacing(4)} ${spacing(16)}`, fontSize: spacing(12) },
};

const Button = ({
  children,
  onClick,
  variant = "Primary",
  backgroundColor = "primary_600",
  layoutMode,
  size = "Large",
  className,
  type = "button",
  disabled,
  ...props
}: ButtonProps) => {
  const getVariant = () => {
    switch (variant) {
      case "Secondary":
        return "outline";
      case "Primary":
      default:
        return "default";
    }
  };

  const getLayoutClasses = () => {
    switch (layoutMode) {
      case "width-full":
        return "w-full";
      case "flex":
        return "flex-1";
      default:
        return "";
    }
  };

  const style: CSSProperties = {
    fontWeight: 700,
    borderRadius: "16px",
    ...sizeStyles[size],
  };

  if (backgroundColor) {
    const colorValue = `var(--color-${backgroundColor})`;
    if (variant === "Secondary") {
      style.borderColor = colorValue;
      style.color = colorValue;
    } else {
      style.backgroundColor = colorValue;
    }
  }

  return (
    <ButtonBase
      variant={getVariant()}
      onClick={onClick}
      disabled={disabled}
      className={cn("!h-auto", getLayoutClasses(), className)}
      style={style}
      type={type}
      size={null}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export { Button, buttonVariants };
