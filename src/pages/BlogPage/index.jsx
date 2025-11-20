import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { blogPostsData } from "../../data/blogPostsData";
import Button from "../../components/Button";

import {
  PageWrapper,
  Banner,
  PostsContainer,
  PostCard,
  BlogTitle,
  PostImage,
  PostTitle,
  PostContent,
  PostText,
} from "./styles";

const BlogPage = () => {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Banner>
          <BlogTitle>Blog do Calmaria Spa: Seu Guia de Bem-Estar</BlogTitle>
        </Banner>
        <PostsContainer>
          {blogPostsData.map((post) => (
            <PostCard key={post.id}>
              <PostImage src={post.image} alt={post.title} />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>

                <PostText>{post.text.substring(0, 150)}...</PostText>

                <Button to={`/blog/${post.slug}`} $readMoreStyle>
                  Ler Mais
                </Button>
              </PostContent>
            </PostCard>
          ))}
        </PostsContainer>
      </PageWrapper>
    </>
  );
};

export default BlogPage;
