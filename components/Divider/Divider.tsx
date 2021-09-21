import styles from "./Divider.module.css";
import { IDivider } from "./Divider.props";
import cn from "classnames";

export const Divider = ({ className, ...props }: IDivider): JSX.Element => {
  return (
    <hr className={cn(className, styles.hr)} {...props}/>
  );
};
