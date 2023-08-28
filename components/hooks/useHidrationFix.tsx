"use client";
import { useEffect, useState } from "react";
const useHidrationFix = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return [isMounted];
};

export default useHidrationFix;
