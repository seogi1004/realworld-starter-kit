import type { NextPage } from 'next';
import type { PageProps, GetArticleWrapper } from '../../types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';

const Aritcle: NextPage<PageProps> = ({ user }: PageProps) => {
  const router = useRouter();

  // TODO: 이건 클라이언트 사이드에서이 조회, getServerSideProps로 변경하기
  useEffect(() => {
    fetch(`/api/articles?slug=${router.query.id}`, {
      method: 'GET',
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
    });
  }, []);

  return (
    <>
      <Layout user={user}>
        <div className="article-page">
          <Banner title={`${router.query.id}`} description="A place to share your knowledge."></Banner>
        </div>
      </Layout>
    </>
  );
};

export default Aritcle;
