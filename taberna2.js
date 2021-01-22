import Camarero from './barman.js';
import Vaso from './vaso.js';
import dialogos from './dialogos.js';
import Coleccionables from './coleccionables.js';
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
    this.puntosAnt = datos.puntos; // puntos que vienen de la taberna1
    this.datosInventario = datos.datosInventario;
  }
  
  create() {  
    this.musica = this.sound.add("musicataberna",{volume: 0.25,loop: true});
    this.musica.play();
    this.game.monedas = 0;
    this.cameras.main.fadeIn(1500); 
    this.once = false;
    this.scene.stop('mapa');
    this.nameScene = 'TABERNA';    
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'taberna');   
    this.objeto = new Coleccionables(this, 650, 180, 'RelojMano');
    this.vaso = new Vaso(this, 200, 300, 'Vaso', dialogos.vaso, dialogos.vasoD);   
    this.camCuerpo = new Camarero(this,500,281,'camarerocuerpo',dialogos.bares, 0, false);   
     
    
    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 
      
    this.cameras.main.once('camerafadeoutcomplete', () => {
      if (this.puntosAnt >= 10) {
        this.musica.stop(),
        this.scene.launch('mapa',{antEscena:this.key, proxEscena:'ministerio1', nombreEscena:'MINISTERIO', vida:this.vidaMax, suma:10, resta:20, datosInventario: this.datosInventario });
      }         
     else {this.musica.stop(),this.scene.launch('mapa',{antEscena:this.key, proxEscena:'bunyoleria', nombreEscena:'BUÑOLERIA',
     vida:this.vidaMax, suma:4, resta:14, datosInventario: this.datosInventario})}
    });
    
    this.minijuego = this.add.image(950, 55,'cartel').setInteractive();    
    this.minijuego.on('pointerdown', () => {if(!this.menuActivado){this.musica.stop(),this.scene.launch('minijuego',{scene:this}),this.minijuego.destroy()}});      
  }  

update(){
  if(this.compra && this.pointScene > 0){ //Si se ha elegido comprar la lotería se añade al inventario
    this.datosInventario.nums.push(Math.floor(Math.random() * (100 - 10) + 10));
    this.compra = false;
  }
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
      if(this.game.monedas !== 0){
        if(this.vidaMax + this.game.monedas > 100){
          this.vidaMax = 100;          
        }
        else{
          this.vidaMax += this.game.monedas;          
        }
      }      
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();
      botonEscena.once('pointerdown', () => {this.paso = this.sound.add("pasarescena",{volume:1}); this.paso.play();this.cameras.main.fadeOut(1500)});     
  }       
}  
}