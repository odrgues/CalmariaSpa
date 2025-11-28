import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { posts } from "../../data/blogPostsData";
import Button from "../../components/Button";
import BannerBlog from "../../components/BannerBlog";

import {
  PageWrapper,
  PostsContainer,
  PostCard,
  PostImage,
  PostTitle,
  PostContent,
  PostText,
} from "./styles";

const BlogPage = () => {
  return (
    <>
      <BannerBlog />
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
