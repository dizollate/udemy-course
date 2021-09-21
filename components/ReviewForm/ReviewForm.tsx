import styles from "./ReviewForm.module.css";
import { IReviewForm } from "./ReviewForm.props";
import cn from "classnames";
import { Button, Input, Rating, Textarea } from "..";
import CloseIcon from './close.svg';

export const ReviewForm = ({
  className,
  productId,
  ...props
}: IReviewForm): JSX.Element => {
  return (
    <>
    <div className={cn(className, styles.reviewForm)} {...props}>
      <Input placeholder='Имя' className={styles.nameReview}/>
      <Input placeholder='Заголовок отзыва' className={styles.titleReview}/>
      <div className={styles.rating}>
        <span>Оценка</span>
        <Rating rating={0} isEditable/>
      </div>
      <Textarea className={styles.description} placeholder='Текст отзыва'/>
      <div className={styles.submit}>
        <Button appearance='primary'>Отправить</Button>
        <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
      </div>
    </div>
    <div className={styles.success}>
      <div className={styles.successTitle}>Ваш отзыв отправлен</div>
      <div className={styles.successThanks}>Спасибо, ваш отзыв будет опубликован после проверки</div>
      <CloseIcon className={styles.close} />
    </div>
    </>
  );
};
