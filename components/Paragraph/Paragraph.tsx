import styles from "./Paragraph.module.css";
import { IParagraph } from "./Paragraph.props";
import cn from "classnames";

export const Paragraph = ({ children, size = 'm', bold, ...props }: IParagraph): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.large]: size == "l",
        [styles.bold]: bold == true,
      })}
      {...props}
    >
      {children}
    </p>
  );
};
