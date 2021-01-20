export default class Inicio extends Phaser.Scene {  
  constructor() {
    super({ key: "boot" });    
  }

  preload() {
   //Sonidos
    this.load.audio("ganarmonedas", "sounds/ganarmonedasminijuego.mp3");
    this.load.audio("ganarvida", "sounds/ganarvida.mp3");
    this.load.audio("restarvida", "sounds/restarvida.mp3");
    this.load.audio("sacardialogos", "sounds/salirdialogos.mp3");
    this.load.audio("salirinventario", "sounds/salirinventario.mp3");
    this.load.audio("ganarminijuego", "sounds/ganarminijuego.mp3");
    this.load.audio("saltominijuego", "sounds/saltominijuego.mp3");
    this.load.audio("pasardialogo", "sounds/pasardialogo.mp3");
    this.load.audio("musicaminijuego", "sounds/musicaminijuego.mp3");
    this.load.audio("musicataberna", "sounds/musicataberna.mp3");
    this.load.audio("musicalibreria", "sounds/musicalibreria.mp3");
    this.load.audio("musicacasa", "sounds/musicacasa.mp3");
    this.load.audio("ganarminijuego", "sounds/ganarminijuego.mp3");
    this.load.audio("sonidocoleccionable", "sounds/sonidocoleccionable.mp3");

   //Personajes   
    this.load.image('Max','sprites/max.png' );    
    this.load.image('Latino','sprites/latino.png');
    this.load.image('latcuerpo','sprites/latcuerpo.png');
    this.load.image('madamcuerpo','sprites/madamecuerpo.png');
    this.load.image('Collet', 'sprites/madameCollet.png');
    this.load.image('zaratustracuerpo','sprites/zaratustracuerpo.png');
    this.load.image('Zaratustra', 'sprites/zaratustra.png');
    this.load.image('Camarero', 'sprites/barman.png'); 
    this.load.image('camarerocuerpo', 'sprites/barmancuerpo.png');
    this.load.image('Gobernante', 'sprites/gobernante.png'); 
    this.load.image('gobernantecuerpo', 'sprites/gobernantecuerpo.png');
    this.load.image('Peregrino', 'sprites/dongayperegrino.png');
    this.load.image('peregrinocuerpo', 'sprites/dongayperegrinocuerpo.png');
    this.load.image('La Pisa Bien', 'sprites/lapisabien.png');
    this.load.image('lapisabiencuerpo', 'sprites/lapisabiencuerpo.png');
    this.load.image('Mateo', 'sprites/mateo.png');
    this.load.image('mateocuerpo', 'sprites/mateocuerpo.png');

   
    this.load.image('lugar','sprites/lugar.png');
    this.load.image('boton','sprites/boton.png');
    this.load.image('boton2','sprites/boton2.png');
    this.load.image('botonhablar','sprites/botonhablar.png');
    this.load.image('botonescena','sprites/botonescena.png');
    this.load.image('botonTicket', 'sprites/botontickets.png');
    this.load.image('botonGastado','sprites/botonGastado.png');
    this.load.image('respuesta','sprites/respuesta.png');
    this.load.image('respuesta2','sprites/respuesta2.png');
    this.load.image('dialogofondo','sprites/dialogofondo.png');
    this.load.image('fondonombre','sprites/fondonombre.png');
    this.load.image('fondopersonaje','sprites/fondopersonaje.png');
    this.load.image('corazon', 'sprites/corazon.png');
    this.load.image('inventario', 'sprites/inventario.png');


   //Objetos
    this.load.image('sillon','sprites/sillon.png');
    this.load.image('circulo','sprites/circulo.png');
    this.load.image('botont', 'sprites/botontickets.png');
    this.load.image('loteria','sprites/ticket.png');
    this.load.image('botella', 'sprites/botella.png');
    this.load.image('Gafas', 'sprites/gafas.png');
    this.load.image('Gafas D', 'sprites/gafasdef.png');
    this.load.image('Libro Max','sprites/libromax.png');
    this.load.image('Libro Max D','sprites/libromaxd.png');
    this.load.image('Libros','sprites/libros.png');
    this.load.image('Libros D','sprites/librosd.png');
    this.load.image('Premio','sprites/premio.png');
    this.load.image('Premio D','sprites/premiod.png');
    this.load.image('Vaso','sprites/vaso.png');
    this.load.image('Vaso D','sprites/vasod.png');
    this.load.image('Rata','sprites/ratan.png');
    this.load.image('Rata D','sprites/ratanD.png');


   //Coleccionables
    this.load.image('Baston','coleccionables/baston.png');
    this.load.image('Lacre','coleccionables/lacre.png');
    this.load.image('MonedasChocolate','coleccionables/monedaschocolate.png');
    this.load.image('Pergamino','coleccionables/pergamino.png');
    this.load.image('Plumero','coleccionables/plumero.png');
    this.load.image('Radio','coleccionables/radio.png');
    this.load.image('Reloj','coleccionables/reloj.png');
    this.load.image('RelojMano','coleccionables/relojmano.png');
    this.load.image('Sobre','coleccionables/sobre.png');
    this.load.image('Vela','coleccionables/velagorda.png');

   //Minijuego
    this.load.image('plat', 'spritesminijuego/plat.png');
    this.load.image('m', 'spritesminijuego/m.png');
    this.load.image('mujer', 'spritesminijuego/mujer.png');
    this.load.image('mui', 'spritesminijuego/mui.png');
    this.load.image('spike', 'spritesminijuego/spike.png');
    this.load.image('final', 'spritesminijuego/final.png');
    this.load.image('fondo', 'spritesminijuego/fondo.png');    
    this.load.image('cartel', 'spritesminijuego/cartel.png');    
    this.load.spritesheet('coin', 'spritesminijuego/coinsheet.png', { frameWidth: 24, frameHeight: 30 });
    this.load.spritesheet('character', 'spritesminijuego/character.png', { frameWidth: 40, frameHeight: 50 });
    
       
   //Fondos
    this.load.image('inicio','fondos/inicio.png');  
    this.load.image('danyo','sprites/danyo.png');
    this.load.image('fondoShakeDanyo','fondos/fondoShakeDanyo.png');    
    this.load.image('mapa','fondos/mapa.png');
    this.load.image('casa','fondos/casas.png')    
    this.load.image('calle', 'fondos/calle.jpg');
    this.load.image('libreria', 'sprites/libreria.png');
    this.load.image('taberna', 'fondos/taberna.png');
    this.load.image('contexto', 'fondos/contexto.png');
    this.load.image('ministerio', 'fondos/ministerios.png');
    this.load.image('bunyoleria', 'fondos/bunyoleria.png');
    this.load.image('calabozo', 'fondos/calabozos.png');

    this.load.image('rectangulo', 'sprites/rectangulo.png');

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