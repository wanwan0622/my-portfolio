import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Feature = () => {
  return (
    <div>
      <BrowserRouter>
        <h2>feature</h2>
        <p>お気に入りの作品です</p>
        <img src="./logo192.png"></img>
        <p>
          Pythanon：
          <br />
          <Link to='https://github.com/wanwan0622/Hanon'>GitHub</Link>
          <br />
          <Link to='https://qiita.com/bamboo_music_ac/items/75e606e112fc5dae78a5'>Qiita</Link>
          <br />
          <Link to='https://www.youtube.com/watch?v=m0_c4glVVpY'>YouTubeデモ</Link>
        </p>

        <p>
          担当：<br />
          Idea / Coding
          <br />
          制作期間：<br />
          3日間
        </p>
        <p>
          コメント：<br/>
          ピアノを習っていたことがある人にはおなじみのハノン。ハノンピアノ教本とは、ハノンが作曲した、ピアノの技術を向上させるために重要な基本的な練習曲集のことです。一見単純でつまらないと思われがちなハノンピアノ教本ですが、収録されたそれぞれの練習曲の共通点を探してみると面白いです。ピアノ演奏者は私を含め、この制作物のおかげで練習曲が増えてわくわくするはずです。ハノンらしさを追求するために、同じ音が連続しないようにするなどの工夫をしました。music21ライブラリを使用するのは初めてだったので、4分の2拍子になるように楽譜を書くのが難しかったです。music21はあまり有名ではなく、記事も少ないので、これからさらにmusic21について学習していき、アウトプットを増やし、様々な人に使ってもらいたいと思っています。一方、乱数を生成する部分や配列から音を取り出す部分では、競技プログラミングで学んだことが生かされ、ほとんどバグなく実装することができました。今はまだ実装できていませんが、これから難易度を選べるようにしたり、機械学習を用いてさらにハノンらしさを追求したりと、可能性がたくさんあってワクワクしています。また、他の作曲家でもその作曲家らしさのある楽譜を自動生成してみたいと思っています。
        </p>
      </BrowserRouter>
    </div>
  );
};

export default Feature;