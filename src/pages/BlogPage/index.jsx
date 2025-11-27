import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { posts } from "../../data/blogPostsData";
import Button from "../../components/Button";

import {
  Banner,
  PageWrapper,
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
      <Banner>
        <BlogTitle>Blog do Calmaria: Seu Guia de Bem-Estar</BlogTitle>
      </Banner>
      <NavBar />

      <PageWrapper>
        <PostsContainer>
          {posts.map((post) => (
            <PostCard key={post.id}>
              <PostImage src={post.coverImage} alt={post.title} />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostText>{post.preview}</PostText>
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
