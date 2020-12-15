export default class Inicio extends Phaser.Scene {  
  constructor() {
    super({ key: "boot" });    
  }

  preload() {
    this.load.image('fondo','sprites/fondo.png')
    this.load.image('Max','sprites/max.png' );
    this.load.image('sillon','sprites/sillon.png');
    this.load.image('Latino','sprites/latino.png');
    this.load.image('latcuerpo','sprites/latcuerpo.png');

    this.load.image('lugar','sprites/lugar.png');
    this.load.image('boton','sprites/boton.png');
    this.load.image('boton2','sprites/boton2.png');
    this.load.image('botonGastado','sprites/botonGastado.png');
    this.load.image('respuesta','sprites/respuesta.png');
    this.load.image('respuesta2','sprites/respuesta2.png');
    this.load.image('dialogofondo','sprites/dialogofondo.png');
    this.load.image('fondonombre','sprites/fondonombre.png');
    this.load.image('fondopersonaje','sprites/fondopersonaje.png');

    this.load.image('botont', 'sprites/botontickets.png');
    this.load.image('loteria','sprites/ticket.png');
    this.load.image('botella', 'sprites/botella.png');
    this.load.image('Gafas', 'sprites/gafas.png');
    this.load.image('Gafas D', 'sprites/gafasdef.png');
    this.load.image('corazon', 'sprites/corazon.png');
    this.load.image('inicio','sprites/inicio.png');  
    this.load.image('mapa','sprites/mapa.png');
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
   
  }
  create() {
    const self = this;
    WebFont.load({
        google: {
            families: ['VT323']
        },
        active: function () // se llama a esta función cuando está cargada
        {            
          self.scene.launch('inicio'); 
          //'mapa',{proxEscena:'game',nombreEscena:'TABERNA',vida:10, suma: 20, resta: 30}); 
        }        
    });    
  }
}