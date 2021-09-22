import styles from "./Card.module.css";
import { ICard } from "./Card.props";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(
  (
    { children, color = "white", className, ...props }: ICard,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(className, styles.card, {
          [styles.blue]: color == "blue",
        })}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
