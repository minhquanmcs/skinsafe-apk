import { useRef } from 'react';

export const useRefs = <T>(initial: any) => {
  const ref = useRef<T>(initial);
  return ref;
};
