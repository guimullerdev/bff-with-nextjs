export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
};

export type PostBFF = {
  id: string;
  title: string;
  summary: string;
  author: string;
};
