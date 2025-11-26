import ImageSlider from "../components/ImageSlider";
export const posts = [
  {
    id: 1,
    slug: "skincare-geracao-z",
    title: "Os Segredos de Skincare da Geração Z",
    coverImage: "/imgs/skincare-cover.jpg",
    preview: "Descubra como a geração Z está redefinindo o skincare...",

    content: (
      <>
        <h1>
          Os Segredos de Skincare da Geração Z: Mais que Tendência, um Estilo de
          Vida!
        </h1>

        <p>
          🧖‍♀️ Os Segredos de Skincare da Geração Z: Mais que Tendência, um Estilo
          de Vida! A Geração Z, ou Gen Z, não está apenas seguindo tendências de
          skincare; eles estão revolucionando a forma como encaramos os cuidados
          com a pele. Para essa geração, o skincare é um ato de autocuidado,
          bem-estar mental e um terreno fértil para a experimentação e o
          compartilhamento nas redes sociais.
        </p>

        <p>
          Mas quais são os hábitos e a filosofia que definem o regime de beleza
          da Gen Z? Descubra a seguir!
        </p>

        <h2>💚 A Filosofia Gen Z: Ingredientes Sim, Rótulos Complexos Não</h2>

        <p>
          O skincare da Gen Z é marcado pela informação e pela busca por
          transparência. Eles não se contentam com promessas vazias e procuram
          entender a fundo o que estão aplicando na pele.
        </p>

        <p>
          <strong>Ingredientes no Centro do Palco:</strong> Há um foco intenso
          em ingredientes ativos comprovados, como ácido hialurônico para
          hidratação, niacinamida para equilibrar a pele e retinol (ou
          substitutos mais suaves) para melhorar a textura.
        </p>

        <p>
          <strong>"Skinimalismo" e Rotinas Multifuncionais:</strong> Mesmo
          gostando de testar novos produtos, a rotina diária tende a ser mais
          enxuta, priorizando itens que fazem múltiplas funções. O objetivo é a
          saúde da pele, não a quantidade de passos.
        </p>

        <p>
          <strong>Prevenção é o Novo Tratamento:</strong> Diferente de gerações
          anteriores, a Gen Z aposta na prevenção desde cedo — e o protetor
          solar é o protagonista absoluto.
        </p>

        <ImageSlider
          images={[
            { id: 1, src: "/imgs/slider1.jpg" },
            { id: 2, src: "/imgs/slider2.jpg" },
            { id: 3, src: "/imgs/slider3.jpg" },
          ]}
        />

        <h2>📱 Os 5 Hábitos Essenciais da Rotina Gen Z</h2>

        <p>
          <strong>1. Dupla Limpeza (Double Cleansing):</strong> Inspirados pela
          rotina coreana, usam óleo/bálsamo + limpador aquoso para remover bem
          maquiagem, FPS e poluição.
        </p>

        <p>
          <strong>2. Domínio dos Ativos (Targeted Treatments):</strong> Usam
          séruns específicos para acne, textura ou hidratação; preferem
          esfoliantes químicos (AHA/BHA).
        </p>

        <p>
          <strong>3. Hydration Station:</strong> A hidratação é prioridade
          máxima — ácido hialurônico, mists e máscaras noturnas fortalecem a
          barreira cutânea.
        </p>

        <p>
          <strong>4. Foco na Barreira Cutânea:</strong> Ceramidas e ingredientes
          calmantes são essenciais para evitar irritações e recuperar a pele.
        </p>

        <p>
          <strong>5. FPS Diário e Constante:</strong> O protetor solar é
          indispensável. Seja em gel, creme ou stick, ele é reaplicado
          religiosamente.
        </p>

        <h2>🌍 Skincare Consciente: Além do Rosto</h2>

        <p>A Gen Z também expressa seus valores através das escolhas:</p>

        <ul>
          <li>
            <strong>Sustentabilidade e Ética:</strong> Preferem marcas
            cruelty-free e embalagens recicláveis.
          </li>
          <li>
            <strong>Bodycare é o Novo Skincare:</strong> Usam ativos também no
            corpo e no couro cabeludo.
          </li>
          <li>
            <strong>Inclusão e Diversidade:</strong> Procuram marcas com tons e
            produtos para todos.
          </li>
        </ul>

        <blockquote>
          “Para a Gen Z, o skincare é um diálogo: ouvir a pele, compartilhar
          aprendizados e construir uma rotina que reflita seus valores.”
        </blockquote>

        <p>💡 E você? Qual ingrediente ativo descobriu graças à Gen Z?</p>
      </>
    ),
  },
];
