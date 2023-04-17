import { useEffect } from 'react';

const useMouseMove = (initMouse, setSpringStyles) => {
  useEffect(() => {
    const listener = (e) => {
      setSpringStyles.start({
        opacity: 100,
        // initMouse.* / 2 は真ん中合わせ
        top: e.y - initMouse.height / 2,
        left: e.x - initMouse.width / 2,
      });
    };

    window.addEventListener('mousemove', listener);

    // EventListenerを追加したら、クリーンアップ関数で忘れずにremoveする(戒め
    return () => {
      window.removeEventListener('mousemove', listener);
    };
  }, [setSpringStyles, initMouse]);
};

export { useMouseMove };
