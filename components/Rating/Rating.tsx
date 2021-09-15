import styles from "./Rating.module.css";
import { IRating } from "./Rating.props";
import cn from "classnames";
import { useEffect, useState } from "react";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRating): JSX.Element => {
  const [ratingArray, setRattingArray] = useState<JSX.Element[]>(
    Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.fill]: i < currentRating,
            [styles.editable]: isEditable,
          })}
        />
      );
    });
    setRattingArray(updatedArray);
  };

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
    <div {...props}>
      {ratingArray.map((r, i) => {
        console.log(i);
        return (
          <span
            key={i}
            className={styles.spanStar}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
            tabIndex={isEditable ? 0 : -1}
          >
            {r}
          </span>
        );
      })}
    </div>
  );
};
