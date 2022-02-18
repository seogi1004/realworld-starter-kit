import type { GetArticle, User } from '../types';
import React from 'react';
import { DOMAIN } from '../constants';

export type Props = {
  title: string;
  description: string;
  article?: GetArticle;
  user?: User;
};

export function printDateString(article: GetArticle): string {
  return new Date(article.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function printIconImage(article: GetArticle): string {
  return article.author.image.split('realworld-temp-api').join(DOMAIN);
}

export function printAuthorLink(article: GetArticle): string {
  return `/@${encodeURIComponent(article.author.username)}`;
}

export default function ({ title, description, article, user }: Props) {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{article ? article.title : title}</h1>
        <p>{description}</p>

        {article ? (
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
            {article.author.username === user?.username ? (
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
            ) : (
              <span>
                <button className="btn btn-sm action-btn btn-outline-secondary">
                  <i className="ion-plus-round"></i>
                  &nbsp; Follow 토끼왕쟈
                </button>
                &nbsp;
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart"></i> <span>Favorite Article </span>
                  <span className="counter">(0)</span>
                </button>
                &nbsp;
              </span>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
