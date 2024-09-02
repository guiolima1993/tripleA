import React from 'react';
import Hero from '../components/Hero';
import Methods from '../components/Methods';
import CtaCards from '../components/CtaCards'
import Display from '../components/Display'
import Way from '../components/Way';
import Ceo from '../components/Ceo'
import CornerImages from '../components/CornerImages';

export default function Home() {

  const videoEmbedCode = `
    <script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="66d1bbade2cd17000b56a9c2"></script> <div id="ifr_66d1bbade2cd17000b56a9c2_wrapper" style="margin: 0 auto; width: 100%"> <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_66d1bbade2cd17000b56a9c2_aspect"> <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66d1bbade2cd17000b56a9c2/embed.html" id="ifr_66d1bbade2cd17000b56a9c2" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe> </div> </div> <style> .elementor-element:has(#ifr_66d1bbade2cd17000b56a9c2_wrapper) { width: 100%; } </style>
  `;

  const headlineHTML = `
    O Script de Vendas Secreto criado por Fritz Paixão que já transformou lavadores em milionários…
  `;
  const subheadlineHTML = `
    Muitas pessoas me perguntam como eu fiz pra ganhar dinheiro no mercado de higienização… o meu grande diferencial foi: saber vender! Muita gente se importa com produtos, eu me importo com a venda!
  `;

  const faq = [
    {
      question: 'Por quanto tempo terei acesso ao Método Triple A?',
      answer: 'Você terá acesso durante 1 ano completo a partir do dia da inscrição no curso. No entanto, todos os materiais extras que você baixar serão seus para sempre.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Tenho garantia?',
      answer: 'Sim, você tem uma garantia de 7 dias. Ou seja, você pode participar das aulas, acessar todo o material extra e se você decidir que não valeu a pena ou que não era o que você esperava, basta enviar um e-mail para suporte@fritzpaixao.com que você irá receber cada centavo do seu investimento.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Já tentei empreender no mercado de higienização de estofados antes, por que vai dar certo agora?',
      answer: 'Porque agora você vai aprender com a maior referência desse mercado! Eu já faturei mais de 100 milhões . Além disso, foram 7 voltas ao mundo, inaugurando franquias em dezenas de países e treinando milhares de pessoas. Por isso eu posso te assegurar que dessa vez a chave do seu negócio vai virar!',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Tem suporte?',
      answer: 'Sim, eu (Fritz Paixão) junto com a minha equipe vamos te dar todo o suporte necessário dentro da área de membros. Portanto, qualquer dúvida relacionada ao curso você terá total suporte.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Quanto tempo preciso para ter resultado?',
      answer: 'Se você aplicar exatamente o que eu passo nas aulas, ainda essa semana você pode fechar os seus primeiros ou próximos clientes com muito mais facilidade.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Como acessar o Método?',
      answer: 'Assim que finalizar a sua inscrição, você receberá um e-mail da plataforma Hotmart, nesse e-mail você vai receber todos os seus dados para acessar o Método Triple A. Depois de acessar você pode assistir quando e onde quiser.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
  ];


  return (
    <>
      <CornerImages />
      <Hero
        buttonIconSrc="/image/icons-security.svg"
        headline={headlineHTML}
        subheadline={subheadlineHTML}
        videoEmbedCode={videoEmbedCode}
      />
      <Methods />
      <CtaCards />
      <Display />
      <Way
        leftItem={{
          imageSrc: '/image/way1.webp',
          title: 'Primeiro Caminho',
          description: 'Ignorar essa oportunidade única com investimento baixo e continuar vivendo a sua vida normalmente. Sem clientes e com escassez.'
        }}
        centerText="OU VOCÊ PODE PEGAR O SEGUNDO CAMINHO QUE É UM ATALHO QUE TE LEVA A TER 5X MAIS CLIENTES NO AUTOMÁTICO…"
        rightItem={{
          imageSrc: '/image/way2.webp',
          title: 'Segundo Caminho',
          description: 'Pegar toda a minha experiência de 9 anos empreendendo no mercado de higienização, e aplicar meu conhecimento para multiplicar seu faturamento.'
        }}
      />
      <Ceo faq={faq} />
    </>
  );
}
