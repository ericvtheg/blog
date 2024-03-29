import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { formatDate } from "./utils";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts
        .sort((postA, postB) => Date.parse(postB.date) - Date.parse(postA.date))
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.date && <div>{formatDate(post.date)}</div>}
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
    </div>
  );
}
