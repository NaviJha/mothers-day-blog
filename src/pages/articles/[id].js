import { useRouter } from "next/router";
import articles from "@/data/articles";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="p-8 text-center text-red-500">
        <h2>Article not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        {article.readTime} · {article.category}
      </p>
      <p className="text-lg text-gray-800 whitespace-pre-line">
        {article.content}
      </p>
      <button
        className="mt-6 text-pink-600 hover:underline"
        onClick={() => router.back()}
      >
        ← Go Back
      </button>
    </div>
  );
}
