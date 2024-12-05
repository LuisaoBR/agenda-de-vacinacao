import { useEffect, useState } from "react";

export const useQuery = <T,>(fn: () => Promise<T>): [T | null, boolean] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const request = fn();

    request.then((data) => {
      if (!cancelled) {
        setData(data);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [fn]);

  return [data, loading];
};
