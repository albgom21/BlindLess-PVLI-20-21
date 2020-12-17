
import Game from './game.js'
import Latino from './latino.js'
export default class escenaLibreria extends Phaser.Scene {
    

    constructor() {
    super({ key: 'escenaL1'});  
    this.game = new Game();  
    this.vidaMax = game.getVidaMax();
    this.pointScene = 0;
    this.menuActivado = false;
    this.orden = false;
    this.fin = new Array(1); // array con el numero de personajes
    this.fin[1]= false;
  }
  create(){
      this.scene.stop('game');
      this.nameScene = 'LIBRERIA1';
      this.add.image('libreria');

      var dialogos = new Array();
      dialogos.push({texto: '\n\n Mi nombre es Zaratustra y soy el dueño de \n esta librería. ¿A qué debo el placer?', answer: null});
      dialogos.push({texto: ' Hemos venido a reclamar un aumento de cobro por \n los libros de Max Estrella que vendimos anteriormente \n aquí. ¿Verdad, Max?', answer: null});
      dialogos.push({texto: '¿Qué responde Max?', 
    answer: [
        {texto: '¿Qué? Yo había venido aquí a comprar unos libros que me apetecía leer. ¿Dispone de Don Quijote de la Mancha, de Miguel de Cervantes?', points: 10, life: -10, jump: 0},
        {texto: 'Mejor pensado, no. No lo quiero. Vayámonos de aquí, don Latino, que no me da buena espina este señor.', points: 20, life: +10, jump: 0},
        {texto: '¿Me recomienda algún otro mejor?', points: 0, life: -20, jump: 2}
    ]})
    
    this.donLatino = new Latino(this, 1000, 400, 'latcuerpo', dialogos, 0);
    // Si Max ha contestado la A)
    if (this.donLatino.dialogos.answer[0]){
        var dialogoA = new Array();
        dialogoA.push({texto:' Max, no seas trapisondista. ¿No querías saber qué le había pasado a tus libros?' , answer: null});
        dialogoA.push({texto:' Don Latino, ¿se encuentra usted bien? No recuerdo mencionarle eso que dice en ningún momento.', answer: null});
        dialogoA.push({texto:' Urgh...', answer: null});
        dialogoA.push({texto:' ¿Está usted seguro de querer comprar un libro, don Estrella? ', answer: null});
        dialogoA.push({texto:' ¿Qué responde Max?', 
        answer: [
            {texto:' Sí, estoy seguro. Anhelo leerlo.', points: 0, life: -5, jump: 0},
            {texto:' Mejor pensado, no. No lo quiero. Vayámonos de aquí, don Latino, que no me da buena espina este señor. ', points: 10, life: +20, jump: 0},
            {texto:' ¿Me recomienda algún otro mejor?', points: 0, life: -20, jump: 0}
        ]});
    }
    if (this.donLatino.dialogoA.answer[0]){
        var dialogoAA = new Array();
        dialogoAA.push({texto:' De acuerdo entonces, es todo suyo. Déme un segundo para envolverlo.', answer: null});
        dialogoAA.push({texto:' Max, ¿has perdido la cabeza? ¿Cómo se supone que vas a leer un libro siendo invidente?', answer: null});
        dialogoAA.push({texto:' … ¿Qué?', answer: null});
    }
    if(this.donLatino.dialogoA.answer[1]){
        var dialogoAB = new Array();
        dialogoAB.push({texto:' De verdad, Max, no tengo ni idea de qué piensas… A la buena de Dios hemos venido hasta aquí.', answer: null});
    }
    if (this.donLatino.dialogoA.answer[2]){
        var dialogoAC = new Array();
        dialogoAC.push({texto:' Pues, ahora que lo menciona, tengo aquí un ejemplar del último libro de Iván Atimarte, un nuevo escritor pródigo español.¿Le interesa?', answer: null});
        dialogoAC.push({texto:' ¿¡IVÁN ATIMARTE?! Estoy seguro de haber visto su nombre en los periódicos. Me lo llevaré enseguida.', answer: null});
        dialogoAC.push({texto:' Perfecto, se lo envuelvo en un instante.', answer: null});
        dialogoAC.push({texto:' Al freír será el reír.', answer: null});
    }
    if (this.donLatino.dialogos.answer[1]){
        var dialogoB = new Array();
        dialogoB.push({texto:' Tiene razón, Don Latino. ¡Zaratustra, vuestros días de picardía se terminan hoy! ', answer: null});
        dialogoB.push({texto:' …¿Qué? ¿Están ustedes enfadados conmigo por alguna razón?', answer: null});
        dialogoB.push({texto:' Así es, Zaratustra. Has vendido los libros de Max a un precio fatídico. Exigimos que nos devuelvas los libros que tan mal has tratado.', answer: null});
        dialogoB.push({texto:' ¡Eso, eso!', answer: null});
        dialogoB.push({texto:' Disculpen mi ostentación, pero no tengo ni idea de qué están hablando.', answer: null});
        dialogoB.push({texto:' A otro perro con ese hueso, Zaratustra. Dános lo que nos es debido.', answer: null});
        dialogoB.push({texto:' Ugh… Con las manos en la masa, ¿eh? Lamentablemente, soy incapaz de devolverles sus libros.', answer: null});
        dialogoB.push({texto:' ¿Y eso por qué?', answer: null});
        dialogoB.push({texto:' Ya han sido comprados por otro de mis clientes.', answer: null});
        dialogoB.push({texto:' ¿¡Qué!? ¿Cómo has po-', answer: null});
        dialogoB.push({texto:' AAAAAAAAAAAAAAAAAHHHHHH ¡¡¡VAN A VENIR A POR MÍ!!! *sale corriendo*', answer: null});
    }
    // Esta opción solo estará disponible si Don Latino (u otro objeto mejor) está deformado
    if (this.donLatino.dialogos.answer[2]){
        var dialogoD = new Array();
        dialogoD.push({texto:' ¿Don Latino…? ¿Por qué está usted tan… azul? ¿Y esas orejas tan felinas…?', answer: null});
        dialogoD.push({texto:' ¿De qué está hablando, don Estrella? ', answer: null);
        dialogoD.push({texto:' Oh no… Max, escúchame.', answer: null});
        dialogoD.push({texto:' ¡NO TE ACERQUES! ', answer: null});
        dialogoD.push({texto:' ¿Qué estás diciendo, Max? Soy yo, Don Latino.', answer: null});
        dialogoD.push({texto:' Sé muy bien quién eres… y no eres mi amigo don Latino. ¡Eres un IMPOSTOR! ', answer: null});
        dialogoD.push({texto:' Soy Don Latino, tu fiel amigo el cual NUNCA actuaría en tu contra ni te mentiría sobre nada. ¿No lo ves?', answer: null});
        dialogoD.push({texto:' Don Latino… es usted de verdad.', answer: null});
        dialogoD.push({texto:' ¿Verdad? Venga, dejémoslo para otro día, vamos a tomar algo…', answer: null});

    }

  }
}