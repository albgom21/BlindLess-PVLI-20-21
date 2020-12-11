export default class Inicio extends Phaser.Scene {  
  constructor() {
    super({ key: "inicio" });    
  }

  preload() {
    this.load.image('inicio','sprites/inicio.png');  
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
          self.scene.launch('game'); 
        }        
    });    
  }
}