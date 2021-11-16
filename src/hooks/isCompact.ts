import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '../variables/breakpoints';

const useIsCompact = (): boolean => {
  const [isCompact, setIsCompact] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsCompact(screen.width < BREAKPOINTS.md);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, [screen.width]);
  return isCompact;
};

export default useIsCompact;
