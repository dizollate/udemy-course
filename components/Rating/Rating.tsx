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
          })}
        />
      );
    });
    setRattingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
