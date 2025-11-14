import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import { blogPostsData, blogSliderImages } from "../../data/blogPostsData";

import {
  PageWrapper,
  PostsContainer,
  PostCard,
  BlogTitle,
  PostImage,
  PostContent,
  PostText,
} from "./styles";

const BlogPage = () => {
  return (
    <PageWrapper>
      <BlogTitle>Blog do Calmaria Spa: Seu Guia de Bem-Estar</BlogTitle>

      <ImageSlider images={blogSliderImages} interval={6000} />

      <PostsContainer>
        {blogPostsData.map((post) => (
          <PostCard key={post.id}>
            <PostImage src={post.image} alt={post.title} />
            <PostContent>
              <h3>{post.title}</h3>

              <PostText>{post.text.substring(0, 150)}...</PostText>

              <Link to={`/blog/${post.slug}`}>
                <button>Ler Mais</button>
              </Link>
            </PostContent>
          </PostCard>
        ))}
      </PostsContainer>
    </PageWrapper>
  );
};

export default BlogPage;
