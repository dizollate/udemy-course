import styles from "./Input.module.css";
import { IInput } from "./Input.props";
import cn from "classnames";

export const Input = ({ className, ...props }: IInput): JSX.Element => {
  return (
    <input type="text" className={cn(className, styles.input)} placeholder='Тест' {...props}/>
  );
};
