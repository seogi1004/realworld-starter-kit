import type { NextPage } from 'next';
import type { PageProps, GetArticleWrapper, GetArticle } from '../../types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { printAuthorLink, printDateString, printIconImage } from '../../utility';
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
      setArticle(data.article);
    });
  }, []);

  return (
    <>
      <Layout user={user}>
        <div className="article-page">
          <Banner title="" description="" article={article} user={user}></Banner>

          {article ? (
            <div className="container page">
              <div className="row article-content">
                <div className="col-xs-12">
                  <div>
                    <div>
                      <p dangerouslySetInnerHTML={{ __html: article.body.split('\n').join('<br/>') }} />
                    </div>
                  </div>
                  <ul className="tag-list">
                    {article.tagList.map((tag) => (
                      <li className="tag-default tag-pill tag-outline">{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr />
              <div className="article-actions">
                <div className="article-meta">
                  <a href={printAuthorLink(article)}>
                    <img src={printIconImage(article)} />
                  </a>

                  <div className="info">
                    <a className="author" href={printAuthorLink(article)}>
                      {article.author.username}
                    </a>
                    <span className="date">{printDateString(article)}</span>
                  </div>

                  <span>
                    <a className="btn btn-outline-secondary btn-sm" href={`/editor/${article.slug}`}>
                      <i className="ion-edit"></i> Edit Article
                    </a>
                    &nbsp;
                    <button className="btn btn-outline-danger btn-sm">
                      <i className="ion-trash-a"></i> Delete Article
                    </button>
                    &nbsp;
                  </span>
                  <span>
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="ion-plus-round"></i>
                      &nbsp; Follow {article.author.username}
                    </button>
                    &nbsp;
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="ion-heart"></i> <span>Favorite Article </span>
                      <span className="counter">({article.favoritesCount})</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </Layout>
    </>
  );
};

export default Aritcle;
