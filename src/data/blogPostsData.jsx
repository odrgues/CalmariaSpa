import ImageSlider from "../components/ImageSlider";

import coverImage1 from "../assets/posts/post-1/cover-image.jpg";
import coverImage2 from "../assets/posts/post-2/cover-image.jpg";
import coverImage3 from "../assets/posts/post-3/cover-image.jpg";
import coverImage4 from "../assets/posts/post-4/cover-image.jpg";
import coverImage5 from "../assets/posts/post-5/cover-image.jpg";
import coverImage6 from "../assets/posts/post-6/cover-image.jpg";

export const posts = [
  {
    id: 1,
    slug: "skincare-geracao-z",
    title: "Os Segredos de Skincare da Geração Z",
    coverImage: coverImage1,
    preview: "Descubra como a geração Z está redefinindo o skincare",

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

  {
    id: 2,
    slug: "slow-living-dezooming-livro-ativismo",
    title: "Slow Living e o De-Zooming: Ler é o Novo Ativismo",
    coverImage: coverImage2,
    preview:
      "Descubra por que desacelerar com um livro físico é o novo ato de rebeldia.",
    content: (
      <>
        <h1>
          ⏳ Slow Living e o De-Zooming: Por Que Ler um Livro É o Novo Ativismo
        </h1>

        <h2>HOOK (O Confronto)</h2>
        <p>
          Você consegue ficar 20 minutos olhando para uma página sem sentir a
          mão coçar para pegar o celular? Seja honesto(a).
        </p>
        <p>
          A gente foi treinado para a velocidade do 2x: áudios acelerados,
          vídeos curtos, scroll infinito. Tudo é fast-paced. O problema? Sua
          mente está sempre correndo, mas não está chegando a lugar nenhum.
        </p>

        <p>
          O verdadeiro ato de rebeldia Gen Z contra o hustle culture não é fazer
          greve; é desacelerar intencionalmente. É praticar o{" "}
          <strong>Slow Living</strong>. E o portal de entrada para isso é:{" "}
          <strong>ler um livro físico</strong>.
        </p>

        <h2>📖 Por Que o Livro é o Detox de Dopamina Supremo</h2>
        <p>
          Ler um livro é o self-care mais subestimado porque força seu cérebro a
          sair do modo
          <em> “Recompensa Imediata”</em> (Dopamina) e entrar no modo
          <strong> Foco Profundo e Sustentável</strong> (Serotonina e Calma).
        </p>

        <h3>1. O De-Zooming da Mente</h3>
        <p>
          O vídeo te entrega tudo mastigado. A leitura te obriga a criar a
          imagem, o som e o cenário na sua mente. É{" "}
          <strong>ginástica criativa</strong> com baixíssimo estresse.
        </p>

        <p>
          <strong>Foco Longo:</strong> Um livro exige atenção contínua por mais
          tempo — o treino perfeito para reverter o déficit de foco causado
          pelas redes sociais.
        </p>

        <h3>2. O Ativismo da Calma (Anti-Hustle)</h3>
        <p>
          Pegar um livro é uma declaração: <strong>"Eu decido o ritmo."</strong>
          Não há notificações, não há algoritmo. Você não está consumindo:{" "}
          <strong>você está experienciando</strong>.
        </p>

        <p>
          <strong>Zero Multitasking:</strong> Ler de verdade impede que você
          faça outras coisas. É presença total — o oposto do multitasking
          tóxico.
        </p>

        <h3>3. O Ritual Sensorial</h3>
        <p>
          O livro físico oferece um ritual que o celular tirou da gente: o
          cheiro do papel, o toque da capa, o som da página virando.
        </p>

        <p>
          <strong>Ancoragem:</strong> Esses estímulos sensoriais te colocam
          novamente no presente. Só pegar o livro já sinaliza ao cérebro: “Hora
          de relaxar.”
        </p>

        <h2>✨ Hacks para Reintegrar a Leitura no Seu Slow Life</h2>
        <p>
          Se você acha que não tem tempo, lembre-se: você provavelmente passou
          <strong>30 minutos scrollando</strong> sem perceber hoje.
        </p>

        <h3>A. A Regra do “Livro-Chave”</h3>
        <p>
          <strong>O Livro no Lugar do Celular:</strong>
          Coloque um livro atraente no criado-mudo ou mesa de centro e tire o
          celular dali.
        </p>

        <p>
          <strong>O Gatilho:</strong>
          Sentiu vontade de pegar o celular? Pegue o livro. Ele vira o novo
          default do seu tédio ou pausa.
        </p>

        <h3>B. A Técnica do 10/10/10 (Para Iniciantes)</h3>
        <p>Não precisa ler por uma hora. Comece com:</p>
        <ul>
          <li>
            <strong>10 minutos</strong> ao acordar (antes do celular)
          </li>
          <li>
            <strong>10 minutos</strong> no intervalo de almoço
          </li>
          <li>
            <strong>10 minutos</strong> antes de dormir
          </li>
        </ul>

        <h3>C. Faça do Seu Canto de Leitura o Seu Refúgio Estético</h3>
        <p>
          Se o ambiente é aesthetic, a atividade fica naturalmente mais
          convidativa. Crie um cantinho com poltrona confortável, luz quente,
          cobertor e algo quente para beber.
        </p>

        <p>
          <strong>Vibe Check:</strong>
          Use uma playlist calma (Jazz, Lofi, sons da natureza) sem letra para
          não roubar foco.
        </p>

        <h2>💡 Takeaway Final</h2>
        <p>
          Em um mundo que exige atenção imediata,{" "}
          <strong>ler é um ato de resistência</strong>. É o self-care que
          melhora foco, acalma sua mente e te conecta profundamente com uma
          história.
        </p>

        <p>
          Pare de correr atrás do próximo vídeo.{" "}
          <strong>Escolha a página.</strong>
        </p>

        <p>
          Qual livro está na sua to-read list para começar essa terapia do Slow
          Living? 👇
        </p>
      </>
    ),
  },

  {
    id: 3,
    slug: "microdoses-de-alegria",
    title: "O Self-Care da Alegria: Microdoses para Viver Melhor",
    coverImage: coverImage3,
    preview:
      "Pare de esperar o fim de semana: use Microdoses de Alegria para transformar sua rotina",
    content: (
      <>
        <h1>
          ⚡️ O Self-Care da Alegria: Pare de Esperar o Fim de Semana e
          Incorpore Microdoses de Felicidade
        </h1>

        <p>
          <strong>HOOK — A Armadilha do Futuro:</strong> Você já se pegou
          dizendo: “Vou ser feliz/relaxar quando… terminar o projeto, chegar o
          fim de semana, tirar férias”?
        </p>

        <p>
          A gente foi treinado a enxergar a rotina como algo a ser superado para
          só depois ter prazer. Esse padrão é exaustivo e rouba a alegria do
          presente.
        </p>

        <p>
          O verdadeiro wellness não está nas grandes viagens ou terapias caras —
          está em ativar o seu sistema de recompensa com pequenas{" "}
          <strong>Microdoses de Alegria</strong>, que transformam tarefas
          cansativas em momentos de satisfação.
        </p>

        <h2>🧠 Neurociência do Prazer: O Hack da Dopamina Diária</h2>

        <p>
          Seu cérebro ama recompensa. Se você só recompensa o cérebro no fim do
          mês, ele fica desmotivado no cotidiano.
        </p>

        <h2>1. Transformando o Monotasking em Joyful Task</h2>

        <p>
          Microdoses de Alegria são a arte de acoplar uma atividade prazerosa
          (baixa energia, alta recompensa) a uma tarefa chata (alta energia,
          baixa recompensa).
        </p>

        <p>
          <strong>A Troca:</strong> Você não precisa amar lavar a louça, mas
          pode amar o podcast que só escuta enquanto lava a louça.
        </p>

        <p>
          <strong>O Resultado:</strong> Seu cérebro associa a tarefa à
          recompensa, deixando o processo leve e até gostoso.
        </p>

        <h2>2. O Peak-End Rule (O Self-Care da Memória)</h2>

        <p>
          A ciência mostra que nossa memória julga uma experiência pelo pico e
          pelo final. Se o fim é prazeroso, a lembrança será positiva.
        </p>

        <p>
          <strong>Hack da Finalização:</strong> termine tarefas difíceis com um
          mini-ritual de prazer — alongamento, uma música boa ou um café
          especial. Isso faz seu cérebro querer repetir a atividade (ou ao menos
          não rejeitá-la).
        </p>

        <h2>✨ Hacks para Injetar Microdoses de Alegria na Rotina</h2>

        <p>Comece pequeno. A magia está na intencionalidade.</p>

        <h2>A. O Ritual da Bebida Perfeita</h2>

        <p>
          Não beba água ou café de qualquer jeito. Transforme a preparação em um
          ritual estético.
        </p>

        <p>
          <strong>Ação:</strong> Use sua xícara favorita, adicione um toque
          especial (canela, espuma) e dedique 3 minutos para apenas sentir o
          cheiro e o sabor, sem telas.
        </p>

        <p>
          <strong>Foco:</strong> Transforme a hidratação em um momento de prazer
          e presença.
        </p>

        <h2>B. Música para a Produtividade (O Soundtrack da Vida)</h2>

        <p>
          Crie playlists específicas para cada tipo de tarefa — não só para
          treinos.
        </p>

        <p>
          <strong>Playlists por Vibe:</strong> Lofi para e-mails, Pop anos 90
          para arrumar a casa, trilha épica para escrever relatórios.
        </p>

        <p>
          <strong>Self-Care Auditivo:</strong> A música dita o ritmo e o humor
          do seu dia, tornando até tarefas pesadas mais cinematográficas.
        </p>

        <h2>C. A Regra do “Coletar a Alegria” (Journaling Leve)</h2>

        <p>
          Pode parecer simples, mas funciona: antes de dormir, anote 3 coisas
          que trouxeram alegria ou satisfação real (não precisam ser grandes).
        </p>

        <ul>
          <li>A luz do sol na sua planta</li>
          <li>O cheiro do shampoo novo</li>
          <li>Ter terminado sua série de exercícios sem trapacear</li>
        </ul>

        <p>
          <strong>Objetivo:</strong> Treinar o cérebro para reconhecer e
          valorizar prazeres microscópicos, mudando o foco do que deu errado
          para o que nutriu você.
        </p>

        <h2>💡 Takeaway Final</h2>

        <p>
          A felicidade não é um evento raro que você agenda — é um hábito que se
          cultiva.
        </p>

        <p>
          Não espere o fim de semana para sentir prazer. Comece hoje a incluir
          Microdoses de Alegria na sua terça-feira. O wellness acontece na
          rotina.
        </p>

        <p>
          ✨ Qual Microdose de Alegria você vai testar nos próximos 10 minutos?
        </p>
      </>
    ),
  },
  {
    id: 4,
    slug: "sono-terapia-hack-subestimado",
    title: "O Sono Não é Luxo, É Terapia",
    coverImage: coverImage4,
    preview:
      "Descubra por que dormir bem é o hack mais subestimado - e essencial - da vida.",
    content: (
      <>
        <h1>💤 O Sono Não é Luxo, É Terapia</h1>
        <p>
          <strong>Por Que Dormir Bem é o Hack Mais Subestimado da Vida</strong>
        </p>

        <h2>HOOK (A Verdade Inconveniente)</h2>
        <p>
          Se você se orgulha de dormir pouco, você está se sabotando. Ponto
          final.
        </p>

        <p>
          Na nossa cultura de “estar ligado 24/7”, o sono virou a primeira coisa
          a ser sacrificada. A gente trata 7 ou 8 horas de descanso como um luxo
          que só teremos nas férias.
        </p>

        <p>
          Mude o mindset: <strong>O sono não é a sua pausa.</strong>É o seu{" "}
          <strong>upgrade obrigatório</strong>. É a hora em que o corpo entra no
          modo <em>“Manutenção Essencial”</em>.
        </p>

        <h2>🧠 A Terapia da Noite: O Que Acontece Enquanto Você Apaga</h2>
        <p>
          O cérebro não desliga quando você dorme; ele entra em um modo de
          limpeza e otimização que nenhum suplemento consegue replicar.
        </p>

        <h3>1. Faxina Neuronal (Clearing the Cache)</h3>
        <p>
          Durante o sono profundo, o <strong>Sistema Glinfático</strong> entra
          em ação. Pense nele como o <em>lixeiro do cérebro</em>: ele lava e
          drena toxinas acumuladas, incluindo proteínas que, se deixadas ali,
          prejudicam memória e cognição.
        </p>
        <p>
          Tradução:{" "}
          <strong>dormir bem = seu cérebro se livrando do lixo tóxico.</strong>
          Dormir mal = lixo acumulado.
        </p>

        <h3>2. O Upgrade da Memória (A Pasta “Salvos”)</h3>
        <p>
          Quando você aprende algo novo, isso fica na memória temporária.
          Enquanto você dorme, o cérebro transfere esses dados para a
          <strong>memória de longo prazo</strong>.
        </p>

        <p>
          <strong>Dormir é estudar.</strong>
          Virar a noite antes da prova impede o cérebro de salvar o conteúdo. É
          esforço jogado fora.
        </p>

        <h3>3. O Refil Emocional (Regulando o Estresse)</h3>
        <p>
          Quando você está exausto(a), tudo irrita. Isso acontece porque a
          privação de sono torna a<strong>Amígdala</strong> — região das emoções
          — hipersensível.
        </p>

        <p>
          <strong>O Self-Care da Calma:</strong>O sono adequado regula suas
          emoções e ajuda a processar o estresse do dia, transformando reações
          exageradas em respostas equilibradas.
        </p>

        <h2>🔑 Hacks para Transformar o Sono em Terapia</h2>
        <p>Você não precisa de sleep tracking complexo. Só de consistência.</p>

        <h3>1. A Higiene do Sono (The Vibe)</h3>
        <p>
          <strong>Escuridão Total:</strong>
          Luzes mínimas (LED do carregador, rua) atrapalham a produção de
          melatonina. Use blackout ou máscara de dormir. Escuro = sinal para
          dormir.
        </p>

        <p>
          <strong>Temperatura:</strong>
          Mantenha o quarto frio. O corpo precisa reduzir a temperatura interna
          para entrar no sono profundo. Quarto fresco + cobertor = combo ideal.
        </p>

        <h3>2. O Wind Down Digital (Desconecte-se)</h3>
        <p>
          <strong>A Regra dos 60 Minutos:</strong>
          Desligue telas 1 hora antes de deitar. A luz azul engana o cérebro,
          fazendo-o achar que ainda é dia.
        </p>

        <p>
          <strong>Crie um Ritual:</strong>
          Leia algo, ouça um podcast calmo, medite, alongue. Algo low-effort que
          sinalize ao corpo que o modo descanso está ativado.
        </p>

        <h3>3. Consistência é Tudo (Non-Negotiable)</h3>
        <p>
          <strong>Horário Fixo:</strong>
          Durma e acorde no mesmo horário todos os dias — inclusive fins de
          semana. Seu corpo ama rotina, e isso fortalece seu ritmo circadiano.
        </p>

        <h2>💡 Takeaway Final</h2>
        <p>
          O sono não é algo que você faz quando terminou tudo na sua lista. É
          algo que você faz <strong>para conseguir</strong> terminar tudo na sua
          lista.
        </p>

        <p>
          Trate seu sono como o compromisso mais importante do dia. É sua
          terapia gratuita mais poderosa.
        </p>

        <p>Qual a sua maior dificuldade para essa terapia noturna? 👇</p>
      </>
    ),
  },

  {
    id: 5,
    slug: "self-care-skin-barrier",
    title:
      "Self-Care é Ciência: Pare de Exagerar! Como Fortalecer Sua Barreira Cutânea",
    coverImage: coverImage5,
    preview:
      "Descubra por que o segredo da pele glowy não é mais produto, mas uma barreira saudável.",
    content: (
      <>
        <h1>
          🫧 Self-Care é Ciência: Pare de Exagerar! Como Fazer o Skin Barrier Dar
          um Glow Up no Seu Rosto
        </h1>

        <p>
          <strong>HOOK (A Confissão Sincera):</strong>
          <br />A gente sabe — o skincare virou um labirinto de 12 passos,
          séruns caríssimos e a pressão de ter uma pele de porcelana. Mas o
          segredo para conquistar uma pele calma, radiante e saudável é, na
          verdade, o oposto da complicação.
        </p>

        <p>
          A verdade?{" "}
          <strong>Você provavelmente está over-treating sua pele.</strong>
          <br />O foco não é adicionar mais produtos, mas sim proteger sua{" "}
          <strong>Barreira de Hidratação</strong>.
        </p>

        <p>
          Pense na sua pele não como algo que precisa ser “consertado”, mas como
          um <strong>muro protetor</strong> que precisa ser fortalecido.
        </p>

        <h2>🛡️ O Muro da Felicidade: Entenda o Skin Barrier</h2>

        <p>
          A <strong>Barreira de Hidratação</strong> é a camada mais externa da
          pele, formada por células e lipídios. Ela tem duas missões vitais:
        </p>

        <ul>
          <li>
            <strong>Bloquear o Mal:</strong> impedir que poluentes, bactérias e
            irritantes entrem na pele.
          </li>
          <li>
            <strong>Manter o Bem:</strong> evitar que a água essencial evapore e
            cause ressecamento.
          </li>
        </ul>

        <h3>O S.O.S. da Barreira Quebrada</h3>

        <p>
          Quando você exagera — muitos ácidos, esfoliação agressiva ou limpeza
          excessiva — o muro da sua pele cria “rachaduras”.
        </p>

        <h3>Sintomas da Barreira Danificada</h3>

        <ul>
          <li>
            <strong>Vermelhidão / Irritação</strong>: você pensa “preciso de
            algo calmante”, mas na verdade sua pele pede pausa.
          </li>
          <li>
            <strong>Espinhazinhas constantes</strong>: você pensa “vou usar mais
            ácido”, mas é irritação acumulada.
          </li>
          <li>
            <strong>Ressecamento que não passa</strong>: você acha que o
            hidratante não funciona, mas são lipídios faltando.
          </li>
        </ul>

        <blockquote>
          “Na verdade, sua pele está gritando: ME DEIXA EM PAZ!”
        </blockquote>

        <h2>✨ O Self-Care Minimalista para a Pele (O Less is More)</h2>

        <p>
          O autocuidado moderno é sobre intenção. Menos excesso, mais
          funcionalidade.
        </p>

        <h3>1. O Reset do “Siga o Bê-A-Bá”</h3>

        <p>
          Se sua pele está sensível, pare tudo por 1 a 2 semanas. Foque no
          essencial:
        </p>

        <ul>
          <li>
            <strong>Limpeza Suave:</strong> use um limpador cremoso ou não
            espumante. Lave por menos de 60s.
          </li>
          <li>
            <strong>Hidratação com Ceramidas:</strong> ceramidas, colesterol e
            ácidos graxos reconstruem o muro da pele.
          </li>
          <li>
            <strong>Proteção Solar:</strong> indispensável; o sol é o maior
            inimigo da barreira.
          </li>
        </ul>

        <h3>2. O Hack dos Ativos (A Regra do 80/20)</h3>

        <p>Ativos poderosos devem ser usados com estratégia.</p>

        <ul>
          <li>
            <strong>Não misture:</strong> vitamina C de manhã, retinol à noite —
            nunca juntos no mesmo layer.
          </li>
          <li>
            <strong>Slow Intro:</strong> retinol 2x por semana. Sem irritar?
            Aumente. Irritou? Pause. Ouça sua pele.
          </li>
        </ul>

        <h3>3. O Toque de Midas (A Gentileza Importa)</h3>

        <p>Gentileza é a chave.</p>

        <ul>
          <li>
            <strong>Toalha Macia:</strong> pressione, não esfregue.
          </li>
          <li>
            <strong>Aplicação Pat-Pat:</strong> aplique produtos com batidinhas
            — melhor absorção e menos atrito.
          </li>
        </ul>

        <h2>💡 Takeaway Final: O Segredo da Pele Glowy</h2>

        <p>
          O verdadeiro self-care da pele é priorizar a <strong>saúde</strong> (o
          muro) em vez da perfeição (o filtro). Dê à sua pele o que ela precisa:
          calma, hidratação e consistência.
        </p>

        <p>
          <strong>
            Qual produto você vai “dar férias” hoje para fortalecer sua
            Barreira?
          </strong>
          Deixe nos comentários! 👇
        </p>
      </>
    ),
  },

  {
    id: 6,
    slug: "hard-reset-gen-z-anti-burnout",
    title: "Faça um Hard Reset! Seu Guia Gen Z Anti-Burnout",
    coverImage: coverImage6,
    preview:
      "Seu guia Gen Z para sobreviver ao burnout com self-care real - sem performance.",
    content: (
      <>
        <h1>🚨 Pelo Amor de Deus, Faça um Hard Reset! 🚨</h1>
        <p>
          <strong>
            Seu Guia Gen Z para Sobreviver ao Burnout com Self-Care (Que
            Funciona)
          </strong>
        </p>

        <h2>HOOK (O Meme é Real)</h2>
        <p>
          Se a sua notificação de <em>"Bateria Fraca"</em> fosse uma pessoa,
          seria você. O burnout não é preguiça; é o seu sistema entrando em pane
          depois de rodar 24/7. 🆘
        </p>

        <p>
          A verdade? A gente vive na era do{" "}
          <strong>hustle culture tóxico</strong>. Somos forçados a ser
          multitasking o tempo todo, e o resultado é essa sensação constante de
          esgotamento que tentamos curar com mais cafeína e menos sono.
        </p>

        <p>
          Chega de <em>toxic positivity</em> dizendo que é só “descansar mais”.
          Vamos falar sério sobre <strong>Self-Care que é reset</strong>, e não
          só uma máscara facial.
        </p>

        <h2>📉 O Sintoma #1: Você é uma Planilha Vazia</h2>
        <p>O burnout se manifesta de formas tristes:</p>

        <ul>
          <li>
            <strong>"Eu só tô desanimado(a)."</strong>
            <br />
            <em>Exaustão Emocional:</em> Você não sente mais alegria, prazer ou
            raiva. É só um vazio cinza.
          </li>

          <li>
            <strong>"Não consigo focar em nada."</strong>
            <br />
            <em>Despersonalização:</em> Sua capacidade de concentração zerou.
            Você sente que está assistindo sua vida de longe.
          </li>

          <li>
            <strong>"Tudo que eu faço é 'meh'."</strong>
            <br />
            <em>Baixa Realização:</em> Você se sente inútil, mesmo sabendo que
            está trabalhando 1000%.
          </li>
        </ul>

        <p>
          ⚠️ Se você se identificou, girl, você não está sozinha. É hora de
          forçar um <strong>logoff</strong>.
        </p>

        <h2>✨ Self-Care Que Não é Performance</h2>
        <p>
          O self-care virou performance (postar a xícara de chá perfeita no
          Insta). O self-care de verdade é o que te dá energia sem gerar um
          post.
        </p>

        <h3>1. O Hack do Dreno de Energia (Aprenda a dizer NÃO)</h3>
        <p>
          Você está constantemente “disponível”? Isso é um dreno gigante de
          energia.
        </p>

        <p>
          <strong>Bloqueie o Calendário:</strong>
          Se você não tem energia, bloqueie 1 hora no Google Calendar com o
          título:
          <em>“Deep Work: Não Perturbe (ou Soneca)”</em>. Trate o descanso como
          um compromisso real.
        </p>

        <p>
          <strong>A Regra da Resposta Tardia:</strong>
          Não responda e-mails ou DMs imediatamente. Treine as pessoas a
          esperarem. Se não for urgente (e quase nunca é), responda depois. Seu
          tempo de reação = seu limite.
        </p>

        <h3>2. O Dopamine Detox (A Cura para o Doomscrolling)</h3>
        <p>
          Seu cérebro está viciado em micro-doses de dopamina: notificações,
          likes, scroll infinito.
        </p>

        <p>
          <strong>O Teste do 15 Minutos:</strong>
          Tire o Instagram ou TikTok da tela inicial por 15 minutos. Olhe para a
          parede. Fique entediado(a). Esse tédio é seu cérebro se recalibrando.
        </p>

        <p>
          <strong>Conteúdo Low-Effort:</strong>
          Troque notícias pesadas (doomscrolling) por algo que realmente te
          acalma: vídeos de aquário, jardinagem, música clássica. Low-effort,
          high-reward.
        </p>

        <h3>3. O Ritual de Transição (A Ponte entre Trabalho e Vida)</h3>
        <p>Você sai do Zoom e já está na cozinha. Não existe separação.</p>

        <p>
          <strong>A "Walk of Shame" (Digna):</strong>
          Quando desligar o PC, saia do local de trabalho. Caminhe 5 minutos —
          mesmo que seja só no quarteirão. Isso comunica ao corpo:{" "}
          <em>“O trabalho acabou.”</em>
        </p>

        <p>
          <strong>O Banho de Onsen/Banya Suave:</strong>
          Use a sabedoria ancestral (lembram do post anterior? 😉). Tome banho
          em silêncio e finalize com água fria por 30 segundos. Esse choque
          quebra o ciclo de estresse e reacende sua energia.
        </p>

        <h2>🔑 O Mindset Gen Z Anti-Burnout</h2>
        <p>Não precisamos de oito side hustles. Precisamos de limites.</p>

        <p>
          O verdadeiro self-care não é uma rotina extra; é a remoção do que te
          sobrecarrega. É respeitar seus limites e lembrar que você não é uma
          máquina de produtividade.
        </p>

        <blockquote>
          “Seja o CEO da sua energia, e não o escravo da sua to-do list.” 🤝
        </blockquote>
      </>
    ),
  },
];
