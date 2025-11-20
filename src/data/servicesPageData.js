import icon1 from "../assets/icon-service-1.png";
import icon2 from "../assets/icon-service-2.png";
import icon3 from "../assets/icon-service-3.png";
import star from "../assets/icon-star.png";

import image1 from ".././assets/slider-services/image1.jpg";
import image2 from ".././assets/slider-services/image2.jpg";
import image3 from ".././assets/slider-services/image3.jpg";
import image4 from ".././assets/slider-services/image4.jpg";
import image5 from ".././assets/slider-services/image5.jpg";

export const servicesData = [
  {
    id: 1,
    category: "massagens",
    image: icon1,
    title: "Massagem Terapêutica",
    text: "Especializada no alívio de dores musculares crônicas e tensões localizadas. Nossos terapeutas aplicam técnicas profundas para restaurar a mobilidade e o bem-estar.",
    icon: star,
  },
  {
    id: 2,
    category: "massagens",
    image: icon1,
    title: "Drenagem Linfática",
    text: "Técnica suave e rítmica focada na eliminação de toxinas e redução da retenção de líquidos. Altamente recomendada para pós-operatório e desintoxicação corporal.",
    icon: star,
  },
  {
    id: 3,
    category: "massagens",
    image: icon1,
    title: "Massagem Relaxante",
    text: "A mais tradicional para combater o estresse. Utiliza óleos essenciais aromáticos e movimentos longos e fluidos para induzir um estado de profundo relaxamento físico e mental.",
    icon: star,
  },

  {
    id: 4,
    category: "tratamentos",
    image: icon2,
    title: "Esfoliação Corporal",
    text: "Tratamento de renovação da pele que remove células mortas com esfoliantes naturais. Prepara a pele para hidratações profundas, deixando-a macia e luminosa.",
    icon: star,
  },
  {
    id: 5,
    category: "tratamentos",
    image: icon2,
    title: "Limpeza Facial Premium",
    text: "Limpeza profunda e completa da pele do rosto, incluindo extração de cravos e aplicação de máscaras nutritivas, visando saúde e luminosidade imediata.",
    icon: star,
  },
  {
    id: 6,
    category: "tratamentos",
    image: icon2,
    title: "Hidratação com Lama Vulcânica",
    text: "Envolvimento corporal com lama rica em minerais, que desintoxica, firma e nutre a pele. Perfeito para revitalização e combate à celulite.",
    icon: star,
  },

  {
    id: 7,
    category: "dias-especiais",
    image: icon3,
    title: "Dia Revitalizante",
    text: "Pacote completo para recarregar as energias. Inclui massagem terapêutica, tratamento facial e um banho relaxante de ervas aromáticas para um dia de puro autocuidado.",
    icon: star,
  },
  {
    id: 8,
    category: "dias-especiais",
    image: icon3,
    title: "Dia Serenidade",
    text: "Experiência imersiva em tranquilidade. Combina esfoliação corporal, banhos terapêuticos de sais e uma sessão guiada de meditação para acalmar a mente e o espírito.",
    icon: star,
  },
];

export const serviceSliderImages = [
  {
    id: 1,
    src: image1,
    alt: "imagem 1",
    active: true,
  },
  {
    id: 2,
    src: image2,
    alt: "imagem 2",
    active: false,
  },
  {
    id: 3,
    src: image3,
    alt: "imagem 3",
    active: false,
  },
  {
    id: 4,
    src: image4,
    alt: "imagem 4",
    active: false,
  },
  {
    id: 5,
    src: image5,
    alt: "imagem 5",
    active: false,
  },
];
