import Link from "next/link";
import { fetchCocPosts } from "~/data/apis/coc/fetchCocPosts";
import { fetchBlogPosts } from "~/data/apis/fetchBlogPosts";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetchCocPosts();

  return {
    props: {
      blog: data.contents,
    },
  };
};
