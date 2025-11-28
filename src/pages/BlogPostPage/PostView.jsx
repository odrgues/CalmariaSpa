import React from "react";
import Button from "../../components/Button";

import { BlogPostWrapper, PostContent } from "./styles";

const StandardLayout = ({ post }) => {
  const { content } = post;

  return (
    <BlogPostWrapper>
      <PostContent>{content}</PostContent>
      <Button to="/blog">Voltar para o Blog</Button>
    </BlogPostWrapper>
  );
};

export default StandardLayout;
