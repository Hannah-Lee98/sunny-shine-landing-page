import React, { FC } from 'react';
import { Section3Wrapper, ClientFeedbackSectionWrapper } from './style';

interface IClientFeedbackSection {
  id: string;
  avatar: string;
  feedback: string;
  name: string;
  jobTitle: string;
}

const ClientFeedbackSection: FC<IClientFeedbackSection> = props => {
  const { avatar, name, feedback, jobTitle } = props;
  return (
    <ClientFeedbackSectionWrapper>
      <div className={'top-section'}>
        <div className={'avatar'}>
          <img src={avatar} alt={''} />
        </div>
      </div>
      <div className={'middle-section'}>
        <p>{feedback}</p>
      </div>
      <div className={'bottom-section'}>
        <span className={'bottom-section__username'}>{name}</span>
        <br />
        <br />
        <span className={'bottom-section__job-title'}>{jobTitle}</span>
      </div>
    </ClientFeedbackSectionWrapper>
  );
};

const clientList: IClientFeedbackSection[] = [
  {
    id: '1',
    name: 'Emily R.',
    feedback:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    jobTitle: 'Marketing Director',
    avatar: '/images/image-emily.jpg',
  },
  {
    id: '2',
    name: 'Thomas S.',
    feedback:
      'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    jobTitle: 'Chief Operating Officer',
    avatar: '/images/image-thomas.jpg',
  },
  {
    id: '3',
    name: 'Jennie F.',
    feedback:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    jobTitle: 'Business Owner',
    avatar: '/images/image-jennie.jpg',
  },
];

const Section3 = () => {
  return (
    <Section3Wrapper>
      <div className={'section-container'}>
        <h3 className={'head-section'}>Client testimonials</h3>
        <div className={'body-section'}>
          {clientList.map(i => (
            <ClientFeedbackSection key={i.id} {...i} />
          ))}
        </div>
      </div>
    </Section3Wrapper>
  );
};

export default Section3;
