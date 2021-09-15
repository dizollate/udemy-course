import styles from "./Tag.module.css";
import { ITag } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
  children,
  size,
  href,
  color,
  className,
  ...props
}: ITag): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.gray]: color == "gray",
        [styles.red]: color == "red",
        [styles.primary]: color == "primary",
        [styles.ghost]: color == "ghost",
        [styles.green]: color == "green",
      })}
      {...props}
    >
      {href ? <a href={href} target="_blank">{children}</a> : <>{ children }</>}
    </div>
  );
};
