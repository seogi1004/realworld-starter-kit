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

export interface GetArticle {}
