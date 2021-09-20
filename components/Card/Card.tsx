import styles from "./Card.module.css";
import { ICard } from "./Card.props";
import cn from "classnames";

export const Card = ({ children, color = 'white', className, ...props }: ICard): JSX.Element => {
  return (
    <div className={cn(className, styles.card, {
      [styles.blue]: color == 'blue'
    })} {...props}>
      {children}
    </div>
  );
};
