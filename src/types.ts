export type User = {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
};

export type LoginResponse = {
  ok: boolean;
  message: string;
};

export interface PageProps {
  user: User;
}

export interface PostArticle {
  title: string;
  description: string;
  body: string;
  tagList: Array<string>;
}

export type PostArticleWrapper = {
  article: PostArticle;
};

export type PutArticle = Omit<PostArticle, 'tagList'>;

export type PutArticleWrapper = {
  article: PutArticle;
};

export interface Author {
  username: string;
  image: string;
  bio: string | null;
}

export interface GetArticle {
  author: Author;
  body: string;
  createdAt: string;
  description: string;
  favorited: false;
  favoritedBy: Array<string>;
  favoritedsCount: number;
  slug: string;
  tagList: Array<string>;
  title: string;
  updatedAt: string;
}

export type GetArticleWrapper = {
  article: GetArticle;
};
