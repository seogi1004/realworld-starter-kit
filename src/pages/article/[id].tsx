import type { NextPage } from 'next';
import type { PageProps, GetArticleWrapper, GetArticle } from '../../types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';

const Aritcle: NextPage<PageProps> = ({ user }: PageProps) => {
  const router = useRouter();
  const [article, setArticle] = useState<GetArticle>();

  // TODO: 이건 클라이언트 사이드에서이 조회, getServerSideProps로 변경하기
  useEffect(() => {
    fetch(`/api/articles?slug=${router.query.id}`, {
      method: 'GET',
    }).then(async (res) => {
      const data: GetArticleWrapper = await res.json();
      console.log(data);
      setArticle(data.article);
    });
  }, []);

  return (
    <>
      <Layout user={user}>
        <div className="article-page">
          <Banner title="" description="" article={article} user={user}></Banner>
        </div>
      </Layout>
    </>
  );
};

export default Aritcle;
