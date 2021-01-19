import dialogos from './dialogos.js';
import Latino from './latino.js';
export default class Taberna1 extends Phaser.Scene {
  
    constructor() {
      super({ key: 'taberna1'});     
      this.menuActivado = false;       
      this.fin = new Array(1); // array con el numero de personajes con los que hablar
      this.key = 'taberna1';    
      this.pointScene = 0;
    } 
  
    init(datos){
      this.vidaMax = datos.vidaMax;
      this.datosInventario = datos.Inventario;
    }
    
    create() {  
      this.cameras.main.fadeIn(1500); 
      this.scene.stop('mapa');
      this.nameScene = 'TABERNA';    
      this.add.image(640, 360, 'fondoShakeDanyo'); 
      this.add.image(640, 360, 'taberna');   
      this.latCuerpo = new Latino(this, 500, 400, 'latcuerpo', dialogos.dTaberna1, 0, false);  
      
      // Botón del inventario.
      this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
      if (!this.menuActivado) this.botonT.on('pointerdown', () => this.scene.launch('inventario', {datosInventario : this.datosInventario}));
    
      
      this.cameras.main.once('camerafadeoutcomplete', () => {
        //Poner que según los puntos con otro parámetro vaya a ministerio1 o buñoleria
        if (this.pointScene > 0) this.scene.launch('mapa',{antEscena:this.key, proxEscena:'ministerio1', nombreEscena:'MINISTERIO',
         vida:this.vidaMax, suma:10, resta:10, datosInventario: this.datosInventario })
         
        else this.scene.launch('mapa',{antEscena:this.key, proxEscena:'taberna2', nombreEscena:'TABERNA',
         vida:this.vidaMax, suma:10, resta:-7, datosInventario: this.datosInventario})
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
        botonEscena.once('pointerdown', () => {this.cameras.main.fadeOut(1500)});     
    }      
}
}