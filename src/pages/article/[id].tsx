import type { NextPage } from 'next';
import type { PageProps } from '../../types';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';

const Aritcle: NextPage<PageProps> = ({ user }: PageProps) => {
  const router = useRouter();

  return (
    <>
      <Layout user={user}>
        <div className="article-page">
          <Banner title={`${router.query.id}`} description='A place to share your knowledge.'></Banner>
        </div>
      </Layout>
    </>
  );
};

export default Aritcle;
