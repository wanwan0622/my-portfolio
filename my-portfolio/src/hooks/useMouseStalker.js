import { useSpring } from 'react-spring';
import { useMouseMove } from './mouseEvent';

const useMouseStalker = function(initMouse, mouseConfig) {
  const [springStyles, setSpringStyles] = useSpring(() => ({
    to: initMouse,
    config: mouseConfig,
  }));

  useMouseMove(initMouse, setSpringStyles);

  return springStyles;
};

export default useMouseStalker;
