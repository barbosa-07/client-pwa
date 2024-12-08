import Link from "next/link";
import React from "react";

export default function Analysis() {
  return (
    <div>
      <h1>Comming soon</h1>
      <Link
        href="/"
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}
