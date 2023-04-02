import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div>
      <BrowserRouter>
        <h2>skills</h2>
        <p>勉強中です</p>
        <ul>
          <li>
            <h3>Python</h3>
            <p>★★★☆☆</p>
            <p>
              競プロでPythonを勉強し始めました。初めて触った言語です。<br/>
              <Link to='https://atcoder.jp/users/wanwan0622'>AtCoderのレート最高値は713</Link>です。<br/>
              PaizaSランクです。
            </p>
          </li>
          <li>
            <h3>JavaScript</h3>
            <p>★☆☆☆☆</p>
            <p>
              なんかこのサイトを作ったりChrome拡張を作るのに使ってます。
            </p>
          </li>
          <li>
            <h3>fluter & piccolo</h3>
            <p>★★★★★</p>
            <p>
              小学6年生からずっとフルートを続けています。<br/>
              中学・高校・大学では吹奏楽部でピッコロも吹いていました。
            </p>
          </li>
          <li>
            <h3>piano</h3>
            <p>★★★★★</p>
            <p>
              幼稚園の頃から続けています。<br/>
              手が小さいのでレパートリーは少ないです。<br/>
              メインはクラシックですが、いろいろ弾きます。<br/>
              ヤマハピアノグレード6級です。
            </p>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Skills;