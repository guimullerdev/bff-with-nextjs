import { Post, PostBFF } from "../types/post";

async function getAuthorName(userId: number): Promise<string> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) return "Unknown";
  const user = await response.json();
  return user.name;
}

export async function fetchPostsBFF(): Promise<PostBFF[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  const posts: Post[] = await response.json();

  const adapted = await Promise.all(
    posts.slice(0, 10).map(async (post) => ({
      id: String(post.id),
      title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
      summary: post.body.split(".")[0],
      author: await getAuthorName(post.userId),
    }))
  );
  return adapted;
}
