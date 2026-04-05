"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HexLoader from "./HexLoader";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // tuned for premium feel

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <HexLoader /> : null;
}