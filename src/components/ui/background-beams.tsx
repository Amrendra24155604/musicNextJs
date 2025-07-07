// "use client";
// import { cn } from "@/utils/cn";
// import { motion } from "motion/react";
// import React from "react";
 
// export const Meteors = ({
//   number,
//   className,
// }: {
//   number?: number;
//   className?: string;
// }) => {
//   const meteors = new Array(number || 20).fill(true);
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {meteors.map((el, idx) => {
//         const meteorCount = number || 20;
//         // Calculate position to evenly distribute meteors across container width
//         const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered
 
//         return (
//           <span
//             key={"meteor" + idx}
//             className={cn(
//               "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
//               "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
//               className,
//             )}
//             style={{
//               top: "-40px", // Start above the container
//               left: position + "px",
//               animationDelay: Math.random() * 5 + "s", // Random delay between 0-5s
//               animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s", // Keep some randomness in duration
//             }}
//           ></span>
//         );
//       })}
//     </motion.div>
//   );
// };


'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';

export const Meteors = ({ number = 20, className }: { number?: number; className?: string }) => {
  const [styles, setStyles] = useState<{ left: string; delay: string; duration: string }[]>([]);

  // useEffect(() => {
  //   const meteorStyles = new Array(number).fill(true).map((_, idx) => {
  //     const position = idx * (800 / number) - 400;
  //     return {
  //       left: `${position}px`,
  //       delay: `${Math.random() * 5}s`,
  //       duration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
  //     };
  //   });
  //   setStyles(meteorStyles);
  // }, [number]);
useEffect(() => {
  const screenWidth = window.innerWidth;
  const styles = new Array(number).fill(true).map((_, idx) => {
    const left = (idx / (number - 1)) * screenWidth;
    return {
      left: `${left}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
    };
  });
  setStyles(styles);
}, [number]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {styles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: "-40px",
            left: style.left,
            animationDelay: style.delay,
            animationDuration: style.duration,
          }}
        />
      ))}
    </motion.div>
  );
};