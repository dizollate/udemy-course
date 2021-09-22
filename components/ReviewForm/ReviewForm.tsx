import styles from "./ReviewForm.module.css";
import { IReviewForm } from "./ReviewForm.props";
import cn from "classnames";
import { Button, Input, Rating, Textarea } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { ReviewFormInterface } from "./ReviewForm.inteface";

export const ReviewForm = ({
  className,
  productId,
  ...props
}: IReviewForm): JSX.Element => {
  const { register, control, handleSubmit, formState: {errors} } = useForm<ReviewFormInterface>();

  const onSubmit = (data: ReviewFormInterface) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(className, styles.reviewForm)} {...props}>
        <Input
          {...register("name", {required: {value: true, message: 'Заполните имя'}})}
          placeholder="Имя"
          className={styles.nameReview}
          error={errors.name}
        />
        <Input
          {...register("title", {required: {value: true, message: 'Заполните заголовок'}})}
          placeholder="Заголовок отзыва"
          className={styles.titleReview}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: {value: true, message: 'Поставьте оценку'}}}
            
            render={({ field }) => (
              <Rating
                error={errors.rating}
                rating={field.value}
                isEditable
                setRating={field.onChange}
                ref={field.ref}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {required: {value: true, message: 'Заполните текст'}})}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div className={styles.successThanks}>
          Спасибо, ваш отзыв будет опубликован после проверки
        </div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};
