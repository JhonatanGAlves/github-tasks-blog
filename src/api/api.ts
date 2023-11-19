import axios from "axios";

const baseUrl = "https://api.github.com/";

export async function getGithubUser(username: string): Promise<User | null> {
  const response = await axios.get(baseUrl + "users/" + username);

  if (response.status !== 200) {
    console.log("Error getting user from GitHub.");

    return null;
  }

  const { avatar_url, bio, name, login, company, followers }: User =
    response.data;

  return { avatar_url, bio, name, login, company, followers };
}

export async function getIssuesByParams(
  searchTxt: string,
  username: string,
  repo: string
): Promise<IssueByParams[]> {
  const response = await axios.get(
    baseUrl + `search/issues?q=${searchTxt}%20repo:${username}/${repo}`
  );

  if (response.status !== 200) {
    console.log("Error getting issues from GitHub.");

    return [];
  }

  return response.data.items;
}
