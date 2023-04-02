import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <BrowserRouter>
        <h2 className='heading-primary'>Contact</h2>
        <p>みんな見てね</p>
        <ul>
          <li>
            <Link to='https://twitter.com/bamboooo_music'>Twitter</Link>
          </li>
          <li>
            <Link to='https://qiita.com/bamboo_music_ac'>Qiita</Link>
          </li>
          <li>
            <Link to='https://github.com/wanwan0622'>GitHub</Link>
          </li>
          <li>
            <Link to='https://www.youtube.com/channel/UCJInq63t9v5ZTxqMZcFsIBQ'>YouTube</Link>
          </li>
          <li>
            <Link to='https://bamboo-music.hatenablog.com/'>はてなブログ</Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Contact;