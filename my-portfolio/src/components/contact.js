import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import LinkItem from './LinkItem';

const contact_lists = [
  {href: 'https://twitter.com/bamboooo_music', image: './contact/twitter.png', text: 'twitter'},
  {href: 'https://github.com/wanwan0622', image: './contact/github.png', text: 'github'},
  {href: 'https://qiita.com/bamboo_music_ac', image: './contact/qiita.png', text: 'Qiita'},
  {href: 'https://bamboo-music.hatenablog.com/', image: './contact/hatenablog.png', text: 'はてなブログ'},
  {href: 'https://www.youtube.com/channel/UCJInq63t9v5ZTxqMZcFsIBQ', image: './contact/youtube.png', text: 'YouTube'}
]

const Contact = () => {
  return (
    <div>
      <BrowserRouter>
        <h2 className='heading-primary'>Contact</h2>
        <p>みんな見てね</p>
        <ul>
          {contact_lists.map((contact) => (
            <li>
              <LinkItem href={contact.href} is_newpage={true}>
                <img src={contact.image} width='50px'></img>
                {contact.text}
              </LinkItem>
            </li>
          ))}
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Contact;