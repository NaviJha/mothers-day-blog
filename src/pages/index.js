import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredStories = [
    {
      id: 1,
      title: "A Mother’s Strength",
      summary: "Honoring the woman who gave us everything",
      content:
        "She’s our silent protector, tireless provider, and source of endless love — this tribute honors the woman who gave us everything.",
    },
    {
      id: 2,
      title: "Lessons from Mom",
      summary: "Wisdom passed from heart to heart",
      content:
        "From gentle hugs to fierce wisdom — my mom taught me how to love, fight, forgive, and grow with grace.",
    },
    {
      id: 3,
      title: "Mom’s Secret Recipes",
      summary: "Love and flavor in every bite",
      content:
        "Every recipe had a secret ingredient: love. These flavors bring back memories and warmth in every dish.",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-pink-200 p-6 text-center shadow">
        <h1 className="text-3xl font-bold">Mother&rsquo;s Day Tribute Blog</h1>
        <p className="mt-2 text-sm">Celebrating our incredible mothers ❤️</p>
      </header>

      {/* Mother's Day Banner Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image 
          src="/images/mothers-day.png"
          alt="Mother's Day Banner"
          fill
          className="object-contain opacity-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Happy Mother&apos;s Day</h2>
          <p className="mt-4 text-xl">
            Celebrating the love and strength of every mother
          </p>
        </div>
      </section>

      {/* Hero Section - Featured Stories */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredStories.map((story) => (
            <Link key={story.id} href={`/stories/${story.id}`}>
              <div className="bg-white p-4 shadow rounded hover:bg-pink-100 cursor-pointer transition duration-200">
                <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                <p className="text-sm text-gray-600">{story.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-8 px-6">
        <h2 className="text-xl font-bold mb-4">Explore by Category</h2>
        <div className="flex gap-2 mb-6 flex-wrap">
          {["All", "Stories", "Health", "Inspiration"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full transition ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="mt-8 px-6">
        <h2 className="text-xl font-bold mb-4">Recent Articles</h2>
        <input
          type="text"
          placeholder="Search by title or summary..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 border border-pink-300 rounded mb-6"
        />

        {filteredArticles.length === 0 ? (
          <p>No articles found for your search or category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow flex flex-col sm:flex-row overflow-hidden"
              >
                <Image 
                  src={article.thumbnail}
                  alt={article.title}
                  width={160}
                  height={160}
                  className="object-cover"
                />
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-bold mb-1">{article.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{article.summary}</p>
                  <p className="text-xs text-gray-500">
                    {article.readTime} · {article.category}
                  </p>
                  <a
                    href={`/articles/${article.id}`}
                    className="text-pink-600 mt-2 inline-block hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
