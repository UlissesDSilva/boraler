const BookService = {
  getAll() {
    return [
      {
        id: "Livro - Robin Hood.jpg",
        title: "Robin Hood",
        auth: "Mauri Kunnas",
        coments: "Eu particularmente gostei bastante do livro e achei bem interessante. O personagem principal é o Robin Hood, um coelho aventureiro que ajuda as pessoas pobres e necessitadas. Ele tem uma turma que o ajuda, os alegres companheiros, e quando Robin toca a corneta eles vêm correndo lhe ajudar (e isso eu achei bem legal). Tem também o xerife Nottingham, que faz de tudo para tentar acabar com o Robin Hood. E não posso esquecer de sua melhor amiga, a Donzela Mariana, e os dois são apaixonados um pelo outro. E para finalizar com uma qualidade, Robin é um grande arqueiro.",
        authComents: "Rauany Rafaela",
      },
      {
        id: "Livro - O Gato Xadrez.jpg",
        title: "O Gato Xadrez: Rita Pancada na China",
        auth: "Tiago de Melo Andrade",
        coments: "Bom, tudo começa com o nascimento de uma menina chamada Rita Palhares. Desde seu nascimento, já começou épica! Ela saiu da barriga de sua mãe com um enorme espirro. Saiu batendo em tudo e fazendo a maior confusão dentro do hospital (particularmente, essa é minha parte favorita). Quando começou a escola, ela já teve problemas, pois sempre se machucava. Mas o que ela tinha? Se chama Patetice Patológica Congênita, um tipo de doença que faz ela se atrapalhar e se machucar em tudo. Tudo que ela tentava fazer, virava um acidente. Mas ela foi para a China em busca de mudar isso. Então ela conheceu um cara chamado Yuan quando foi para a China. Assim, se aventuraram em busca da solução para sua Patetice Patológica Congênita.",
        authComents: "Kaillany Vitória",
      },
      {
        id: 'Livro - A Rede Mágica de Luís.PNG',
        title: 'A Rede Mágica de Luís',
        auth: "Karla Frota",
        coments: "O livro conta um pouco sobre Luís, que tem 80 anos e os cabelos brancos de algodão. Ele gosta de fazer muitas coisas, e a preferida é sonhar. Mesmo não dormindo, Luís ama sonhar sentado em uma cadeira de balanço. Sonhava com sua antiga casa, onde pôde se reencontrar com o menino Luís de sete anos, ele era bonito e inteligente, e tinha um cão chamado Café, que o acompanhava em todas as suas aventuras. O menino Luís era bem simples, ele não dormia em cama, dormia em rede, e era nela que ele se aventurava.",
        authComents: "Luis Felipe Tavares",
      },
      // {
      //   id: 'Livro - Cazuza.jpg',
      //   title: 'Cazuza',
      //   auth: "",
      //   coments: "",
      //   authComents: "",
      // },
      {
        id: 'Livro - Com que Roupa Irei para a Festa do Rei.jpg',
        title: 'Com que Roupa Irei para a Festa do Rei',
        auth: "Tino Freitas & Tonit Zilberman",
        coments: "Esse livro é muito legal. Além de ser em poesia, fala sobre a história de alguns reis, todos representados por animais. Fala sobre um rei, a Tartaruga, que quis dar uma festa e todos tinham que ir vestidos de rei, inesperado foi o rei que veio sem roupa. Tinha rei de todo tipo: da selva, do rock, do baião, do futebol, do tabuleiro e da Espanha. Como falei no começo, eu amei muito esse livro e super recomendo.",
        authComents: "Ana Letícia Emidia",
      },
      {
        id: 'Livro - Imaginarium.jpg',
        title: 'Imaginarium: Monstros do Novo Mundo',
        auth: "Roberto Lanznaster",
        coments: "O livro “Imaginarium: Monstros do Novo Mundo” fala sobre os personagens do Folclore do novo mundo descobertos pelos espanhóis. Ele apresenta cada um dos personagens de A a Z. Particularmente, eu achei o livro muito interessante, gostaria de lê-lo mais uma vez para memorizar o nome de cada um dos personagens. Eu amei os desenhos dos personagens, amei o jeito que cada acontecimento é narrado. Cada história é assustadora, pra me interessar e me deixar “doida” para ler de novo. A história não tem um personagem principal, mas, na minha opinião, acho que o Curupira pode ser considerado o personagem principal, afinal, ele é o protetor da floresta. Recomendo muito esse livro.",
        authComents: "Nelly Sophie",
      },
      {
        id: 'Livro - O Marido da Mãe.jpg',
        title: 'O Marido da Mãe',
        auth: "Maria do Carmo Brandão",
        coments: "Gostei do livro, achei muito interessante e muito bom, fiquei muito interessada na quarta capa, no título e nas ilustrações, eles me chamaram a atenção para ler o livro. O livro fala sobre um homem que iria ser o marido da mãe, também iria ser o pai das crianças. No livro, há dois irmãos, o novo pai das crianças e a mãe das crianças. O marido da mãe tinha bigode, tinha pouco cabelo e ele se apresentava como o novo pai dos irmãos, pois o pai biológico, infelizmente, tinha falecido. A primeira parte do livro fala sobre o novo pai, os irmãos falam que nunca imaginaram que ele fosse muito bonito e também falam que gostam muito dele. Gostei do final da história, o pai tinha brigado com a mãe, mas depois eles se abraçaram e ficaram juntos.",
        authComents: "Bruna Letícia",
      },
      // {
      //   id: 'Livro - O Menino e o Cata-Vento.jpg',
      //   title: 'O Menino e o Cata-Vento',
      //   auth: "",
      //   coments: "",
      //   authComents: "",
      // },
      {
        id: 'Livro - O sapateiro e os Anõezinhos.jpg',
        title: 'O Sapateiro e os Anõezinhos',
        auth: 'Bia Bedran',
        coments: "Achei esse livro muito legal, pois conta a história de um sapateiro que antes era muito reconhecido por fazer belos sapatos, mas com o tempo foi perdendo essa fama e se tornou muito pobre. Ele só tinha um pedaço de couro bem simples e só podia fazer um par de sapatos. Então ele modelou, cortou um pedaço de couro e foi dormir, deixando para acabar de costurar no dia seguinte. Quando ele acordou, viu o sapato pronto e belo, e um freguês comprou por um bom preço. E o sapateiro comprou mais couro e fez assim como tinha feito antes: modelou e cortou, e no dia seguinte, apareceram belo sapatos. Ele vendeu e fez a mesma coisa todos os dias. Todas as manhãs, havia uma fila de pessoas querendo um sapato. Então um dia, ele e sua mulher resolveram ver o que acontecia com aquele couro e quem fazia aqueles belos sapatos. Ficaram escondidos atrás da cortina. Esperaram muito, e quando o relógio deu 12 badaladas, eles viram dois anõezinhos costurando o couro e cantando: “Costura, fura, martela, põe a fivela do lado de cá. Capricha no acabamento, sapatos mais belos no mundo não há”. Ficaram impressionados e resolveram fazer roupas e sapatos para eles. Depois, à noite, os anõezinhos viram as roupas e ficaram muito felizes e nunca mais apareceram naquele lugar.",
        authComents: "Ana Letícia Emidia"
      },
      {
        id: 'Livro - Os Sete Arcos de Íris.jpg',
        title: 'Os Sete Arcos de Íris',
        auth: 'Heloisa Prieto',
        coments: "Achei o livro muito interessante e criativo. O livro fala sobre os sete arcos de Íris, que era uma menina e muito apaixonada por cores. Não apenas as sete cores do arco que tinha seu nome, mas também tons diferentes, como tons de cores mescladas, claras, escuras e borradas. Aos quatro anos de idade, íris imaginou uma grande aventura, e a cada ano que passava, novos pedaços de sua aventura iam surgindo na sua imaginação. Íris foi criando um mundo, um lugar onde ela poderia entrar pra se divertir com toda facilidade e felicidade. A aventura que Íris foi criando falava sobre o significado das cores e suas emoções depois de um encontro com amigos em diferentes reinos coloridos. A parte que mais gostei desta aventura foi o final, quando Íris desceu pelo arco colorido e abraçou cada personagem imaginário inventado por ela.",
        authComents: "Bruna Letícia"
      },
      {
        id: 'Livro - Sete Ossos e Uma Maldição.jpg',
        title: 'Sete Ossos e Uma Maldição',
        auth: 'Rosa Amanda Strausz',
        coments: "O livro é bastante envolvente e prende você na história. A história principal começa quando uma menina que se chama Clara recebe algumas bonecas (sete bonecas), porém há apenas uma estranha: Muriel. Antes de ganhar as bonecas, Clara tinha pesadelos com uma mulher falando baixo “meus ossos”. Ao final, você, leitor, irá se surpreender rapidamente, pois vai haver momentos de muito suspense. O livro é de suspense/terror e eu, particularmente, gostei muito desse livro, e, inclusive, foi um dos melhores que já li, recomendo demais para quem gosta de um suspense bom.",
        authComents: "Clara Elis Mendes"
      },
      {
        id: 'Livro-Cuidado Garoto.jpg',
        title: '#Cuidado garoto apaixonado',
        auth: 'Toni Brandão',
        coments: "O livro é muito bom, fala sobre um garoto que está apaixonado pela garota nova de sua escola, que se chama Camila, mas seu amigo Alê também está gostando da mesma garota. O Tui, personagem principal da história, é muito tímido então ele perde a chance de ficar com a Camila. E como o Alê é popular, gato (só não era inteligente, mas isso a gente esquece), ele acaba ficando com a Camila. Mas por que a Camila é tão disputada? Porque ela é bonita, joga futebol e é inteligente. Os personagens principais são: o Alê, que é bonito, surfista e atlético; o Tui, que é tímido, introvertido, mas é bem inteligente; e a Camila, que, como já falei, é linda, é linda, inteligente e joga muito bem. Eu gostei muito do livro, é muito legal e divertido!",
        authComents: "Rauany Rafaela"
      },
      {
        id: 'Livro - Quando o Lobo tem fome.jpg',
        title: 'Quando o Lobo tem fome',
        auth: ' Christine Naumann-Villemin',
        coments: "O livro conta que um lobo chamado Edmundo Bigfuça estava com muita fome e queria comer um coelhinho urbano, e ele foi em busca pela cidade e achou um grande prédio onde Max Omatose, um coelho anão, morava, e Edmundo ficou feliz. Mas quando subiu para o 5º andar, deixou sua faca no elevador e a Perua do 3º andar achou e ficou com ela pra cortar bolo. Ele saiu como um louco para pegar sua motosserra, mas o urso do 4º andar a pediu emprestada. Edmundo volta novamente e pega uma corda, mas seu Gambá pede emprestada. Edmundo corre para descer pela escada e pega um caldeirão, mas a vizinha Vaca pede emprestado. Já irritado, Edmundo pega sua churrasqueira, mas a senhorita Mirette pede emprestada. Depois de um tempo, decide comer o coelho cru, sobe para o telhado e descobre que tudo era uma festa.",
        authComents: "Luis Felipe Tavares"
      },
    ]
  }
}

export default BookService