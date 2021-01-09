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
      answer: [{texto: 'Sí, estoy seguro. Anhelo leerlo.', points: 0, life: -5, jump: 0, razon:'no puede leer\n y ha gastado parte de su dinero.'},
               {texto: 'No. No lo quiero. ¡Vayámonos de aquí Don Latino!', points: 0, life: 2, jump: 2, razon: 'no han podido engañarle\n y han perdido el tiempo.'},
               {texto: '¿Me recomienda algún libro?', points: 0, life: -7, jump: 3,razon:'te han timado\n vendiendote un libro'}]});
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

    //Bares(para comprar loteria)
    let dBares = [];
    dBares.push({texto: 'Buenas, ¿le gustaría comprar algo de lotería\npor 5 ptos de vida?',
      answer: [{texto: 'Claro, ha eso he venido.', points: 1, life: -5, jump: 0, razon:'gastar el poco dinero\nque tienes.'},
               {texto: 'No, gracias creía que me ofrecerías otra cosa', points: 0, life: 0, jump: 0},
               {texto: 'Me he confundido de garito', points: 0, life: 0, jump: 0}]});    
    dBares.push({texto: 'Vale, espero verte pronto'});


    const d = {
      //Casa1
      mcCasa1: dCasa1MC,
      latCasa1: dCasa1Lat,
      gafasCasa1: dCasa1Gafas,
      gafasDCasa1: dCasa1GafasD,

      //Libreria
      zarLibreria: dLibreriaZar,

      //Bares
      bares: dBares

      }
 
    export default d;