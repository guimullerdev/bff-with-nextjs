"use client";

import React, { useEffect, useState } from "react";

import { Post } from "../types/post";

export default function Client() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const postsResp = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await postsResp.json();

      const postsWithAuthor = await Promise.all(
        postsData.slice(0, 8).map(async (post: Post) => {
          const userResp = await fetch(
            `https://jsonplaceholder.typicode.com/users/${post.userId}`
          );
          const userData = await userResp.json();
          return {
            ...post,
            author: userData.name,
          };
        })
      );
      setPosts(postsWithAuthor);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-gray-500">Carregando posts...</span>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
        Exemplo sem BFF: Dados direto do Client
        <br />
        <span className="text-base font-normal text-gray-500">
          (SSR - App Router | UI Tailwind)
        </span>
      </h1>
      <div className="p-2 bg-blue-100 border-l-4 border-blue-600 text-blue-900 mb-4 text-sm rounded">
        Este demo faz <b>fetch dos dados direto no client</b>: múltiplas
        requisições no browser ☁️
      </div>
      <ul className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
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
