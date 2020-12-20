export default class Inicio extends Phaser.Scene {  
  constructor() {
    super({ key: "boot" });    
  }

  preload() {
 
    this.load.image('danyo','sprites/danyo.png');
    this.load.image('Max','sprites/max.png' );
    this.load.image('sillon','sprites/sillon.png');
    this.load.image('Latino','sprites/latino.png');
    this.load.image('latcuerpo','sprites/latcuerpo.png');
    this.load.image('madamcuerpo','sprites/madamecuerpo.png');
    this.load.image('Collet', 'sprites/madameCollet.png');
    this.load.image('zaratustracuerpo','sprites/zaratustracuerpo.png');
    this.load.image('Zaratustra', 'sprites/zaratustra.png');

    this.load.image('lugar','sprites/lugar.png');
    this.load.image('boton','sprites/boton.png');
    this.load.image('boton2','sprites/boton2.png');
    this.load.image('botonescena','sprites/botonescena.png');
    this.load.image('botonGastado','sprites/botonGastado.png');
    this.load.image('respuesta','sprites/respuesta.png');
    this.load.image('respuesta2','sprites/respuesta2.png');
    this.load.image('dialogofondo','sprites/dialogofondo.png');
    this.load.image('fondonombre','sprites/fondonombre.png');
    this.load.image('fondopersonaje','sprites/fondopersonaje.png');

    this.load.image('circulo','sprites/circulo.png');
    this.load.image('botont', 'sprites/botontickets.png');
    this.load.image('loteria','sprites/ticket.png');
    this.load.image('botella', 'sprites/botella.png');
    this.load.image('Gafas', 'sprites/gafas.png');
    this.load.image('Gafas D', 'sprites/gafasdef.png');
    this.load.image('corazon', 'sprites/corazon.png');
    
  
    
   
    //Fondos
    this.load.image('inicio','fondos/inicio.png');  
    this.load.image('fondoShakeDanyo','fondos/fondoShakeDanyo.png');    
    this.load.image('mapa','fondos/mapa.png');
    this.load.image('casa','fondos/casa.png')    
    this.load.image('calle', 'fondos/calle.jpg');
    this.load.image('libreria', 'fondos/libreria.png');
    this.load.image('taberna', 'fondos/taberna.png');
    

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