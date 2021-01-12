//Casa1
  let dCasa1MC = []; 
    dCasa1MC.push({texto: 'Ten paciencia, Max. Ya sé que no podemos ganar\ndinero, y además solo te dieron 40 talegos por\nesas cuatro crónicas.'});
    dCasa1MC.push({texto: 'No temo a la idea del suicidio colectivo, pero\ntenemos una hija, Max. ¡Es muy joven!\nNo puede morir todavía.'});
    dCasa1MC.push({texto: '¿Qué responde Max?',
        answer: [{texto: 'También se matan los jóvenes.', points: 0, life: 0, jump: 0},
                 {texto: 'Tienes toda la razón.', points: 0, life: 0, jump: 0},
                 {texto: '¿Y si la convencemos para el suicidio colectivo?', points: 0, life: -5, jump: 0,razon:"intento de suicidio"}]});
    dCasa1MC.push({texto: 'Max, los jóvenes no se matan por cansancio de la\nvida. Los jóvenes se matan por romanticismo.'});
    dCasa1MC.push({texto: 'No desesperes. Otra puerta se abrirá.\nNo te pongas a gatas, Max.\nTodos reconocen tu talento.'});
    dCasa1MC.push({texto: '¿Qué responde Max?',
      answer: [{texto: 'Ninguna editora me cogeria ', points: 0, life: 0, jump: 0},
                {texto: 'Puedo intentar hacer lo minimo por nuestra hija', points: 0, life: 0, jump: 0},
                {texto: 'La solución podría ser el suicidio colectivo', points: 0, life: -4, jump: 0,razon:"intento de suicidio"}
       ]});
    dCasa1MC.push({texto: 'Pues ves a hablar con tu fiel amigo Don Latino que\na mí ya me tienes casi olvidada. Tú y tus\ngenerosidades nos han dejado sin cena...'});
    dCasa1MC.push({texto: 'Si no fuera por nuestra hija Claudinita ya\npodríamos estar muertos, Max.'});
   
    let dCasa1Lat = []; 
    dCasa1Lat.push({texto: '¡Oh, admirado y querido gran amigo mio, Max!, tu\nmujer y su hija desde que he entrado han estado\nacribillándome por el dinero.'});
    dCasa1Lat.push({texto: 'Siguen sin fiarse de mí.\nAdemás el librero nos ha timado pagándonos\n¡Solo tres pesetas! ¡Tres miseras pesetas!\n¡Un robo!'});
    dCasa1Lat.push({texto: 'Si te presentas ahora conmigo en la tienda\nde ese granuja y le armas un escándalo, le sacas\nhasta dos duros. Tú tienes otro empaque.'});
    dCasa1Lat.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Pues no haber dejado las crónicas, vamos a devolverlo', points: 10, life: 2, jump: 0,razon:"fuerza de voluntad"},
              {texto: 'Déjalo estar, esas crónicas no valían más', points: 0, life: -4, jump: 0,razon:"infravalorar tu trabajo"},
              {texto: 'No deberia de salir de casa por mi condición', points: 0, life: -4, jump: 0,razon:"afrontar la realidad"}
     ]});
     dCasa1Lat.push({texto: 'Max, el aire te refrescará. Aquí hace un calor de\nhorno, pues en la calle corre fresco.¡Vamos!'});

    let dCasa1Gafas = [];
    dCasa1Gafas.push({texto: '(Tan solo son unas gafas...)'});

    let dCasa1GafasD = [];
    dCasa1GafasD.push({texto: '¿Creías que no podía hablar?'});
    dCasa1GafasD.push({texto: 'No creo que en tu situación te sea de gran ayuda.'});

    //Libreria
    let dLibreriaZar = [];
    dLibreriaZar.push({texto: 'Mi nombre es Zaratustra y soy el dueño de\nesta librería. ¿A qué debo el placer?'});
    dLibreriaZar.push({texto: 'Hemos venido a reclamar un aumento de cobro\npor los libros de Max Estrella que vendimos\nanteriormente aquí. ¿Verdad, Max?',
      personaje: 'Latino'});
    dLibreriaZar.push({texto: '¿Qué responde Max?',
      answer: [{texto: '¿Qué? Yo había venido aquí a comprar unos libros que me apetecía leer.', points: 0, life: 0, jump: 0},
               {texto: '¡Zaratustra, vuestros días de picardía se terminan hoy!', points: 0, life: 0, jump: 9}]});
    dLibreriaZar.push({texto: 'Max, no seas trapisondista.\n¿No querías saber qué le había pasado\na tus libros?'});
    dLibreriaZar.push({texto: '¿Está usted seguro de querer comprar\nun libro, don Estrella?',
      personaje: 'Zaratustra'});
    dLibreriaZar.push({texto: '¿Qué responde Max?',
      answer: [{texto: 'Sí, estoy seguro. Anhelo leerlo.', points: 0, life: -5, jump: 0, razon:'que no puedes leer\n y has gastado parte de tu dinero.'},
               {texto: 'No. No lo quiero. ¡Vayámonos de aquí Don Latino!', points: 0, life: 2, jump: 2, razon: 'que no han podido engañarle\n y han perdido el tiempo.'},
               {texto: '¿Me recomienda algún libro?', points: 0, life: -7, jump: 3,razon:'que te han timado\n vendiendote un libro'}]});
    dLibreriaZar.push({texto: 'De acuerdo entonces, es todo suyo.\nDéme un segundo para envolverlo.'});
    dLibreriaZar.push({texto: 'Max, ¿has perdido la cabeza?\n¿Cómo se supone que vas a leer un libro\nsiendo invidente?',
      personaje: 'Latino', jump: 12});
    dLibreriaZar.push({texto: 'De verdad, Max, no tengo ni idea de qué piensas…\nA la buena de Dios hemos venido hasta aquí.',
      personaje:'Latino', jump: 11});
    dLibreriaZar.push({texto: 'Pues, ahora que lo menciona, tengo\naquí un ejemplar del último libro de Iván\nAtimarte, un nuevo escritor pródigo español.'});
    dLibreriaZar.push({texto: 'Seguro que le interesa, se lo envuelvo\nen un instante.'});
    dLibreriaZar.push({texto: 'Al freír será el reír…',
      personaje: 'Latino', jump: 8});
    dLibreriaZar.push({texto: '… ¿Qué? ¿Están ustedes enfadados conmigo\npor alguna razón?',personaje:'Zaratustra'});
    dLibreriaZar.push({texto: 'Así es, Zaratustra. Has vendido los libros de Max\na un precio fatídico. Exigimos que nos devuelvas\nlos libros que tan mal has tratado.',
      personaje: 'Latino'});
    dLibreriaZar.push({texto: 'Disculpen mi ostentación, pero no tengo ni\nidea de qué están hablando',
      personaje: 'Zaratustra'});
    dLibreriaZar.push({texto: 'A otro perro con ese hueso, Zaratustra.\nDános lo que nos es debido.',
      personaje: 'Latino'});
    dLibreriaZar.push({texto: 'Ugh… Con las manos en la masa, ¿eh?\nLamentablemente, soy incapaz de devolverles sus libros.',
      personaje: 'Zaratustra'});
    dLibreriaZar.push({texto: 'Ya han sido comprados por otro de mis clientes.'});
    dLibreriaZar.push({texto: '¿¡Qué!? ¿Cómo has po-', personaje: 'Latino'});
    dLibreriaZar.push({texto: '¡Espera Max no salgas corriendo!'});

    //Casa 2 sin paga
    let dCasa2spMadam = [];
    dCasa2spMadam.push({texto: '¿Max? ¿Qué haces por aquí de nuevo?'}); 
    dCasa2spMadam.push({texto: 'Vengo del ministerio, he vuelto \npor un dolor de cabeza que me ha dado de repente.\n¿Tienes algo para calmarlo?'});
    dCasa2spMadam.push({texto: 'Claro, espera aquí.\nPor cierto, ¿qué hacías en el ministerio?'});
    dCasa2spMadam.push({texto: 'Estaba hablando con el Gobernante y\nle iba a pedir… ¿que era?,\n¡Ah sí! una ayuda debido a mi situación.'}); 
    dCasa2spMadam.push({texto: 'Muy buena idea, a ver si te la concede ya que\neráis conocidos en vuestros tiempos mozos.'});
    dCasa2spMadam.push({texto: '¿Qué responde Max?',
      answer: [{texto: 'Pensándolo mejor, creo que no necesitamos ninguna ayuda.', points: 0, life: -5, jump: 0, razon:'que has actuado\ncomo un insensato'},
              {texto: 'Claro, como no he caído.', points: 0, life: 5, jump: 1, razon:'que has sido\ncoherente'},
               {texto: 'Solo piensas en el dinero...', points: 0, life: -5, jump: 2,razon:'que te has vuelto\nloco'}]});
               dCasa2spMadam.push({texto: 'De ningún modo, ve allí a pedirla.',jump: 2});
               dCasa2spMadam.push({texto: 'Bien dicho, hablale desde el sosiego.',jump: 1});
               dCasa2spMadam.push({texto: '¿Estás loco? No tenemos ni una perra, ve allí corriendo.'});

    //Casa 2 con paga
    let dCasa2cpMadam = [];
    dCasa2cpMadam.push({texto: '¿Max? ¿Qué haces por aquí de nuevo?'}); 
    dCasa2cpMadam.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Traigo buenas noticias', points: 0, life: 5, jump: 0,razon:'traer esperanza'},
            {texto: 'Tan solo venía a vaciar el tanque, ¡voy al baño!', points: 0, life: 0, jump: 5},
            {texto: 'Venía de paso y se me ocurrió saludarte', points: 0, life: 0, jump: 16,razon:'que te has vuelto\nloco'}]});
             dCasa2cpMadam.push({texto: 'Bueno pues cuenta, cuenta, que ya hacían falta.'});
             dCasa2cpMadam.push({texto: 'Vengo de hablar con el Gobernante, le he pedido\nuna ayuda económica debido a mi situación\ny... ¡ha aceptado!'});
             dCasa2cpMadam.push({texto: '¡Qué alegría Max, al fin vemos la luz al final del túnel!'});
             dCasa2cpMadam.push({texto: '¿Pero estás seguro que te pagará y no es tan solo\npalabrería? ¿Te ha dado un escrito o algo?'});
             dCasa2cpMadam.push({texto: 'Tienes razón, ¡qué haría sin ti!, voy de inmediato\na hablar con él.',jump: 14});
             dCasa2cpMadam.push({texto: 'Mira que me extraña, ¿no tienes nada que contarme?'});
            dCasa2cpMadam.push({texto: '¿Qué responde Max?',
             answer: [{texto: 'En realidad sí', points: 0, life: 3, jump: 0,razon:'traer esperanza'},
                     {texto: 'No', points: 0, life: 0, jump: 5},
                     {texto: '...', points: 0, life: 0, jump: 7}]});
              dCasa2cpMadam.push({texto: 'Bueno, pues cuéntame.'});
              dCasa2cpMadam.push({texto: 'He estado en el ministerio y he conseguido\nuna paga por mi discapacidad.'});
              dCasa2cpMadam.push({texto: '¡Qué alegría Max, al fin vemos la luz al final del túnel!'});
             dCasa2cpMadam.push({texto: '¿Pero estás seguro que te pagará y no es tan solo\npalabrería? ¿Te ha dado un escrito o algo?'});
             dCasa2cpMadam.push({texto: 'Tienes razón, ¡qué haría sin ti!, voy de inmediato\na hablar con él.',jump: 7});
             dCasa2cpMadam.push({texto: 'Bueno pues ve al baño.'});
             dCasa2cpMadam.push({texto: 'Acabo de recordar que he olvidado algo, adiós.',jump:5});
             dCasa2cpMadam.push({texto: '...'});
             dCasa2cpMadam.push({texto: 'Acabo de recordar que he olvidado algo, adiós.',jump: 3});
             dCasa2cpMadam.push({texto: 'Tú y tus ocurrencias Max… \nNo gastes mucho que estamos tiesos, ya lo sabes.'});
             dCasa2cpMadam.push({texto: 'Tranquila, tengo algo entre manos que nos hará recobrar\nla vitalidad que necesitamos, pero ahora que \nme acuerdo necesito volver de donde vengo.'});
             dCasa2cpMadam.push({texto: '¿A qué te refieres? ¡Max, vuelve!'});


    //Ministerios3 desde Calabozo
    let dMinis3calabozoGober = [];
    dMinis3calabozoGober.push({texto: '¡Cómo podéis tratar a un viejo de estas formas!\n¿No os da vergüenza?'});
    dMinis3calabozoGober.push({texto: '¡Eh eh! ¿Qué es este alboroto?'});
    dMinis3calabozoGober.push({texto: '¿Y tú quién eres? quiero hablar con el Gobernante,\n¡este no es el trato que merezco!'});
    dMinis3calabozoGober.push({texto: 'Yo soy el Gobernante, cuéntame ¿qué ha ocurrido?'});
    dMinis3calabozoGober.push({texto: 'Con que es usted eh, quiero denunciar el abuso \nde sus trabajadores ahora mismo.'});
    dMinis3calabozoGober.push({texto: '¿Pero qué ha ocurrido?'});
    dMinis3calabozoGober.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Eso no importa, déjeme denunciarlo', points: 0, life: -2, jump: 0, razon:'ser cabezón'},
            {texto: 'Le explico', points: 0, life: 2, jump: 4,razon:'ser coherente'},
            {texto: 'Ayúdeme y déjese de hablar', points: 0, life: -2, jump: 6,razon:'ser impaciente'}]});
            dMinis3calabozoGober.push({texto: 'Igualmente, si quiere denunciarlo debe \nexplicarle lo sucedido.'});
            dMinis3calabozoGober.push({texto: 'Está bien…'});
            dMinis3calabozoGober.push({texto: 'Esos muchachos del calabozo no tienen compasión ni \nbuenos tratos con los pobres que viven aprisionados \npor el sistema y que no levantan cabeza, míreme a mí.'});
            dMinis3calabozoGober.push({texto: 'Hace años hay ayudas para personas como usted.',jump: 5});

            dMinis3calabozoGober.push({texto: 'Tan solo estaba en la taberna ahogando mis penas \ny mira donde he acabado en el calabozo y sin apenas \nun duro, toda una vida siendo pobre que va a llegar \na su fin en la mayor de las decadencias posibles…'});
            dMinis3calabozoGober.push({texto: 'Oiga oiga yo le puedo ayudar con eso, no \nse preocupe.',jump:3});

            dMinis3calabozoGober.push({texto: 'Tendré que saber cómo puedo ayudarle ¿no cree?'});
            dMinis3calabozoGober.push({texto: 'Tiene razón, pero viéndome ya se puede \nhacer una idea que mi mayor problema es \nla falta de recursos.'});
            dMinis3calabozoGober.push({texto: 'Está en el lugar indicado, le puedo ayudar \ncon eso, no se preocupe.'});
            
            dMinis3calabozoGober.push({texto: 'Hábleme más sobre eso.'});
            dMinis3calabozoGober.push({texto: 'Se trata de una ayuda que ofrecemos a personas con \ndiscapacidad para mejorar su vida. \nUna paga que se pasará a su cuenta desde la nuestra \nsin ningún problema.'});
            dMinis3calabozoGober.push({texto: '¿Qué significa ese “nuestra”?'});
            dMinis3calabozoGober.push({texto: 'Nada, nada, una cuenta que tenemos nosotros \npara nuestros gastos comunes ya sabe.'});
           
            dMinis3calabozoGober.push({texto: '¿Qué responde Max?',
             answer: [{texto: 'De ningún modo aceptaré dinero corrupto', points: 0, life: -1, jump: 0, razon:'ser racional\npero pierdes la paga'},
                     {texto: '¿De qué cantidad estamos hablando?', points: 0, life: 5, jump: 2, razon:'obtener la paga'},
                     {texto: 'Entiendo, entiendo', points: 0, life: 5, jump: 4,razon:'obtener la paga'}]});
                     dMinis3calabozoGober.push({texto: 'Esa es la única opción que te puedo ofrecer Max.'});
                     dMinis3calabozoGober.push({texto: 'Me las apañaré como sea, no quiero ser un corrupto \ncomo vosotros.',jump: 4});
                     dMinis3calabozoGober.push({texto: 'Sería una paga vitalicia suficiente para cubrir gastos \nbásicos.'});
                     dMinis3calabozoGober.push({texto: 'Me sería de gran ayuda, muchas gracias se lo agradezco.',jump: 2});
                     dMinis3calabozoGober.push({texto: 'Pues eso sería todo en unos días le notificaremos\npara hablar de trámites.'});
                     dMinis3calabozoGober.push({texto: 'Muchas gracias por todo.'});
//Ministerios3 desde Casa 2
    let dMinis3casaGober = [];
          dMinis3casaGober.push({texto: 'Buenas, he estado aquí hace un rato preguntando por\nel Gobernante.'});
          dMinis3casaGober.push({texto: 'En efecto, me acuerdo de usted, como dije antes soy \nquien buscas.'});
          dMinis3casaGober.push({texto: 'Oh genial! Quería hablar más sobre el tema de la \nayuda económica, lo he hablado con mi mujer y nos \nvendría muy bien recibirla.'});
          dMinis3casaGober.push({texto: '¿A-ayuda económica?'});
          dMinis3casaGober.push({texto: '¿Qué responde Max?',
          answer: [{texto: '¿Acaso no has dicho que te acordabas de mí?', points: 0, life: -3, jump: 0, razon:'ser borde'},
                  {texto: 'Sí, se lo recuerdo si quiere', points: 0, life: 5, jump: 3,razon:'ser paciente'},
                  {texto: 'No creo que sea tan difícil de entender.', points: 0, life: -7, jump: 6,razon:'que te has vuelto\nloco'}]});
                  dMinis3casaGober.push({texto: 'Perdone no me acordaba, venía por lo de su \ndiscapacidad ¿verdad?'});
                  dMinis3casaGober.push({texto: '¿Qué responde Max?',
          answer: [{texto: 'Si', points: 0, life: 0, jump: 0},
                  {texto: 'En efecto', points: 0, life: 0, jump: 0},
                  {texto: 'No hay más que verme.', points: 0, life: -2, jump: 0,razon:'autodespreciarte'}]});
                  dMinis3casaGober.push({texto: 'Vale, enseguida busco que le puedo ofrecer.',jump: 6});
      
                  dMinis3casaGober.push({texto: 'Si no le importa, se lo agradecería.'});
                  dMinis3casaGober.push({texto: 'Llevo arrastrando esta discapacidad varios años\ny no me ayuda a encontrar trabajo ni a hacer más fácil \nmi vida ni la de mis seres queridos, por ello vengo \naquí a ver si el Estado podría ofrecer algo a este \nviejo apenado.'});
                  dMinis3casaGober.push({texto: 'Entiendo, veré que puedo hacer por usted.',jump: 3});
      
                  dMinis3casaGober.push({texto: 'Bueno no se ponga así señor, entiendo que tiene algo \nque ver con su discapacidad, ¿no es así?'});
                  dMinis3casaGober.push({texto: '¿Qué responde Max?',
      
          answer: [{texto: 'Si', points: 0, life: 0, jump: 0},
                  {texto: 'En efecto', points: 0, life: 0, jump: 5},
                  {texto: 'No hay más que verme.', points: 0, life: -2, jump: 0,razon:'autodespreciarte'}]});
                  dMinis3casaGober.push({texto: 'Vale, enseguida busco que le puedo ofrecer.'});
      
                  dMinis3casaGober.push({texto: '...'});
                  dMinis3casaGober.push({texto: '...'});            
                  
                
                  dMinis3casaGober.push({texto: '...',
                  answer: [{texto: 'Recordarle que te de un escrito', points: 0, life: 2, jump: 0,razon:'ser coherente'},
                          {texto: 'Seguir esperando', points: 0, life: 0, jump: 2},
                          {texto: 'Meterle prisa', points: 0, life: -2, jump: 3,razon:'ser impaciente'}]});
                  dMinis3casaGober.push({texto: ' En el caso de que hubiera algo para mí\n¿me podría dar un escrito?, mi mujer me ha insistido \nen ello.'});
                  dMinis3casaGober.push({texto: 'Claro, no hay problema en ello.',jump: 3});
                  dMinis3casaGober.push({texto: '...',jump: 2});
                  dMinis3casaGober.push({texto: 'Venga hombre si es buscar dos papeles, como puede \nesmerarse tanto.'});
                  dMinis3casaGober.push({texto: '¡Ya va, ya va! que poca calma tienen algunos.'});
      
                  dMinis3casaGober.push({texto: 'Vale veo que en esta cuenta podríamos desplazar\nun dinero para usted.'});           
                  dMinis3casaGober.push({texto: '¿Qué significa "esta cuenta"?'});
                  dMinis3casaGober.push({texto: 'Nada, nada, una cuenta que tenemos nosotros para\nnuestros gastos comunes ya sabe.'});
                  dMinis3casaGober.push({texto: '...',
                  answer: [{texto: 'De ningún modo aceptaré dinero corrupto', points: 0, life: -1, jump: 0, razon:'ser racional\npero pierdes la paga'},
                          {texto: '¿De qué cantidad estamos hablando?', points: 0, life: 5, jump: 2, razon:'obtener la paga'},
                          {texto: 'Entiendo, entiendo', points: 0, life: 5, jump: 4,razon:'obtener la paga'}]});
                          dMinis3casaGober.push({texto: 'Esa es la única opción que te puedo ofrecer Max.'});
                          dMinis3casaGober.push({texto: 'Me las apañaré como sea, no quiero ser un corrupto \ncomo vosotros.',jump: 4});
                          dMinis3casaGober.push({texto: 'Sería una paga vitalicia suficiente para cubrir gastos \nbásicos.'});
                          dMinis3casaGober.push({texto: 'Me sería de gran ayuda, muchas gracias se lo agradezco.',jump: 2});
                          dMinis3casaGober.push({texto: 'Pues eso sería todo en unos días le notificaremos\npara hablar de trámites.'});
                          dMinis3casaGober.push({texto: 'Muchas gracias por todo.'});



    //Bares(para comprar loteria)
    let dBares = [];
    dBares.push({texto: 'Buenas, ¿le gustaría comprar algo de lotería\npor 5 ptos de vida?',
      answer: [{texto: 'Claro, ha eso he venido.', points: 1, life: -5, jump: 0, razon:'gastar el poco dinero\nque tienes.'},
               {texto: 'No, gracias creía que me ofrecerías otra cosa', points: 0, life: 0, jump: 0},
               {texto: 'Me he confundido de garito', points: 0, life: 0, jump: 0}]});    
    dBares.push({texto: 'Vale, espero verte pronto'});


    const d = {
      //Casa 1
      mcCasa1: dCasa1MC,
      mcCasa2sp: dCasa2spMadam,
      mcCasa2cp: dCasa2cpMadam,
      latCasa1: dCasa1Lat,
      gafasCasa1: dCasa1Gafas,
      gafasDCasa1: dCasa1GafasD,

      //Libreria
      zarLibreria: dLibreriaZar,

      //Bares
      bares: dBares,

      //Ministerio 3
      goberMinis3Casa: dMinis3casaGober,
      goberMinis3Calabozo: dMinis3calabozoGober
      }
 
    export default d;