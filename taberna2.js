import Camarero from './barman.js';
import dialogos from './dialogos.js';
import Loteria from './loteria.js';
export default class Taberna2 extends Phaser.Scene {
  
  constructor() {
    super({ key: 'taberna2'});     
    this.menuActivado = false;       
    this.fin = new Array(1); // array con el numero de personajes con los que hablar
    this.key = 'taberna2';    
    this.pointScene = 0;
    this.compra = true;
  } 
  init(datos) {
    this.vidaMax = datos.vidaMax;
    this.puntosAnt = datos.puntos; //puntos que vienen de la taberna1
    this.sumaVida = datos.sumaVida;
  }
  create() {  
    this.once = false;
    this.scene.stop('mapa');
    this.nameScene = 'TABERNA';    
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'taberna');   
    this.camCuerpo = new Camarero(this,500,281,'camarerocuerpo',dialogos.bares,0,true);    
    if(this.pointScene > 0){ //Si se ha elegido comprar la lotería aparece el boton y el ticket
      this.aparece();      
    }

    this.minijuego = this.add.image(950, 55,'cartel').setInteractive();    
    this.minijuego.on('pointerdown', () => {if(!this.menuActivado){this.scene.launch('minijuego',{vida:this.vidaMax}),this.minijuego.destroy()}});
  }  

aparece(){
  this.boton = new Loteria(this, 60, 655, 'botont');
  this.ticket = new Loteria(this, 400, 500, 'loteria');
  this.boton.on('pointerdown', () => {this.ticket.verNumeros()}); //Dejar que solo se genere un número de la loteria
  this.ticket.on('pointerdown', () => {if(this.compra){this.ticket.crearNumero();this.compra= false;}});
}

finEscena() {    
    let a = true ;
    let i = 0;
    while(a && i<this.fin.length){
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a) { //Que hayan hablado todos los personajes de la escena
      a = false;
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      if(this.puntosAnt >= 10){
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'libreria',nombreEscena:'LIBRERIA',vida:this.vidaMax,suma:2,resta:14})});
      }
      else{
        botonEscena.on('pointerdown', () => {this.scene.launch('mapa',{antEscena:this.key,proxEscena:'calle1',nombreEscena:'CALLE',vida:this.vidaMax,suma:4,resta:11})});
      }      
    }       
  }  
}