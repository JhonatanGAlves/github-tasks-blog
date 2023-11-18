import axios from "axios";

const baseUrl = "https://api.github.com/users/";

export async function getGithubUser(username: string): Promise<User | null> {
  const response = await axios.get(baseUrl + username);

  if (response.status !== 200) {
    console.log("Error getting user from GitHub.");

    return null;
  }

  const data = await response.data;
  const { avatar_url, bio, name, login, company, followers }: User = data;

  return { avatar_url, bio, name, login, company, followers };
}
