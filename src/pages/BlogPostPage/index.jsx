import { useParams } from "react-router-dom";
import { posts } from "../../data/blogPostsData.jsx";
import NavBar from "../../components/NavBar";

import PostView from "./PostView.jsx";
import BannerBlog from "../../components/BannerBlog";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <h1>Post não encontrado</h1>;

  const PostLayoutComponent = PostView;

  return (
    <>
      <BannerBlog />
      <NavBar />
      <PostLayoutComponent post={post} />
    </>
  );
};

export default BlogPostPage;
