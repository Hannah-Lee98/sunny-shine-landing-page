import React from 'react';
import { Section4Wrapper } from './style';

const pictures = [
  {
    imgURL: '/images/desktop/image-gallery-cone.jpg',
  },
  {
    imgURL: '/images/desktop/image-gallery-orange.jpg',
  },
  {
    imgURL: '/images/desktop/image-gallery-milkbottles.jpg',
  },
  {
    imgURL: '/images/desktop/image-gallery-sugarcubes.jpg',
  },
];

const Section4 = () => {
  return (
    <Section4Wrapper>
      {pictures.map(i => (
        <div className={'grid-item'} key={i.imgURL}>
          <img src={i.imgURL} alt={''} />
        </div>
      ))}
    </Section4Wrapper>
  );
};

export default Section4;
