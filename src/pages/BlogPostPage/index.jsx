import React from "react";
// 💡 Hook do React Router para obter o parâmetro da URL
import { useParams } from "react-router-dom";
import { blogPostsData } from "../../data/blogPostsData";
// 💡 Importe seus estilos aqui

// Exemplo simples, você pode estilizar melhor usando styled-components
const BlogPostPage = () => {
  // 1. Pega o valor do parâmetro 'slug' da URL
  const { slug } = useParams();

  // 2. Encontra o post correspondente no array de dados
  const post = blogPostsData.find((p) => p.slug === slug);

  // Se o post não for encontrado (URL digitada errada)
  if (!post) {
    return <h1>404 | Post não encontrado!</h1>;
  }

  // 3. Exibe o conteúdo completo do post
  return (
    <div
      style={{
        padding: "6rem 8%",
        minHeight: "80vh",
        background: "linear-gradient(to bottom, #e8f5c8 0%, #ffffff 100%)",
      }}
    >
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h1 style={{ color: "#4e75ff", marginTop: "2rem" }}>{post.title}</h1>

      <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>{post.text}</p>

      {/* Aqui você pode adicionar o texto completo se o seu campo 'text' for truncado na lista */}

      {/* Botão de Voltar para a lista do Blog */}
      <Link
        to="/blog"
        style={{ marginTop: "2rem", display: "inline-block", color: "#0c0421" }}
      >
        &larr; Voltar para o Blog
      </Link>
    </div>
  );
};

export default BlogPostPage;
