import React from "react";

import { BlogPostWrapper, PostCover, BackLink, PostContent } from "./styles";

const StandardLayout = ({ post }) => {
  const { title, coverImage, content } = post;

  return (
    <BlogPostWrapper>
      <PostCover src={coverImage} alt={title} />
      <PostContent>{content}</PostContent>
      <BackLink to="/blog">Voltar para o Blog</BackLink>
    </BlogPostWrapper>
  );
};

export default StandardLayout;
