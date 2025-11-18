import { useParams, Link } from "react-router-dom";
import { blogPostsData } from "../../data/blogPostsData";
import {
  ErrorMessage,
  BlogPostWrapper,
  PostImage,
  PostTitle,
  PostText,
  BackLink,
} from "./styles";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) {
    return <ErrorMessage />;
  }

  return (
    <BlogPostWrapper>
      <PostImage src={post.image} alt={post.title} />
      <PostTitle>{post.title}</PostTitle>
      <PostText>{post.textPost}</PostText>

      <Link to="/blog">
        <BackLink> Voltar ao Blog</BackLink>
      </Link>
    </BlogPostWrapper>
  );
};

export default BlogPostPage;
