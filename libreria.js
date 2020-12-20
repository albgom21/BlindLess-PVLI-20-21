import Zaratustra from './zaratustra.js';
import Latino from './latino.js';
export default class Libreria extends Phaser.Scene {  
    constructor() {
      super({ key: "libreria" });      
    this.pointScene = 0;
    this.menuActivado = false;    
    this.fin = new Array(1); // array con el numero de personajes    
    this.key = 'libreria';
    }
    init(datos){
      this.vidaMax = datos.vidaMax;
    }
    
  create(){
    this.scene.stop('mapa');
    this.nameScene = 'LIBRERIA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'libreria');
    let dialogos = new Array();
    dialogos.push({texto: 'Mi nombre es Zaratustra y soy el dueño de\nesta librería. ¿A qué debo el placer?'});
    dialogos.push({texto: 'Hemos venido a reclamar un aumento de cobro\npor los libros de Max Estrella que vendimos\nanteriormente aquí. ¿Verdad, Max?',
      personaje: 'Latino'});
    dialogos.push({texto: '¿Qué responde Max?',
      answer: [{texto: '¿Qué? Yo había venido aquí a comprar unos libros que me apetecía leer.', points: 0, life: 0, jump: 0},
               {texto: '¡Zaratustra, vuestros días de picardía se terminan hoy!', points: 0, life: 0, jump: 9}]});
    dialogos.push({texto: 'Max, no seas trapisondista.\n¿No querías saber qué le había pasado\na tus libros?'});
    dialogos.push({texto: '¿Está usted seguro de querer comprar\nun libro, don Estrella?',
      personaje: 'Zaratustra'});
    dialogos.push({texto: '¿Qué responde Max?',
      answer: [{texto: 'Sí, estoy seguro. Anhelo leerlo.', points: 0, life: -5, jump: 0, razon:'no puede leer\n y ha gastado todo su dinero.'},
               {texto: 'No. No lo quiero. ¡Vayámonos de aquí Don Latino!', points: 0, life: 2, jump: 2, razon: 'no han podido engañarle\n y han perdido el tiempo.'},
               {texto: '¿Me recomienda algún libro?', points: 0, life: -7, jump: 3,razon:'le han timado\n vendiendote un libro'}]});
    dialogos.push({texto: 'De acuerdo entonces, es todo suyo.\nDéme un segundo para envolverlo.'});
    dialogos.push({texto: 'Max, ¿has perdido la cabeza?\n¿Cómo se supone que vas a leer un libro\nsiendo invidente?',
      personaje: 'Latino', jump: 12});
    dialogos.push({texto: 'De verdad, Max, no tengo ni idea de qué piensas…\nA la buena de Dios hemos venido hasta aquí.',
      personaje:'Latino', jump: 11});
    dialogos.push({texto: 'Pues, ahora que lo menciona, tengo\naquí un ejemplar del último libro de Iván\nAtimarte, un nuevo escritor pródigo español.'});
    dialogos.push({texto: 'Seguro que le interesa, se lo envuelvo\nen un instante.'});
    dialogos.push({texto: 'Al freír será el reír…',
      personaje: 'Latino', jump: 8});
    dialogos.push({texto: '… ¿Qué? ¿Están ustedes enfadados conmigo\npor alguna razón?',personaje:'Zaratustra'});
    dialogos.push({texto: 'Así es, Zaratustra. Has vendido los libros de Max\na un precio fatídico. Exigimos que nos devuelvas\nlos libros que tan mal has tratado.',
      personaje: 'Latino'});
    dialogos.push({texto: 'Disculpen mi ostentación, pero no tengo ni\nidea de qué están hablando',
      personaje: 'Zaratustra'});
    dialogos.push({texto: 'A otro perro con ese hueso, Zaratustra.\nDános lo que nos es debido.',
      personaje: 'Latino'});
    dialogos.push({texto: 'Ugh… Con las manos en la masa, ¿eh?\nLamentablemente, soy incapaz de devolverles sus libros.',
      personaje: 'Zaratustra'});
    dialogos.push({texto: 'Ya han sido comprados por otro de mis clientes.'});
    dialogos.push({texto: '¿¡Qué!? ¿Cómo has po-', personaje: 'Latino'});
    dialogos.push({texto: '¡Espera Max no salgas corriendo!'});
    this.zarCuerpo = new Zaratustra(this, 1000, 400, 'zaratustracuerpo', dialogos, 0);    
    dialogos = new Array();
    //this.latCuerpo = new Latino(this, 500, 400, 'latcuerpo', dialogos, 1);        
    this.add.image(500, 400, 'latcuerpo');
  }
  finEscena(){    
    let a = true;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a)
    { //que hayan hablado todos los personajes de la escena
      a = false;
      const botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'TABERNA',vida:this.vidaMax,suma:10,resta:20})});
    }       
  }  
}
