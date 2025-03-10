"use client";

import { useState } from "react";
import Image from "next/image";


interface Photo {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  }
export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (url: string) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setImages(data.map((img: Photo) => img.download_url));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <h1 className="text-xl font-bold">Image Fetching with Cache Strategies</h1>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => fetchImages("/api/images/force-cache")}
        >
          Fetch Cached Images
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => fetchImages("/api/images/no-store")}
        >
          Fetch Fresh Images
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={async () => {
            await fetch("/api/images/revalidate", { method: "POST" });
            alert("Cache purged!");
          }}
        >
          Purge Cache
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((img, idx) => (
          <Image key={idx} src={img} alt="Random" className="w-40 h-40 object-cover rounded-lg" height={200} width={200} />
        ))}
      </div>
    </div>
  );
}
