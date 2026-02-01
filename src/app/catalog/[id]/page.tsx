"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useCampersStore } from "@/store/useCampersStore";
import styles from "./page.module.css";
import Detalis from "@/components/Detalis/Detalis";

const Page = () => {
  const { id } = useParams();
  const { currentCamper, getCamperById, isLoading } = useCampersStore();

  useEffect(() => {
    if (id) {
      getCamperById(id as string);
    }
  }, [id, getCamperById]);

  if (isLoading) return <div className={styles['loader']}>Loading camper details...</div>;
  if (!currentCamper) return <div className={styles['error']}>Camper not found</div>;

  return (
    <section className={styles["details-section"]}>
      <div className="container">
        <Detalis camper={currentCamper} />
      </div>
    </section>
  );
};

export default Page;
