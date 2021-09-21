import styles from "./Review.module.css";
import { IReview } from "./Review.props";
import cn from "classnames";
import UserIcon from "./user.svg";
import { format } from "date-fns";
import {ru} from 'date-fns/locale';
import { Rating } from "..";

export const Review = ({
  review,
  className,
  ...props
}: IReview): JSX.Element => {
  const { title, name, description, createdAt, rating } = review;
  return (
    <div {...props} className={cn(className, styles.review)}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating}/>
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
};
