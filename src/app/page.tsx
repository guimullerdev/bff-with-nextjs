import { Post } from "./types/post";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
  const data = await res.json();

  const posts: Post[] = data.posts;

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-blue-50 via-white to-purple-50 py-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-purple-950 drop-shadow-lg">
        Exemplo BFF com <span className="text-fuchsia-600">Next.js 15</span> +{" "}
        <span className="text-sky-700">Typescript</span> <br />
        <span className="text-base font-thin tracking-wide">
          (SSR - App Router | UI Tailwind 🍃)
        </span>
      </h1>
      <ul className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 8).map((post) => (
          <li
            key={post.id}
            className="bg-white/90 border border-fuchsia-100 rounded-2xl shadow-lg p-6 group transition-all hover:scale-[1.03] hover:shadow-2xl hover:border-fuchsia-300"
          >
            <span className="block text-sm text-gray-400 mb-2">
              Post #{post.id}
            </span>
            <p className="text-xl font-semibold mb-3 group-hover:text-fuchsia-700 transition-colors">
              {post.title}
            </p>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
