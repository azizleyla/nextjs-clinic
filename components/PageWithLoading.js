"use client";
import Loading from "@/app/loading";
import React, { useState, useEffect } from "react";

const PageWithLoading = ({ children, delay = 1000 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) return <Loading />;

  return <>{children}</>;
};

export default PageWithLoading;
