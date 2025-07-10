"use client";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();

      return {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null; // SSR fallback

  return (
    <div className="text-yellow-400 text-4xl font-bold tracking-widest mt-6">
      {`${timeLeft.days.toString().padStart(2, "0")}:-${timeLeft.hours
        .toString()
        .padStart(2, "0")}:-${timeLeft.minutes
        .toString()
        .padStart(2, "0")}:-${timeLeft.seconds.toString().padStart(2, "0")}`}
    </div>
  );
};

export default CountDown;
