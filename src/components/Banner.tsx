import type { GetArticle, User } from '../types';
import React from 'react';
import { printAuthorLink, printDateString, printIconImage } from '../utility';

export type Props = {
  title: string;
  description: string;
  article?: GetArticle;
  user?: User;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
};

export default function ({ title, description, article, user, onDelete }: Props) {
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
                <button className="btn btn-outline-danger btn-sm" onClick={onDelete}>
                  <i className="ion-trash-a"></i> Delete Article
                </button>
                &nbsp;
              </span>
            ) : (
              <span>
                <button className="btn btn-sm action-btn btn-outline-secondary">
                  <i className="ion-plus-round"></i>
                  &nbsp; Follow {article.author.username}
                </button>
                &nbsp;
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart"></i> <span>Favorite Article </span>
                  <span className="counter">({article.favoritesCount})</span>
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
