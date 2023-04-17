import { animated } from 'react-spring';
import useMouseStalker from '../hooks/useMouseStalker';

const initMouse = {
  width: 16,
  height: 16,
  borderRadius: 8,
  opacity: 0,
  top: 0,
  left: 0,
};

const springConfig = {
  // 変化の速さ. 大きくすると遅くなる.
  frequency: 0.2,
  // どのタイミングで減速するか. 大きくすると減速の開始が速くなる.
  damping: 2,
};

const springConfig_1 = {
  // 変化の速さ. 大きくすると遅くなる.
  frequency: 0.7,
  // どのタイミングで減速するか. 大きくすると減速の開始が速くなる.
  damping: 0.8,
};

const springConfig_2 = {
  // 変化の速さ. 大きくすると遅くなる.
  frequency: 0.9,
  // どのタイミングで減速するか. 大きくすると減速の開始が速くなる.
  damping: 0.6,
};

const mouseStyles = {
  pointerEvents: 'none',
  position: 'fixed',
  zIndex: 100,
  opacity: 0,
};

const MouseStalker = () => {
  const springStyles = useMouseStalker(initMouse, springConfig);
  const springStyles_1 = useMouseStalker(initMouse, springConfig_1);
  const springStyles_2 = useMouseStalker(initMouse, springConfig_2);

  return (
    <div>
      <animated.div
        style={{
          ...mouseStyles,
          ...springStyles,
        }}
      >
        <img src="./kirakira.png" width="18px"></img>
      </animated.div>
      <animated.div
        style={{
          ...mouseStyles,
          ...springStyles_1,
        }}
      >
        <img src="./kirakira.png" width="13px"></img>
      </animated.div>
      <animated.div
        style={{
          ...mouseStyles,
          ...springStyles_2,
        }}
      >
        <img src="./kirakira.png" width="10px"></img>
      </animated.div>
    </div>
  );
};

export default MouseStalker;