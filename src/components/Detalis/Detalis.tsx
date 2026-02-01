"use client";
import { useState, useEffect } from "react";
import { useCampersStore } from "@/store/useCampersStore";
import InfoCard from "./InfoCard/InfoCard";
import DetailsTabs from "./DetailsTabs/DetailsTabs";
import Features from "./FeaturesForm/FeaturesForm";
import Reviews from "./Reviews/Reviews";
import BookingForm from "./BookingForm/BookingForm";
import styles from "./Detalis.module.css";

const Detalis = () => {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">("features");
  const { currentCamper, isLoading } = useCampersStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <div className={styles["loader"]}>Loading...</div>;
  if (!currentCamper) return <div className={styles["error"]}>Camper not found</div>;

  return (
    <section className={styles["detalis"]}>
      <div className="container">
        <InfoCard camper={currentCamper} />

        <DetailsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className={styles["content-container"]}>
          <div className={styles["tab-content"]}>
            {activeTab === "features" ? (
              <Features camper={currentCamper} />
            ) : (
              <Reviews reviews={currentCamper.reviews} />
            )}
          </div>

          <div className={styles["form-container"]}>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detalis;
