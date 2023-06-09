import React from "react";
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div>
      <h2 className="heading-primary">about</h2>
      <p>竹澤彩里です！</p>
      <div className={styles.column}>
        <img src="./icon.png" className={styles.icon}></img>
        <div>
          <p>
            2023年4月からエンジニアとして働いています。
            <br />
            2019年6月ごろからプログラミングを始めました。Pythonで競技プログラミングを中心に、2022年ごろからは各種ハッカソンに参加していました。
            <br />
            大学では、音響学を専攻してました。
          </p>
          <p>この辺に職歴とか人生の歴史書く</p>
        </div>
      </div>
    </div>
  );
};

export default About;
