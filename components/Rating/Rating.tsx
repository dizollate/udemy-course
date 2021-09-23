import styles from "./Rating.module.css";
import { IRating } from "./Rating.props";
import cn from "classnames";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import StarIcon from "./star.svg";

export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, error, ...props }: IRating,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRattingArray] = useState<JSX.Element[]>(
      Array(5).fill(<></>)
    );

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <StarIcon
            className={cn(styles.star, {
              [styles.fill]: i < currentRating,
              [styles.editable]: isEditable,
              [styles.error]: error,
            })}
          />
        );
      });
      setRattingArray(updatedArray);
    };

    useEffect(() => {
      constructRating(rating);
  }, [rating]);

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    return (
      <div {...props} ref={ref} className={styles.starWrapper}>
        {ratingArray.map((r, i) => {
          return (
            <span
              key={i}
              className={cn(styles.spanStar, {
                [styles.error]: error,
              })}
              onMouseEnter={() => changeDisplay(i + 1)}
              onMouseLeave={() => changeDisplay(rating)}
              onClick={() => onClick(i + 1)}
              tabIndex={isEditable ? 0 : -1}
            >
              {r}
            </span>
          );
        })}
        {error && <span className={styles.starError}>{error.message}</span>}
      </div>
    );
  }
);
