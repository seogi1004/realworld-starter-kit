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
}

export interface PageProps {
  user: User;
}
