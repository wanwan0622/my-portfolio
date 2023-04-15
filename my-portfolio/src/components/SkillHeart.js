import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillHeart = ({fill_num}) => {
  let filename_lists = [];
  for (let i = 0; i < fill_num; i++) {
    filename_lists.push("heart_fill.png");
  }
  for (let i = 0; i < 5 - fill_num; i++) {
    filename_lists.push("heart.png");
  }

  return (
    <div className={'mt-15'}>
      {
        filename_lists.map((filename) => (
          <img src={'./skills/'+filename} key={filename.index} width='15px'></img>
        ))
      }
    </div>
  );
};

export default SkillHeart;