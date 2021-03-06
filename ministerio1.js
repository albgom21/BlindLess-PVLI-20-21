import dialogos from './dialogos.js';
import Gobernante from './gobernante.js';
export default class Ministerio1 extends Phaser.Scene {
  
    constructor() {
      super({ key: 'ministerio1'});     
      this.menuActivado = false;       
      this.fin = [];
      this.fin[0] = false;
      this.key = 'ministerio1';    
      this.pointScene = 0;
    } 
  
    init(datos){
      this.vidaMax = datos.vidaMax;
      this.datosInventario = datos.datosInventario;
    }
    
    create() {  
      this.musica = this.sound.add("musicaministerio",{volume: 0.25,loop: true});
      this.musica.play();
      this.cameras.main.fadeIn(1500); 
      this.scene.stop('mapa');
      this.nameScene = 'MINISTERIO';    
      this.add.image(640, 360, 'fondoShakeDanyo'); 
      this.add.image(640, 360, 'ministerio');  
      this.gobernante = new Gobernante(this, 300, 450, 'gobernantecuerpo', dialogos.dMinisterio1, 0);
      
      // Botón del inventario.
      this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
      this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 

      this.cameras.main.once('camerafadeoutcomplete', () => { 
        this.musica.stop(); 
        if (this.pointScene === 10) this.scene.launch('mapa', {antEscena: this.key, proxEscena: 'casa2sp', nombreEscena:'CASA',
         vida:this.vidaMax, suma: 5, resta: 5, datosInventario : this.datosInventario});
        else if (this.pointScene === 20) this.scene.launch('mapa', {antEscena: this.key, proxEscena: 'casa2cp', nombreEscena:'CASA',
         vida:this.vidaMax, suma: 8, resta: 0, datosInventario : this.datosInventario});
        else this.scene.launch('mapa',{antEscena:this.key, proxEscena:'calabozo', nombreEscena:'CALABOZO',
         vida:this.vidaMax, suma: 0, resta: 0, datosInventario : this.datosInventario});
    });
    }
    
  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i < this.fin.length) {
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a) { //Que hayan hablado todos los personajes de la escena
      a = false;
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();       
        botonEscena.once('pointerdown', () => {this.paso = this.sound.add("pasarescena",{volume:1}); this.paso.play();this.cameras.main.fadeOut(1500)});
    }      
}
}