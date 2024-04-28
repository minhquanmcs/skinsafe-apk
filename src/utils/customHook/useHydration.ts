import { useAppStore } from '@store';
import { useEffect, useState } from 'react';

export const useHydration: () => boolean = () => {
  const [hydrated, setHydrated] = useState(useAppStore?.persist?.hasHydrated);

  useEffect(() => {
    const unsubHydrate = useAppStore.persist.onHydrate(() => setHydrated(false)); // Note: this is just in case you want to take into account manual rehydrations. You can remove this if you don't need it/don't want it.
    const unsubFinishHydration = useAppStore.persist.onFinishHydration(() => setHydrated(true));

    setHydrated(useAppStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  const isLoading = !hydrated;

  return isLoading;
};
