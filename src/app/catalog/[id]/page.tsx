"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useCampersStore } from "@/store/useCampersStore";
import css from "./page.module.css";
// import Detalis from "@/components/Detalis/Detalis";

const Page = () => {
  const { id } = useParams();
  const { currentCamper, getCamperById, isLoading } = useCampersStore();

  useEffect(() => {
    if (id) {
      getCamperById(id as string);
    }
  }, [id, getCamperById]);

  if (isLoading) return <div className={css.loader}>Loading camper details...</div>;
  if (!currentCamper) return <div className={css.error}>Camper not found</div>;

  return (
    <section className={css.detailsSection}>
      <div className="container">
        {/* <Detalis /> */}
      </div>
    </section>
  );
};

export default Page;
