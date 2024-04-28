import { useRef, useState, useEffect } from 'react';

export function useStateCallback(initialState: any) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<any>(null);

  const setStateCallback = (val: any, cb: any) => {
    cbRef.current = cb; // store passed callback to ref
    setState(val);
  };

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}
