export default class Mapa extends Phaser.Scene {  
  constructor() {
    super({ key: "mapa" });
  }
  
  init(datos) {    
    this.proxEscena = datos.proxEscena; 
    this.antEscena = datos.antEscena; 
    this.nombreEscena = datos.nombreEscena;
    this.vida = datos.vida;
    this.suma = datos.suma;
    this.resta = datos.resta;
  }
  create() {         
    //Mapa
    //poner en stop la escena anterior
    this.scene.stop(this.antEscena);
    const mapa = this.add.image(640, 360, 'mapa').setInteractive();
    mapa.on('pointerdown', () => {this.scene.launch(this.proxEscena)});//no funciona el cambio de escena
    //Texto puntos y vidas
    //Segun la proxEscena poner el circulo acorde con ifs
    //Para la izq x = 528
    //Para la derecha x = 750
    //Para el medio x =632
    this.add.image(632,526,'circulo');
    this.add.text(975, 155, this.nombreEscena, { fontFamily: 'VT323',fontSize: '82px', color: '#e09b41' });
    this.add.text(1010, 530, this.vida+'/100', { fontFamily: 'VT323',fontSize: '72px', color: '#edab07' });
    this.add.text(1065,310,this.suma,{fontFamily: 'VT323',fontSize: '68px', color: '#558722' });
    this.add.text(1065,400,this.resta,{fontFamily: 'VT323',fontSize: '68px', color: '#AC3232' });
 }
}