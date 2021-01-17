// CASA1  ------------------------------------------------------
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


    // CALLE1  ------------------------------------------------------
    let calle1 = [];
    calle1.push({texto: 'Ah… la agradable brisa nocturna de las calles de Madrid. \n¿Ya te encuentras mejor, Max?'});
    calle1.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Sí, me ha venido bien un poco de aire fresco.', points: 10, life: 0, jump: 0},
             {texto: 'Estoy igual de alterado. Creo que es evidente.', points: 10, life: 0, jump: 0},
             {texto: '*no dice nada*', points: 10, life: 0, jump: 5}]});
    calle1.push({texto: '¡¡¡VIVA ESPAÑA!!! ¡UNA, GRANDE Y LIBRE!', personaje: 'Peregrino'});
    calle1.push({texto: '¿Qué…? ¡Pero si no es mi gran amigo Don Gay Peregrino! \n¿No estabas en Londres?', personaje: 'Latino'});
    calle1.push({texto: 'Así es, más bien he vuelto aquí de asueto. Volveré a \nInglaterra en unos días.', personaje: 'Peregrino'});
    calle1.push({texto: ' ¿Qué responde Max?',
    answer: [{texto: '¿Ha estado usted en Inglaterra?', points: 0, life: 0, jump: 0},
             {texto: '¿Por qué ha vuelto?', points: 0, life: 0, jump: 6},
             {texto: 'Siempre he querido probar comida inglesa...', points: 0, life: 0, jump: 11}]});
    calle1.push({texto: '¡Así es! Formo parte de la brigada española que \nejerce en Inglaterra.'});
    calle1.push({texto: ' ¿Qué responde Max?',
    answer: [{texto: '¿No echa de menos los paisajes españoles?', points: 0, life: 0, jump: 0},
             {texto: '¿Cómo puede irse a vivir tan lejos?', points: 0, life: 0, jump: 0},
             {texto: '*se le queda mirando*', points: 0, life: 0, jump: 5}]});
    calle1.push({texto: 'Jajajaja… llevo muchos años viviendo en Inglaterra ya, \nhe acabado cogiéndole gusto. Y, aunque viva lejos, estoy \n sirviéndole a mi patria.'});
    calle1.push({texto: '¿Y cuánto tiempo te quedas? Max y yo ahora íbamos de \n camino a la taberna, ¿quieres venir?', personaje: 'Latino'});
    calle1.push({texto: 'Me temo que eso no será posible… Una de las facetas más \nimportantes en la vida del hombre es el matrimonio, y \n he de atender a mi esposa ahora.', personaje: 'DonGayPeregrino'});
    calle1.push({texto: 'Vaya, hombre… qué pifia de mozo. Vámonos, Max.', personaje: 'Latino', jump: 10});
    calle1.push({texto: 'He venido a ver a mi mujer, que hace meses que la tengo\ndesatendida.', personaje: 'Peregrino'});
    calle1.push({texto: '¿Y cuánto tiempo te quedas? Max y yo ahora íbamos de\ncamino a la taberna, ¿quieres venir?', personaje: 'Latino'});
    calle1.push({texto: 'Me temo que eso no será posible… Una de las facetas más \nimportantes en la vida del hombre es el matrimonio, y \n he de atender a mi esposa ahora.', personaje: 'Peregrino'});
    calle1.push({texto: 'Vaya, hombre… qué pifia de mozo. Vámonos, Max.', personaje: 'Latino', jump: 6});
    calle1.push({texto: 'La comida inglesa, en comparación con la española, no \nes más que bazofia. Hazme caso, disfrutas mucho más aquí.',personaje: 'Peregrino'});
    calle1.push({texto: '[Tampoco es que pruebe mucha comida aquí...]'});
    calle1.push({texto: '¿Y cuánto tiempo te quedas? Max y yo ahora íbamos de camino a la taberna, ¿quieres venir?', personaje: 'Latino'});
    calle1.push({texto: 'Me temo que eso no será posible… Una de las facetas más \nimportantes en la vida del hombre es el matrimonio, y \n he de atender a mi esposa ahora.', personaje: 'Peregrino'});
    calle1.push({texto: 'Vaya, hombre… qué pifia de mozo. Vámonos, Max.', personaje: 'Latino'});
    calle1.push({texto: 'Ya veo...'});
     

    // LIBRERIA  ------------------------------------------------------
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

    // TABERNA2  ------------------------------------------------------
    let taberna2 = [];
    taberna2.push({texto:'MeNuDo rrraSpaMoNNedas ell ZzarattuSstra esSe… Yy \npPensarrr qque *hip* sSse ha sSalido cCon la sSuya aúnNn asSsí… *hip*'});
    taberna2.push({texto:'¿Qué responde Max?',
    answer:[
         {texto:'No merece que se le mencione ahora que estamos divirtiéndonos. ', points: 10, life: 0, jump: 0,},
         {texto:'No sé qué hacer sin la compensación económica que me debía, pero es mejor olvidarle.', points: 10, life: 0, jump: 0},
         {texto:'¡¡¡NO DESESPERE!!! lA noCCHe esStá paRra ahohgHgar laSs pPenasSs.', points: 10, life: 0, jump: 0}]});
    taberna2.push({texto:'TiennneSs raZzón, MaXx. ESstToy connTtenNto dde tenneRr \nunn amMiggo comMo tTú.'});
    taberna2.push({texto:'¡Oye! Tú eres el Max Estrella, ¿verdad?', personaje: 'La Pisa Bien', aparecera:true});
    taberna2.push({texto:'¿Qué responde Max?',
  answer: [{texto:'Sí, soy yo. ¿qQuÉ ppASa?', points: 0, life: 0, jump: 0},
            {texto:'No lo tengo muy claro.', points: 0, life: 0, jump: 0},
            {texto:'*la ignora* Aldonza, Aldonza… quiero tu amor, \nquiero tu amor, yo quiero, Aldonza, tu amor…', points: 0, life: 0, jump: 0,}]});
    taberna2.push({texto:'¿Me estás vacilando, badulaque? ¿Has cogido tú el \nboleto del décimo sin pagarlo? ¡Desembucha y dame lo \nque es mío!', personaje: 'La Pisa Bien'});
    taberna2.push({texto:'¿Qué responde Max?',
    answer: [
          {texto:'Ssí, he siDdo yo el qQkue lo hHa coggidDo, Ppero nNo voy a soltar uNna pPessetTTa.', points: 0, life: +5, jump: 0},
          {texto:'No, se está equivocando usted.', points: 0, life: +10, jump: 0, razon:'No se ha dejado engañar \ny ha sido racional.'},
          {texto:'Así es, se me ha olvidado por completo pagarle. ¿Puedo?', points: 0, life: -7, jump: 1, razon:'Se ha dejado engañar por \nLa Pisa Bien.'}]});
    taberna2.push({texto:'Ugh… me las pagarás, necio.', personaje:'La Pisa Bien', jump: 1});
    taberna2.push({texto:'Oh… claro, debe haber sido un malentendido. ¡Muchas gracias!', personaje:'La Pisa Bien'});
    taberna2.push({texto:'Qué zzagala tan rarra… *hip* En ffin, ¿has vissto a los \nque estánn disscutiendo ffuera? LosS pPolítticKoss…\ncommo ssieMpre...', personaje: 'Latino'});
    taberna2.push({texto:'¿Qué responde Max?',
  answer: [
    {texto:'¡¡Quiero unirme a ellos!!', points: 0, life: 0, jump: 0},
    {texto:'Sí, mejor que nos vayamos. ', points: 0, life: 0, jump: 0},
    {texto:'No he oído nada…', points: 0, life: 0, jump: 0}
  ]});
    taberna2.push({texto:'Sí, será mejjor qQue noSs vayYamoss...'});

    // MINISTERIO1  ------------------------------------------------------
    let ministerio1 = [];
    ministerio1.push({texto:'¿Qué os trae por aquí?'});
    ministerio1.push({texto:'¿Qué responde Max?',
    answer: [
     {texto:'No estoy embriagado...', points: 0, life: 0, jump: 0},
     {texto:'Venía para consultar un asunto con el gobernante.', points: 0, life: 0, jump: 0},
     {texto:'...', points: 0, life: 0, jump: 0}
  ]})
    ministerio1.push({texto:'Ya veo... yo soy el gobernante, ¿me podría decir \nen qué necesita asistencia, de necesitarla?'});
    ministerio1.push({texto:'¿Qué responde Max?',
    answer: [
     {texto:'Como podrá usted ver… soy ciego, y estoy en una situación económica complicada \npor lo que me preguntaba si podría recibir ayudas del Estado.', points: 0, life: 0, jump: 1},
     {texto:'¡¡¡AAAAAAAAAAAAAAAHHHHH!!! ¿¿Por qué está hablándome tan alto?? \nNo lo soporto… *se abalanza*', points: 0, life: -10, jump: 0, razon:'Se ha vuelto loco y va al \ncalabozo.'},
     {texto:'...', points: 0, life: -10, jump: 0, razon:'Ha vacilado al Gobernante y \nva al calabozo.'}
  ]})
    ministerio1.push({texto:'¿Esas se trae usted? ¿¡Se cree que me estoy haciendo \nel primo!? Va a pasar un tiempo en el calabozo, buen \nseñor, hasta que se olvide de cómo volver a coger una \nturca.', jump: 7});
    ministerio1.push({texto:'Verá, el Estado dedica cierto numerario hacia la \ngente que posee discapacidades, tales como la vuestra. \n¿Está usted realmente necesitado de la subvención que \nel Estado pueda proporcionarle?  '});
    ministerio1.push({texto:'¿Qué responde Max?',
    answer: [
     {texto:'De otro modo, no tengo ni idea de cómo mantener a mi familia…', points: 0, life: +10, jump: 2, razon:'Acepta la \n ayuda del gobierno.'},
     {texto:'¿No me ha escuchado? ¡¿HE SIDO POCO CLARO?!', points: 0, life: -10, jump: 1, razon:'Se ha vuelto \n loco.'},
     {texto:'¿Qué? Me duele un poco la cabeza, me retiraré, si no es molestia…', points: 10, life: 0, jump: 0}
]});
     ministerio1.push({texto:'Oh… como usted vea. Qué buen vasallo \nsi tuviera buen señor…', jump: 4});
     ministerio1.push({texto:'¿Cómo dice? … He intentado tranquilizarle pero sigue \nusted igual de violento.', jump: 3});
     ministerio1.push({texto:'De acuerdo. Si es de vuestro agrado, procedemos \na hablar acerca de las tramitaciones necesarias…'});
     ministerio1.push({texto:'Perfecto, pero discúlpeme, tengo que ir a casa un \nmomento.'});
     ministerio1.push({texto:'¿Qué? ¡Espere!'});

    // MINISTERIO2 ------------------------------------------------------
    let dMinisterio2 = [];
    dMinisterio2.push({texto:'Aquí traigo al susodicho. Se encontraba con un civil \nmás, pero ya he tratado con él.', personaje: 'Oficial'});
    dMinisterio2.push({texto:'¿Qué responde Max?', 
    answer:[
      {texto:'Yo no he hecho nada, soy completamente inocente.', points: 0, life: 0, jump: 0},
      {texto:'¿Por qué estoy aquí?¿Por tomarme un par de cervezas? ', points: 0, life: 0, jump: 2},
      {texto:'...', points: 0, life: 0, jump: 2}
    ]});
    dMinisterio2.push({texto:'Eso lo decidiremos aquí hoy, que para eso ha venido \nusted aquí. '});
    dMinisterio2.push({texto:'¿Qué he hecho? '});
    dMinisterio2.push({texto:'Usted ha infrigido las normas civiles: estaba causando \ndisturbios en las vías públicas de la ciudad mientras \ngritaba y bebía.'});
    dMinisterio2.push({texto:'¿Qué responde Max?', 
    answer:[
      {texto:'¡Venga ya! No es nada tan desproporcionado.', points: 0, life: 0, jump: 0},
      {texto:'¿Seguro que no está imaginándose cosas, oficial?', points: 0, life: 0, jump: 0},
      {texto:'¡¡¡NUNCA ME COGERÉIS!!!', points: 0, life: -3, jump: 2, razon:'vacilar al oficial.'}
    ]});
    dMinisterio2.push({texto:'¡Se acabó! He tenido suficiente de esta cháchara. Como \nno se comporte, va a pasar un tiempo en el calabozo.'});
    dMinisterio2.push({texto:'¿Qué responde Max?', 
    answer:[
      {texto:'Eso es lo que usted se cree.', points: 0, life: 0, jump: 0},
      {texto:'No sé de que está hablando.', points: 0, life: 0, jump: 0},
      {texto:'¿Cuánto es “un tiempo”?', points: 0, life: 0, jump: 0}
    ]});
    dMinisterio2.push({texto:'¡HA SIDO SUFICIENTE! Venga conmigo, que va directo al \nboquete.'});

    // BUÑOLERÍA ------------------------------------------------------
    let dBunyoleria = [];
    dBunyoleria.push({texto:'*hip* Ya hemos llegado, Max… está al otro costado de la \ncallejuela, pero ha parecido eterno. Mucha bula \ntienen los jóvenes que aguantan estos vapuleos...'});
    dBunyoleria.push({texto:'¿Qué responde Max?',
    answer:[
       {texto:'*hip* ... *hip*', points:0, life:0, jump:0},
       {texto:'Opino igual… oiga, ¿no huele mucho como a papel en esta buñolería?', points:0, life:0, jump:0},
       {texto:'De acto, creo que no me encuentro bien… Siento como si fuera a go-', points:20, life:0, jump:16}
  ]});
    dBunyoleria.push({texto:'Hm… parece haber aquí yertos unos cuántos libros. A ver… \n*se coloca las gafas*'})<
    dBunyoleria.push({texto:'Según pone aquí, son de unos autores modernistas de la \népoca. ¿Te interesa que lea alguno, Max?'});
    dBunyoleria.push({texto:'¿Qué responde Max?',
    answer:[
       {texto:'¿Modernistas? Nunca me han gustado… Se creen unos iluminados.', points:0, life:0, jump:1},
       {texto:'Me encantaría, de hecho. Si es tan amable.', points:0, life:0, jump:1},
       {texto:'Igual deberíamos irnos de aquí, Don Latino. No tengo buen barrunto. ', points:0, life:0, jump:0}
  ]});
    dBunyoleria.push({texto:'¿Qué dices, hombre? No seas así. Vamos a quedarnos para ver si hay algo de interés.'});
    dBunyoleria.push({texto:'Vamos a ver qué hay por aquí… “Un menesteroso escritor”. \nEste parece interesante. '});
    dBunyoleria.push({texto:'“Esta es la historia de Xam, un escritor que pasaba sus \ntiempos rumiando acerca de la naturaleza. Nunca tuvo \nmucho, fue más bien pobre, y murió siendo un mero \ngranjero sin que nadie le conociera”'});
    dBunyoleria.push({texto:'¿Qué piensa Max?',
    answer:[
       {texto:'Siento que su vida fue mala porque nadie le conoció.', points:0, life:-2, jump:0, razon: 'Max Estrella no pensaría \nlo mismo.'},
       {texto:'Siento que su vida fue buena porque hacía lo que le gustaba.', points:0, life:+2, jump:0, razon: 'Max Estrella pensaría lo \nmismo.'},
       {texto:'Siento que su vida fue mala porque no tenía dinero.', points:0, life:0, jump:0}
  ]});
    dBunyoleria.push({texto:'Bastante soporífero. Veamos el siguiente: “Tres, y la \nbohemia”.'});
    dBunyoleria.push({texto:'“El escritor eclipsado por las nuevas corrientes que \naparecieron en el mundo, Tres. Lo único que Tres \nvaloraba era la antigua manera de ver el mundo, y la \nbelleza que eso conllevaba. Para Tres, sus dos mundos \ncolacionaban”'});

    dBunyoleria.push({texto:'¿Qué piensa Max?',
    answer:[
       {texto:'Tiene dos mundos: el que vive, y el que percibe. No es muy ajeno a mí', points:0, life:+2, jump:0, razon: 'Max Estrella pensaría lo mismo.'},
       {texto:'Es mucho más importante el mundo que percibe uno*', points:0, life:0, jump:0},
       {texto:'*¿Hay por qué valorar la antigua manera de ver el mundo?*', points:0, life:-2, jump:0, razon: 'Max Estrella no pensaría lo mismo.'}
  ]});
    dBunyoleria.push({texto:'¿Hmm? Veo que no te están interesando mucho los libros, \nMax. Tienes razón, son bastante aburridos. Vámonos de \naquí.'});
    dBunyoleria.push({texto:'Buenas noches. ¿Hay aquí alguien llamado Max Estrella?', personaje: 'Oficial'});
    dBunyoleria.push({texto:'Sí, soy yo. ¿Qué ocurre?'});
    dBunyoleria.push({texto:'Ha sido usted acusado de robar los décimos de una \nciudadana conocida por el pseudónimo de La Pisa Bien. \nVenga conmigo a los ministerios.'});
    dBunyoleria.push({texto:'¿Qué?'});
    dBunyoleria.push({texto:'Esa demonche nos ha querido traer la ruina…', personaje: 'Latino', jump: 3});
    dBunyoleria.push({texto:'¿¡Gormar!? Max, no puedes echar la primera papilla aquí, \ntenemos que ir rápido al aseo.'});
    dBunyoleria.push({texto:'*EL BUÑOLERO:* Aquí no hay aseo, buen hombre.'});
    dBunyoleria.push({texto:'¿Qué? Oh, no… Max, ¡vamos fuera!'});

    // CALLE CUANDO SALE A LA CALLE A VOMITAR ------------------------------------------------------
    let dBenyota = [];
    dBenyota.push({texto:'*vomitando en el suelo* Ugh… no me ha sentado nada \nbien el beodo de antes…'});
    dBenyota.push({texto:'Y que lo digas… '});
    dBenyota.push({texto:'¡Pardiez! Lo que faltaba para ponernos en un brete… \nBuenas noches, oficial.'});
    dBenyota.push({texto:'Buenas noches. Aunque no lo parecen para vuestro amigo \nahí detrás. ¿Le intenta esconder o algo?',personaje: 'Oficial'});
    dBenyota.push({texto:'¿Quién, yo? ¡De ningún modo! No sería amigo del que es \nla caraba en esta situación tan desagradable.'});
    dBenyota.push({texto:'¿Qué responde Max?', 
    answer: [
       {texto:'Don Latino, ¿de qué habla usted? Si somos amigos desde antes de que perdiera la vista…', points: 0, life: 0, jump: 0},
       {texto:'*brrruuughhh*', points: 0, life: -3, jump: 2, razon: 'no parar de vomitar.'},
       {texto:'¿Usted es un oficial? Le dan el calificativo a cualquier persona hoy en día...', points: 0, life: -7, jump: 2, razon: 'vacilar al oficial.'}
  ]});
    dBenyota.push({texto:'Conque pretendía usted tener bula para aprovecharse de \nsu amigo invidente y salir con el rabo entre las \npiernas, ¿eh? ', personaje: 'Oficial'});
    dBenyota.push({texto:'Al ministerio conmigo, los dos.', jump: 1});
    dBenyota.push({texto:'Se acabó. Venga usted conmigo de inmediato al \nministerio.'});
    
    // CALABOZO ------------------------------------------------------
    let dCalabozo = [];
    dCalabozo.push({texto:'Ya he tratado con su amigo, usted, Max Estrella, pasará \nla noche aquí, en la celda de Mateo.', personaje: 'Oficial'});
    dCalabozo.push({texto:'¿Alguien nuevo? Genial…', personaje: 'Mateo'});
    dCalabozo.push({texto:'¿Qué responde Max?',
    answer: [
     {texto:'Buenas noches, don Mateo. Mi nombre es Max Estrella.', points: 0, life: 0, jump: 0},
     {texto:'…¿Qué he hecho?¿Cómo he podido acabar aquí?', points: 0, life: 0, jump: 0},
     {texto:'...', points: 0, life: 0, jump: 0}
  ]});
    dCalabozo.push({texto:'Encantado de conocerle, Max. No pase pena, las noches \nse pasan rápido aquí.'});
    dCalabozo.push({texto:'¿Cómo es que usted está aquí, don Mateo? No parece del \ntipo que delinquen.'});
    dCalabozo.push({texto:'De hecho, no he cometido ningún delito. Soy un obrero, \ny mis compañeros y yo participamos en una huelga debida \na las execrables condiciones en las que trabajamos para \nel Estado.'});
    dCalabozo.push({texto:'No se garantiza nuestra seguridad en ningún momento, \nlas facilidades están en un estado sórdido, trabajamos \njornada completa y cobramos menos del mínimo…'});
    
    dCalabozo.push({texto:'¿Qué responde Max?',
    answer: [
      {texto:'...', points: 0, life: 0, jump: 0},
      {texto:'Pero… ¿por qué le han detenido?¿No es una huelga por sus derechos?', points: 0, life: 0, jump: 2},
      {texto:'Entonces, ¿le dejarán salir, verdad? No ha cometido ningún delito.', points: 0, life: 0, jump: 2}
        ]});

    dCalabozo.push({texto:'Bueno, no pretendo amuermarle con mi historia… De \ncualquier modo dentro de nada me sacarán de aquí, para siempre.'});
    dCalabozo.push({texto:'¿Qué responde Max?',
    answer: [
      {texto:'¿A qué se refiere con para siempre? ¿Queda exento de por vida?', points: 0, life: 0, jump: 0},
      {texto:'...', points: 0, life: 0, jump: 3},
      {texto:'¿Van a quitarle de en medio?', points: 0, life: 0, jump: 0}
]});
    dCalabozo.push({texto:'Así es… Solo era una huelga, pero al soltarme será un \n“intento de fuga” en el cual los oficiales se verán \nobligados a dispararme por la espalda mientras “huyo”.'});
    dCalabozo.push({texto:'Pero… ¡eso es horrible! ¡No pueden hacer eso!'});
    dCalabozo.push({texto:'Así de injusto es el Est-'});
    dCalabozo.push({texto:'Mateo, queda usted puesto en libertad. Vamos.', personaje: 'Oficial'});
    dCalabozo.push({texto:'¡No! ¡No pueden llevárselo!'});
    dCalabozo.push({texto:'No se preocupe, Max. Disfrute de su vida como pueda.', personaje: 'Mateo'});
    dCalabozo.push({texto:'¡Noooooo!'});

    // CASA2 (SIN PAGA)  ------------------------------------------------------
    let dCasa2spMadam = [];
    dCasa2spMadam.push({texto: '¿Max? ¿Qué haces por aquí de nuevo?'}); 
    dCasa2spMadam.push({texto: 'Vengo del ministerio, he vuelto \npor un dolor de cabeza que me ha dado de repente.\n¿Tienes algo para calmarlo?'});
    dCasa2spMadam.push({texto: 'Claro, espera aquí.\nPor cierto, ¿qué hacías en el ministerio?'});
    dCasa2spMadam.push({texto: 'Estaba hablando con el Gobernante y\nle iba a pedir… ¿que era?,\n¡Ah sí! una ayuda debido a mi situación.'}); 
    dCasa2spMadam.push({texto: 'Muy buena idea, a ver si te la concede ya que\neráis conocidos en vuestros tiempos mozos.'});
    dCasa2spMadam.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Pensándolo mejor, creo que no necesitamos ninguna ayuda.', points: 0, life: -5, jump: 0, razon:'que has actuado\ncomo un insensato'},
              {texto: 'Claro, ¿como no he caído?', points: 0, life: 5, jump: 1, razon:'que has sido\ncoherente'},
               {texto: 'Solo piensas en el dinero...', points: 0, life: -5, jump: 2,razon:'que te has vuelto\nloco'}]});
               dCasa2spMadam.push({texto: 'De ningún modo, ve allí a pedirla.',jump: 2});
               dCasa2spMadam.push({texto: 'Bien dicho, háblale desde el sosiego.',jump: 1});
               dCasa2spMadam.push({texto: '¿Estás loco? No tenemos ni una perra, ve allí corriendo.'});


    // CASA2 (CON PAGA)  ------------------------------------------------------
    let dCasa2cpMadam = [];
    dCasa2cpMadam.push({texto: '¿Max? ¿Qué haces por aquí de nuevo?'}); 
    dCasa2cpMadam.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Traigo buenas noticias.', points: 0, life: 5, jump: 0,razon:'traer esperanza'},
            {texto: 'Tan solo venía a vacíar el tanque, ¡voy al baño!', points: 0, life: 0, jump: 5},
            {texto: 'Venía de paso y se me ocurrió saludarte.', points: 0, life: 0, jump: 16,razon:'que te has vuelto\nloco'}]});
    dCasa2cpMadam.push({texto: 'Bueno, pues cuenta, cuenta, que ya hacían falta.'});
    dCasa2cpMadam.push({texto: 'Vengo de hablar con el Gobernante, le he pedido\nuna ayuda económica debido a mi situación\ny… ¡ha aceptado!'});
    dCasa2cpMadam.push({texto: '¡Qué alegría Max, al fin vemos la luz al final del túnel!'});
    dCasa2cpMadam.push({texto: '¿Pero estás seguro que te pagará y no es tan solo\npalabrería? ¿Te ha dado un escrito o algo?'});
    dCasa2cpMadam.push({texto: 'Tienes razón, ¡qué haría sin ti!, voy de inmediato\na hablar con él.',jump: 14});
    dCasa2cpMadam.push({texto: 'Mira que me extraña, ¿no tienes nada que contarme?'});
    dCasa2cpMadam.push({texto: '¿Qué responde Max?',
             answer: [{texto: 'En realidad sí.', points: 0, life: 3, jump: 0,razon:'traer esperanza'},
                     {texto: 'No.', points: 0, life: 0, jump: 5},
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


    // MINISTERIO3.1  ------------------------------------------------------
    let dMinis3calabozoGober = [];
    dMinis3calabozoGober.push({texto: '¡Cómo podéis tratar a un viejo de estas formas!\n¿No os da vergüenza?'});
    dMinis3calabozoGober.push({texto: '¡Eh, eh! ¿Qué es este alboroto?'});
    dMinis3calabozoGober.push({texto: '¿Y usted quién es? Quiero hablar con el Gobernante,\n¡este no es el trato que merezco!'});
    dMinis3calabozoGober.push({texto: 'Yo soy el Gobernante, cuénteme, ¿qué ha ocurrido?'});
    dMinis3calabozoGober.push({texto: 'Con que es usted, ¿eh? Quiero denunciar el abuso \nde sus trabajadores ahora mismo.'});
    dMinis3calabozoGober.push({texto: '¿Pero qué ha ocurrido?'});
    dMinis3calabozoGober.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Eso no importa, déjeme denunciarlo', points: 0, life: -2, jump: 0, razon:'ser cabezón'},
            {texto: 'Le explico.', points: 0, life: 2, jump: 4,razon:'ser coherente'},
            {texto: 'Ayúdeme y déjese de hablar.', points: 0, life: -2, jump: 6,razon:'ser impaciente'}]});
    dMinis3calabozoGober.push({texto: 'Igualmente, si quiere denunciarlo debe \nexplicarle lo sucedido.'});
    dMinis3calabozoGober.push({texto: 'Está bien…'});
    dMinis3calabozoGober.push({texto: 'Esos muchachos del calabozo no tienen compasión ni \nbuenos tratos con los pobres que viven aprisionados \npor el sistema y que no levantan cabeza, míreme a mí.'});
    dMinis3calabozoGober.push({texto: 'Hace años hay ayudas para personas como usted.',jump: 5});
    dMinis3calabozoGober.push({texto: 'Tan solo estaba en la taberna ahogando mis penas \ny mira dónde he acabado… En el calabozo y sin apenas \nun duro, toda una vida siendo pobre que va a llegar \na su fin en la mayor de las decadencias posibles…'});
    dMinis3calabozoGober.push({texto: 'Oiga oiga yo le puedo ayudar con eso, no \nse preocupe.',jump:3});
    dMinis3calabozoGober.push({texto: 'Tendré que saber cómo puedo ayudarle, ¿no cree?'});
    dMinis3calabozoGober.push({texto: 'Tiene razón, pero viéndome ya se puede \nhacer una idea que mi mayor problema es \nla falta de recursos.'});
    dMinis3calabozoGober.push({texto: 'Está en el lugar indicado, le puedo ayudar \ncon eso, no se preocupe.'});
    dMinis3calabozoGober.push({texto: 'Hábleme más sobre eso.'});
    dMinis3calabozoGober.push({texto: 'Se trata de una ayuda que ofrecemos a personas con \ndiscapacidad para mejorar su vida. \nUna paga que se pasará a su cuenta desde la nuestra \nsin ningún problema.'});
    dMinis3calabozoGober.push({texto: '¿Qué significa ese “nuestra”?'});
    dMinis3calabozoGober.push({texto: 'Nada, nada, una cuenta que tenemos nosotros \npara nuestros gastos comunes, ya sabe.'});
    dMinis3calabozoGober.push({texto: '¿Qué responde Max?',
             answer: [{texto: 'De ningún modo aceptaré dinero corrupto.', points: 0, life: -1, jump: 0, razon:'ser racional\npero pierdes la paga'},
                     {texto: '¿De qué cantidad estamos hablando?', points: 0, life: 5, jump: 2, razon:'obtener la paga'},
                     {texto: 'Entiendo, entiendo', points: 0, life: 5, jump: 4,razon:'obtener la paga'}]});
    dMinis3calabozoGober.push({texto: 'Esa es la única opción que te puedo ofrecer Max.'});
    dMinis3calabozoGober.push({texto: 'Me las apañaré como sea, no quiero ser un corrupto \ncomo vosotros.',jump: 4});
    dMinis3calabozoGober.push({texto: 'Sería una paga vitalicia suficiente para cubrir gastos \nbásicos.'});
    dMinis3calabozoGober.push({texto: 'Me sería de gran ayuda, muchas gracias, se lo agradezco.',jump: 2});
    dMinis3calabozoGober.push({texto: 'Pues eso sería todo, en unos días le notificaremos\npara hablar de trámites.'});
    dMinis3calabozoGober.push({texto: 'Muchas gracias por todo.'});


// MINISTERIO3.2 ------------------------------------------------------
    let dMinis3casaGober = [];
    dMinis3casaGober.push({texto: 'Buenas, he estado aquí hace un rato, preguntando por\nel Gobernante.'});
    dMinis3casaGober.push({texto: 'En efecto, me acuerdo de usted. Como dije antes soy \nquién busca.'});
    dMinis3casaGober.push({texto: '¡Oh, genial! Quería hablar más sobre el tema de la \nayuda económica, lo he hablado con mi mujer y nos \nvendría muy bien recibirla.'});
    dMinis3casaGober.push({texto: '¿A-ayuda económica?'});
    dMinis3casaGober.push({texto: '¿Qué responde Max?',
          answer: [{texto: '¿Acaso no has dicho que te acordabas de mí?', points: 0, life: -3, jump: 0, razon:'ser borde'},
                   {texto: 'Sí, se lo recuerdo si quiere.', points: 0, life: 5, jump: 3,razon:'ser paciente'},
                   {texto: 'No creo que sea tan difícil de entender.', points: 0, life: -7, jump: 6,razon:'que te has vuelto\nloco'}]});
    dMinis3casaGober.push({texto: 'Perdone, no me acordaba, venía por lo de su \ndiscapacidad, ¿verdad?'});
    dMinis3casaGober.push({texto: '¿Qué responde Max?',
          answer: [{texto: 'Sí.', points: 0, life: 0, jump: 0},
                   {texto: 'En efecto.', points: 0, life: 0, jump: 0},
                   {texto: 'No hay más que verme.', points: 0, life: -2, jump: 0,razon:'autodespreciarte'}]});
    dMinis3casaGober.push({texto: 'Vale, enseguida busco qué le puedo ofrecer.',jump: 6});
    dMinis3casaGober.push({texto: 'Si no le importa, se lo agradecería.'});
    dMinis3casaGober.push({texto: 'Llevo arrastrando esta discapacidad varios años\ny no me ayuda a encontrar trabajo ni a hacer más fácil \nmi vida ni la de mis seres queridos, por ello vengo \naquí a ver si el Estado podría ofrecer algo a este \nviejo apenado.'});
    dMinis3casaGober.push({texto: 'Entiendo, veré qué puedo hacer por usted.',jump: 3});
    dMinis3casaGober.push({texto: 'Bueno, no se ponga así señor. Entiendo que tiene algo \nque ver con su discapacidad, ¿no es así?'});
    dMinis3casaGober.push({texto: '¿Qué responde Max?',
          answer: [{texto: 'Sí.', points: 0, life: 0, jump: 0},
                   {texto: 'En efecto.', points: 0, life: 0, jump: 5},
                   {texto: 'No hay más que verme.', points: 0, life: -2, jump: 0,razon:'autodespreciarte'}]});
    dMinis3casaGober.push({texto: 'Vale, enseguida busco qué le puedo ofrecer.'});
    dMinis3casaGober.push({texto: '...'});
    dMinis3casaGober.push({texto: '...'});            
    dMinis3casaGober.push({texto: '...',
          answer: [{texto: 'Recordarle que te dé un escrito', points: 0, life: 2, jump: 0,razon:'ser coherente'},
                   {texto: 'Seguir esperando', points: 0, life: 0, jump: 2},
                   {texto: 'Meterle prisa', points: 0, life: -2, jump: 3,razon:'ser impaciente'}]});
    dMinis3casaGober.push({texto: 'En el caso de que hubiera algo para mí\n¿me podría dar un escrito? Mi mujer ha insistido \nen ello.'});
    dMinis3casaGober.push({texto: 'Claro, no hay problema en ello.',jump: 3});
    dMinis3casaGober.push({texto: '...',jump: 2});
    dMinis3casaGober.push({texto: '¡Venga hombre! Si es buscar dos papeles, ¿cómo puede \nesmerarse tanto?'});
    dMinis3casaGober.push({texto: '¡Ya va, ya va! ¡Qué poca calma tienen algunos!'});
    dMinis3casaGober.push({texto: 'Vale veo que en esta cuenta podríamos desplazar\nun dinero para usted.'});           
    dMinis3casaGober.push({texto: '¿Qué significa "esta cuenta"?'});
    dMinis3casaGober.push({texto: 'Nada, nada, una cuenta que tenemos nosotros para\nnuestros gastos comunes ya sabe.'});
    dMinis3casaGober.push({texto: '...',
          answer: [{texto: 'De ningún modo aceptaré dinero corrupto.', points: 0, life: -1, jump: 0, razon:'ser racional\npero pierdes la paga'},
                   {texto: '¿De qué cantidad estamos hablando?', points: 0, life: 5, jump: 2, razon:'obtener la paga'},
                   {texto: 'Entiendo, entiendo.', points: 0, life: 5, jump: 4,razon:'obtener la paga'}]});
    dMinis3casaGober.push({texto: 'Esa es la única opción que te puedo ofrecer Max.'});
    dMinis3casaGober.push({texto: 'Me las apañaré como sea, no quiero ser un corrupto \ncomo vosotros.',jump: 4});
    dMinis3casaGober.push({texto: 'Sería una paga vitalicia suficiente para cubrir gastos \nbásicos.'});
    dMinis3casaGober.push({texto: 'Me sería de gran ayuda, muchas gracias se lo agradezco.',jump: 2});
    dMinis3casaGober.push({texto: 'Pues eso sería todo. En unos días le notificaremos\npara hablar de trámites.'});
    dMinis3casaGober.push({texto: 'Muchas gracias por todo.'});

//ESCENA FINAL TABERNA 4 (MAX FALLECE)
    let taberna4M = [];
    taberna4M.push({texto: '¡Qué pena más grande! ¡Hoy se ha enterrado \nal poeta más grande de España! ¡Qué gran talento poseía!'});
    taberna4M.push({texto: '¡En su honor, publicaré todos sus escritos! \n¡Merecía el reconocimiento de todo el país, no obstante, vivió de \nla manera más miserable! ¡Qué injusta es la vida para algunos! \n¡Que alguien me ponga algo para beber!'});
    taberna4M.push({texto: '¡No gaste tanto o se quedará tieso!'});
    taberna4M.push({texto: '¡Cállese! Tengo dinero hasta para comprarte a ti. '});
    taberna4M.push({texto: '¿De dónde habrá conseguido usted semejante cantidad \nde dinero? Seguro que cobró el décimo que le vendí a Max.'});
    taberna4M.push({texto: '¡Jamás haría algo así!'});
    taberna4M.push({texto: '¡MENTIRA! Todavía me debes esas diez mil pesetas, cobarde.'});
    taberna4M.push({texto: 'Ya se las devolveré mujer. Leamos el periódico, que \nla situación en España no podría estar peor.'});
    taberna4M.push({texto: 'Han encontrado el cadáver de dos señoras en la calle \nde Bastardillos. ¿Se habrán suicidado?'});
    taberna4M.push({texto: 'Sospecho que son la esposa y la hija de nuestro Max. \n¡Qué pena más grande!'});

    // BARES (LOTERÍA) ------------------------------------------------------
    let dBares = [];
    dBares.push({texto: 'Buenas, ¿le gustaría comprar algo de lotería\npor 5 puntos de vida?',
      answer: [{texto: 'Claro, a eso he venido.', points: 1, life: -5, jump: 0, razon:' Gastar el poco dinero\nque tienes.'},
               {texto: 'No, gracias. Creía que me ofrecería otra cosa.', points: 0, life: 0, jump: 0},
               {texto: 'Me he confundido de garito.', points: 0, life: 0, jump: 0}]});    
    dBares.push({texto: 'Vale, espero verle pronto.'});


    // Identificadores de los diálogos.
    const d = {

      // CASA1
       mcCasa1: dCasa1MC,
       mcCasa2sp: dCasa2spMadam,
       mcCasa2cp: dCasa2cpMadam,
       latCasa1: dCasa1Lat,
       gafasCasa1: dCasa1Gafas,
       gafasDCasa1: dCasa1GafasD,

      // CALLE1
       dCalle1 : calle1,

      // LIBRERIA
       zarLibreria: dLibreriaZar,

      // TABERNA
       dTaberna1 : taberna2,
       dTaberna4: taberna4M,

      // BUÑOLERÍA
       dBunyols : dBunyoleria,
       dBunyel : dBenyota,
       
      // CALABOZO
       calabozo : dCalabozo,

      // MINISTERIO1
       dMinisterio1 : ministerio1,

      // MINISTERIO2
       ministerio2 : dMinisterio2,

      // MINISTERIO3
       goberMinis3Casa: dMinis3casaGober,
       goberMinis3Calabozo: dMinis3calabozoGober,
      
      // BARES
       bares: dBares
      }
 
    export default d;