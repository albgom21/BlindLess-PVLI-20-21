import Latino from './latino.js';
import Gafas from './gafas.js';
import Collet from './collet.js';
export default class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'casa1'});    
    this.vidaMax = 100;
    this.pointScene = 0;
    this.menuActivado = false;
    this.orden = false;
    this.fin = new Array(2); // array con el numero de personajes
    //this.fin[0]= false;
    this.key = 'casa1';
    
  }
  create() {
    this.scene.stop('inicio');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa'); 
    
    let dialogos = new Array();
    dialogos.push({texto: 'Ten paciencia, Max. Ya sé que no podemos ganar\ndinero, y además solo te dieron 40 talegos por\nesas cuatro crónicas.'});
    dialogos.push({texto: 'No temo a la idea del suicidio colectivo, pero\ntenemos una hija, Max. ¡Es muy joven!\nNo puede morir todavía.'});
    dialogos.push({texto: '¿Qué responde Max?',
      answer: [{texto: 'También se matan los jóvenes.', points: 10, life: 0, jump: 0},
               {texto: 'Tienes toda la razón.', points: 0, life: 0, jump: 0},
               {texto: '¿Y si la convencemos para el suicidio colectivo?', points: 50, life: -10, jump: 2,razon:"intento de suicidio"}]});
    dialogos.push({texto: 'Max, los jóvenes no se matan por cansancio de la\nvida. Los jóvenes se matan por romanticismo.'});
    dialogos.push({texto: 'No desesperes. Otra puerta se abrirá.\nNo te pongas a gatas, Max.\nTodos reconocen tu talento.'});
    dialogos.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Ninguna editora me cogeria ', points: 10, life: 0, jump: 0},
              {texto: 'Puedo intentar hacer lo minimo por nuestra hija', points: 10, life: 0, jump: 0},
              {texto: 'Sigo pensando en el suicidio colectivo ', points: 10, life: 0, jump: 2}
     ], personaje:'Collet'});
    dialogos.push({texto: 'Pues ves a hablar con tu fiel amigo Don Latino que\na mí ya me tienes casi olvidada. Tú y tus\ngenerosidades nos han dejado sin cena...'});
    dialogos.push({texto: 'Si no fuera por nuestra hija Claudinita ya\npodríamos estar muertos, Max.'});
    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos, 0);
    if(this.madame.fin) this.orden = true;
    //this.gafas = new Personaje(this, 733, 350, 'gafas');  //No pueden crearse a partir de la clase que heredan
    dialogos = new Array();
    let dialogoDef = new Array();
    dialogoDef.push({texto: 's\nhola'});
    dialogoDef.push({texto: 's\nadios'});
    this.g = new Gafas(this, 733, 350, 'Gafas', dialogos, dialogoDef);
    dialogos = new Array();
    dialogos.push({texto: '¡Oh, admirado y querido gran amigo mio, Max!, tu\nmujer y su  hija desde que he entrado han estado\nacribillándome por el dinero.'});
    dialogos.push({texto: 'Siguen sin fiarse de mí.\nAdemás el librero nos ha timado pagándonos\n¡Solo tres pesetas! ¡Tres miseras pesetas!\n¡Un robo!'});
    dialogos.push({texto: 'Si te presentas ahora conmigo en la tienda\nde ese granuja y le armas un escándalo, le sacas\nhasta dos duros. Tú tienes otro empaque.'});
    this.latCuerpo = new Latino(this, 1000, 400, 'latcuerpo', dialogos, 1);    
  }  

  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a)
    { //que hayan hablado todos los personajes de la escena
      a = false;
      const botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'LIBRERIA',vida:this.vidaMax,suma:10,resta:20})});
    }       
  }  
}