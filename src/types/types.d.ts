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
