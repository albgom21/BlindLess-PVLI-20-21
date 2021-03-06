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
    this.datosInventario = datos.datosInventario;
    this.puntosAnt = datos.puntos;
    this.boletoG = datos.boletoganador;
  }

  create() {         
    //Mapa
    this.cameras.main.fadeIn(1500); 
    //poner en stop la escena anterior
    this.scene.stop(this.antEscena);
    const mapa = this.add.image(640, 360, 'mapa').setInteractive();
    this.cameras.main.once('camerafadeincomplete', () => {
      mapa.on('pointerdown', () => {this.scene.launch(this.proxEscena,{vidaMax:this.vida, datosInventario:this.datosInventario, puntos: this.puntosAnt,boletoganador: this.boletoG})});
  });
   
    
    //Texto puntos y vidas
    //Segun la proxEscena poner el circulo acorde con ifs
    //Para la izq x = 528
    //Para la derecha x = 750
    //Para el medio x =632
    if(this.proxEscena ==='calle1'){
      this.add.image(528,625,'circulo');
    }
    else if(this.proxEscena ==='libreria'){
      this.add.image(750,625,'circulo');
    }
    else if(this.proxEscena ==='taberna1'){
      this.add.image(632,589,'circulo');
    }
    else if(this.proxEscena ==='taberna2'){
      this.add.image(632,527,'circulo');
    }
    else if(this.proxEscena ==='ministerio1'){
      this.add.image(528,483,'circulo');
    }
    else if(this.proxEscena ==='bunyoleria'){
      this.add.image(750,503,'circulo');
    }
    else if(this.proxEscena ==='ministerio2'){
      this.add.image(750,440,'circulo');
    }
    else if(this.proxEscena ==='calabozo'){
      this.add.image(632,427,'circulo');
    }
    else if(this.proxEscena ==='casa2sp' || this.proxEscena ==='casa2cp'){
      this.add.image(528,385,'circulo');
    }
    else if(this.proxEscena ==='ministerio3casa' || this.proxEscena === 'ministerio3calabozo'){
      this.add.image(632,354,'circulo');
    }
    else if(this.proxEscena ==='taberna3'){
      this.add.image(632,271,'circulo');
    }
    else if(this.proxEscena ==='calle2'){
      this.add.image(632,197,'circulo');
    }
    else if(this.proxEscena ==='calle3'){
      this.add.image(750,158,'circulo');
    }
    else if(this.proxEscena ==='casa3'){
      this.add.image(632,114,'circulo');
    }
    else if(this.proxEscena ==='taberna4muerto' || this.proxEscena ==='taberna4nomuertoloteria' || this.proxEscena ==='taberna4nomuertonoloteria'){
      this.add.image(632,47,'circulo');
    }
    
    const r = this.add.image(1092,200,'rectangulo');
    const n = this.add.text(1000, 100, this.nombreEscena, { fontFamily: 'VT323',fontSize: '82px', color: '#e09b41' });
    this.add.text(1010, 530, this.vida+'/100', { fontFamily: 'VT323',fontSize: '72px', color: '#edab07' });
    this.add.text(1075,310,this.suma,{fontFamily: 'VT323',fontSize: '68px', color: '#558722' });
    this.add.text(1070,400,this.resta,{fontFamily: 'VT323',fontSize: '68px', color: '#AC3232' });
    Phaser.Display.Align.In.Center(n,r);
 }
}