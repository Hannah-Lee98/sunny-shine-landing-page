import React from 'react';
import { Section1Wrapper } from './style';

const Section1 = () => {
  return (
    <Section1Wrapper>
      <img
        src={'/images/desktop/image-header.jpg'}
        alt={'banner'}
        className={'banner-img'}
      />
      <div className={'content-section'}>
        <h1 className={'content-section__title'}>We are creatives</h1>
        <div className={'arrow-icon'}>
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="#FFF"
              strokeWidth="6"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </div>
    </Section1Wrapper>
  );
};

export default Section1;
