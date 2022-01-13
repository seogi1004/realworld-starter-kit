export type User = {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
};

export interface PageProps {
  user: User;
}
