import styles from "./Input.module.css";
import { IInput } from "./Input.props";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(
  (
    { className, error, ...props }: IInput,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input className={cn( styles.input, {
          [styles.error]: error
        })} {...props} ref={ref} />
        {error && <span className={styles.errorMessage}>{error.message}</span> }
      </div>
    );
  }
);
