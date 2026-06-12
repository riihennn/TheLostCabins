"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  roomsContent: React.ReactNode;
  activitiesContent: React.ReactNode;
  instagramContent: React.ReactNode;
}

export default function AnimatedBackgroundWrapper({
  roomsContent,
  activitiesContent,
  instagramContent
}: Props) {
  const activitiesRef = useRef(null);
  const isActivitiesInView = useInView(activitiesRef, { amount: 0.2 });

  return (
    <motion.div 
      initial={{ backgroundColor: "#fcf9f2" }}
      animate={{ backgroundColor: isActivitiesInView ? "#fdfa99" : "#fcf9f2" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full relative z-10"
    >
      <>
        {roomsContent}
        <div ref={activitiesRef}>
          {activitiesContent}
        </div>
        {instagramContent}
      </>
    </motion.div>
  );
}
