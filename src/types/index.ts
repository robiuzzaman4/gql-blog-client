export type Post = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: {
    id: number;
    name: string;
    email: string;
  };
};
