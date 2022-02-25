import type { GetArticle } from './types';
import { DOMAIN } from './constants';

export function printDateString(article: GetArticle): string {
  return new Date(article.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function printIconImage(article: GetArticle): string {
  return article.author.image.split('realworld-temp-api').join(DOMAIN);
}

export function printAuthorLink(article: GetArticle): string {
  return `/@${encodeURIComponent(article.author.username)}`;
}
