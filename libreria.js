import Zaratustra from './zaratustra.js';
import dialogos from './dialogos.js';
import LibroMax from './libromax.js';
import Libros from './libros.js';
import Premio from './premio.js';
import Coleccionables from './coleccionables.js';

export default class Libreria extends Phaser.Scene {  
  constructor() {
    super({ key: "libreria" });      
  this.pointScene = 0;
  this.menuActivado = false;    
  this.fin = [];
  this.fin[0] = false;
  this.key = 'libreria';
  }
  
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }
    
  create(){
    this.musica = this.sound.add("musicalibreria",{volume: 0.15,loop: true});
    this.musica.play();
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'LIBRERIA';
    this.add.image(640, 360, 'fondoShakeDanyo');
    this.add.image(640, 360, 'libreria');
    this.add.image(500, 400, 'latcuerpo');

    this.objeto = new Coleccionables(this, 320, 460, 'Pergamino');
    this.zarCuerpo = new Zaratustra(this, 1000, 400, 'zaratustracuerpo', dialogos.zarLibreria, 0);
    this.libromax = new LibroMax(this, 733, 362, 'Libro Max', dialogos.libroMax, dialogos.libroMaxD);   
    this.libros = new Libros(this, 350, 80, 'Libros', dialogos.libros, dialogos.librosD);  
    this.premio = new Premio(this, 900, 60, 'Premio', dialogos.premio, dialogos.premioD);   

    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.musica.stop(),
      this.scene.launch('mapa', {antEscena:this.key, proxEscena:'taberna1', nombreEscena:'TABERNA',
       vida:this.vidaMax, suma:10, resta:27, datosInventario: this.datosInventario})});

   // Botón del inventario.
   this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
   this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 
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
      botonEscena.once('pointerdown', () => {this.paso = this.sound.add("pasarescena",{volume:1}); this.paso.play();this.cameras.main.fadeOut(1500)});          
    }       
  }  
}
