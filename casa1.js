import Latino from './latino.js';
import Gafas from './gafas.js';
import Collet from './collet.js';
export default class Casa1 extends Phaser.Scene {
  
  constructor() {
    super({ key: 'casa1'});    
    this.vidaMax = 100;
    this.pointScene = 0;
    this.menuActivado = false;   
    this.apareceLatino = false;
    this.fin = new Array(2); // array con el numero de personajes  
    this.key = 'casa1';    
  }
  create() {  //Refactorizar dialogos y escena
    this.scene.stop('inicio');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa');     
    

    let dialogos = new Array();
    dialogos.push({texto: 'Ten paciencia, Max. Ya sé que no podemos ganar\ndinero, y además solo te dieron 40 talegos por\nesas cuatro crónicas.'});
    dialogos.push({texto: 'No temo a la idea del suicidio colectivo, pero\ntenemos una hija, Max. ¡Es muy joven!\nNo puede morir todavía.'});
    dialogos.push({texto: '¿Qué responde Max?',
      answer: [{texto: 'También se matan los jóvenes.', points: 0, life: 0, jump: 0},
               {texto: 'Tienes toda la razón.', points: 0, life: 0, jump: 0},
               {texto: '¿Y si la convencemos para el suicidio colectivo?', points: 0, life: -5, jump: 0,razon:"intento de suicidio"}]});
    dialogos.push({texto: 'Max, los jóvenes no se matan por cansancio de la\nvida. Los jóvenes se matan por romanticismo.'});
    dialogos.push({texto: 'No desesperes. Otra puerta se abrirá.\nNo te pongas a gatas, Max.\nTodos reconocen tu talento.'});
    dialogos.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Ninguna editora me cogeria ', points: 0, life: 0, jump: 0},
              {texto: 'Puedo intentar hacer lo minimo por nuestra hija', points: 0, life: 0, jump: 0},
              {texto: 'La solución podría ser el suicidio colectivo', points: 0, life: -4, jump: 0,razon:"intento de suicidio"}
     ]});
    dialogos.push({texto: 'Pues ves a hablar con tu fiel amigo Don Latino que\na mí ya me tienes casi olvidada. Tú y tus\ngenerosidades nos han dejado sin cena...'});
    dialogos.push({texto: 'Si no fuera por nuestra hija Claudinita ya\npodríamos estar muertos, Max.'});

    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos, 0,true);   
    dialogos = new Array();
    dialogos.push({texto: '(Tan solo son unas gafas...)'});
    let dialogoDef = new Array();
    dialogoDef.push({texto: '¿Creías que no podía hablar?'});
    dialogoDef.push({texto: 'No creo que en tu situación te sea de gran ayuda.'});
    this.g = new Gafas(this, 733, 350, 'Gafas', dialogos, dialogoDef);    
    const contxt = this.add.image(640, 360, 'contexto').setInteractive();       
    contxt.on('pointerdown', () => {contxt.visible = false});    
  }  

aparece(){  
  let dialogos = new Array();
  dialogos.push({texto: '¡Oh, admirado y querido gran amigo mio, Max!, tu\nmujer y su hija desde que he entrado han estado\nacribillándome por el dinero.'});
  dialogos.push({texto: 'Siguen sin fiarse de mí.\nAdemás el librero nos ha timado pagándonos\n¡Solo tres pesetas! ¡Tres miseras pesetas!\n¡Un robo!'});
  dialogos.push({texto: 'Si te presentas ahora conmigo en la tienda\nde ese granuja y le armas un escándalo, le sacas\nhasta dos duros. Tú tienes otro empaque.'});
  dialogos.push({texto: '¿Qué responde Max?',
    answer: [{texto: 'Pues no haber dejado las crónicas, vamos a devolverlo', points: 10, life: 2, jump: 0,razon:"fuerza de voluntad"},
              {texto: 'Déjalo estar, esas crónicas no valían más', points: 0, life: -4, jump: 0,razon:"infravalorar tu trabajo"},
              {texto: 'No deberia de salir de casa por mi condición', points: 0, life: -4, jump: 0,razon:"afrontar la realidad"}
     ]});
  dialogos.push({texto: 'Max, el aire te refrescará. Aquí hace un calor de\nhorno, pues en la calle corre fresco.¡Vamos!'});
  this.latCuerpo = new Latino(this, 1000, 400, 'latcuerpo', dialogos, 1);    
}
  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a) { //Que hayan hablado todos los personajes de la escena
      a = false;
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      if(this.pointScene >=10){
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'LIBRERIA',vida:this.vidaMax,suma:10,resta:20})});
      }
      else{
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'calle1',nombreEscena:'CALLE',vida:this.vidaMax,suma:10,resta:20})});
      }      
    }       
  }  
}