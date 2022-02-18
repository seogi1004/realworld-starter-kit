import type { NextPage } from 'next';
import type { PageProps, GetArticleWrapper, PutArticleWrapper, PutArticle } from '../../types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Layout from '../../components/Layout';
import Editor from '../../components/Editor';

const Aritcle: NextPage<PageProps> = ({ user }: PageProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [tagList, setTagList] = useState<Array<string>>([]);
  const [article, setArticle] = useState<PutArticle>({
    title: '',
    description: '',
    body: '',
  });

  // TODO: 이건 클라이언트 사이드에서이 조회, getServerSideProps로 변경하기
  useEffect(() => {
    fetch(`/api/articles?slug=${router.query.id}`, {
      method: 'GET',
    }).then(async (res) => {
      const data: GetArticleWrapper = await res.json();

      setArticle({
        title: data.article.title,
        description: data.article.description,
        body: data.article.body,
      });

      setTagList(data.article.tagList);
    });
  }, []);

  const setTitle = (title: string) => {
    setArticle({
      ...article,
      title,
    });
  };
  const setDescription = (description: string) => {
    setArticle({
      ...article,
      description,
    });
  };
  const setBody = (body: string) => {
    setArticle({
      ...article,
      body,
    });
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload: PutArticleWrapper = {
      article,
    };

    const res = await fetch(`/api/articles?slug=${router.query.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data: GetArticleWrapper = await res.json();
      Router.push({ pathname: `/article/${data.article.slug}` });
    }

    setLoading(false);
  };

  const onAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {};
  const onDeleteTag = (e: React.MouseEvent<HTMLElement>, t: string) => {};

  return (
    <>
      <Layout user={user}>
        <div className="editor-page">
          <div className="container page">
            {article ? (
              <Editor
                loading={loading}
                title={article.title}
                description={article.description}
                body={article.body}
                tagList={tagList}
                setTitle={setTitle}
                setDescription={setDescription}
                setBody={setBody}
                onAddTag={onAddTag}
                onDeleteTag={onDeleteTag}
                onSubmit={onSubmit}
              ></Editor>
            ) : (
              ''
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Aritcle;
