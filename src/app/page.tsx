import { Post } from "./types/post";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
  const data = await res.json();

  const posts: Post[] = data.posts;

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
        Exemplo BFF com <span className="text-fuchsia-600">Next.js 15</span> +{" "}
        <span className="text-sky-700">TypeScript</span>
        <br />
        <span className="text-base font-normal text-gray-500">
          (SSR - App Router | UI Tailwind)
        </span>
      </h1>
      <div className="p-2 bg-green-100 border-l-4 border-green-600 text-green-900 mb-4 text-sm rounded">
        Este demo utiliza <b>BFF/SSR</b>: todos os dados já chegaram prontos do
        servidor ✔️
      </div>
      <ul className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.slice(0, 8).map((post) => (
          <li
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between"
          >
            <span className="block text-xs text-gray-400 mb-1">
              Post #{post.id}
            </span>
            <p className="text-lg font-medium mb-2 text-gray-900">
              {post.title}
            </p>
            <p className="text-gray-700 text-sm mb-2">{post.body}</p>
            <span className="text-xs text-gray-500">
              Autor: <span className="font-semibold">{post.author}</span>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
