import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  type: "submit" | "button";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${styles.button} ${className && className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
