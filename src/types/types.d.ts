type User = {
  avatar_url: string;
  bio: string;
  name: string;
  login: string;
  company: string;
  followers: number;
};

type IssueByParams = {
  title: string;
  number?: number;
  created_at: string;
  body: string;
};

type Issue = {
  html_url: string | undefined;
  title: string | undefined;
  user: User | undefined;
  created_at: string | undefined;
  comments: number | undefined;
  body?: string;
};
