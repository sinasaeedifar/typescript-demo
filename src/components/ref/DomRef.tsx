import { useEffect, useRef } from "react";

export const Domref = () => {
  const InputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    InputRef.current?.focus();
  }, []);

  return <input type="text" ref={InputRef} />;
};
