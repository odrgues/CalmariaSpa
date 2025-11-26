import { useParams } from "react-router-dom";
import { posts } from "../../data/blogPostsData.jsx";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import { BlogPostWrapper, PostCover, BackLink } from "./styles";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <h1>Post não encontrado</h1>;

  return (
    <>
      <Header />
      <NavBar />

      <BlogPostWrapper>
        <h1>{post.title}</h1>

        <PostCover src={post.coverImage} alt={post.title} />

        {post.content}

        <BackLink to="/blog">← Voltar para o Blog</BackLink>
      </BlogPostWrapper>
    </>
  );
};

export default BlogPostPage;
