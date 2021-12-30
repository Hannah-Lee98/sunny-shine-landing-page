import Head from 'next/head';
import { FC } from 'react';

interface IHeadPage {
  title: string;
  metaContent?: string;
  iconHref?: string;
}

const HeadPage: FC<IHeadPage> = props => {
  const { title, metaContent, iconHref = '/favicon.png' } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaContent} />
      <link rel="icon" href={iconHref} />
    </Head>
  );
};

export default HeadPage;
