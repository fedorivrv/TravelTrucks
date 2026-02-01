import styles from "./Reviews.module.css";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["reviews-list"]}>
        {reviews.map((item, index) => (
          <li key={index} className={styles["review-item"]}>
            <div className={styles["header"]}>
              <div className={styles["avatar"]}>{item.reviewer_name.charAt(0).toUpperCase()}</div>

              <div className={styles["user"]}>
                <p className={styles["name"]}>{item.reviewer_name}</p>
                <div className={styles["stars"]}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width={16}
                      height={16}
                      className={
                        i < item.reviewer_rating ? styles["star-active"] : styles["star-empty"]
                      }
                    >
                      <use href="/icons.svg#icon-star"></use>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className={styles["comment"]}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
