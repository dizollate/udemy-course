import styles from "./ButtonIcon.module.css";
import { IButtonIcon, icons } from "./ButtonIcon.props";
import cn from "classnames";
import React from 'react';

export const ButtonIcon = ({
  className,
  appearance,
  icon,
  ...props
}: IButtonIcon): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.white]: appearance == "white",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
