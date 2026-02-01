"use client";

import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Booking successful! We will contact you soon.");
    setStartDate(null);
    e.currentTarget.reset();
  };

  return (
    <div className={styles["form-container"]}>
      <div className={styles["header"]}>
        <h3 className={styles["title"]}>Book your campervan now</h3>
        <p className={styles["subtitle"]}>Stay connected! We are always ready to help you.</p>
      </div>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <div className={styles["inputs-container"]}>
          <input className={styles["input"]} name="name" placeholder="Name*" required />
          <input
            className={styles["input"]}
            name="email"
            type="email"
            placeholder="Email*"
            required
          />

          <DatePicker
            selected={startDate}
            onChange={(date: SetStateAction<Date | null>) => setStartDate(date)}
            placeholderText="Booking date*"
            className={styles["input"]}
            dateFormat="dd.MM.yyyy"
            required
            minDate={new Date()}
          />

          <textarea className={styles["textarea"]} name="comment" placeholder="Comment" />
        </div>
        <button className={styles["submit-btn"]} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
