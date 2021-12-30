import React, { FC } from 'react';
import {
  Section2Wrapper,
  SectionItemHasContentAndPictureWrapper,
  SectionItemHasContentOnlyWrapper,
} from './style';
import Link from 'next/link';

interface ISectionItemHasContentOnly {
  title: string;
  article: string;
}

const SectionItemHasContentOnly: FC<ISectionItemHasContentOnly> = props => {
  const { title, article } = props;
  return (
    <SectionItemHasContentOnlyWrapper>
      <div className={'section-container'}>
        <h2>{title}</h2>
        <p>{article}</p>
        <Link href={'/'}>Learn more</Link>
      </div>
    </SectionItemHasContentOnlyWrapper>
  );
};
interface ISectionItemHasContentAndPicture {
  imgURL: string;
  alt?: string;
  title?: string;
  article?: string;
}
const SectionItemHasContentAndPicture: FC<
  ISectionItemHasContentAndPicture
> = props => {
  const { title, article, imgURL, alt = '' } = props;
  return (
    <SectionItemHasContentAndPictureWrapper>
      <img src={imgURL} alt={alt} />
      <div className={'section-container'}>
        {title && <h2>{title}</h2>}
        {article && <p>{article}</p>}
      </div>
    </SectionItemHasContentAndPictureWrapper>
  );
};

const Section2 = () => {
  return (
    <Section2Wrapper>
      <div className={'grid-item grid-item-1'}>
        <SectionItemHasContentOnly
          title={'Transform your brand'}
          article={
            'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
          }
        />
      </div>
      <div className={'grid-item grid-item-2'}>
        <SectionItemHasContentAndPicture
          imgURL={'/images/desktop/image-transform.jpg'}
          alt={'transform'}
        />
        {/*<img src={'/images/desktop/image-transform.jpg'}  />*/}
      </div>
      <div className={'grid-item grid-item-3'}>
        <SectionItemHasContentAndPicture
          imgURL={'/images/desktop/image-stand-out.jpg'}
          alt={'image-stand-out'}
        />
      </div>
      <div className={'grid-item grid-item-4'}>
        <SectionItemHasContentOnly
          title={'Stand out to the right audience'}
          article={
            '  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
          }
        />
      </div>
      <div className={'grid-item grid-item-5'}>
        <SectionItemHasContentAndPicture
          imgURL={'/images/desktop/image-graphic-design.jpg'}
          alt={'image-graphic-design'}
          title={'Graphic design'}
          article={
            'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
          }
        />
      </div>
      <div className={'grid-item grid-item-6'}>
        <SectionItemHasContentAndPicture
          imgURL={'/images/desktop/image-photography.jpg'}
          alt={'image-photography'}
          title={'Photography'}
          article={
            'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          }
        />
      </div>
    </Section2Wrapper>
  );
};

export default Section2;
