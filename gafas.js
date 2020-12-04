import Personaje from './personaje.js';
export default class Gafas extends Personaje {
  constructor(scene,x,y,image) {
    super(scene,x,y,image,true,-60,-10);   
    this.name = 'gafas'    //nombre del sprite
  }   
  hablar(){  
    super.hablar()      
    super.cambiaVida(-4);
  }    
  deformar(){
    super.deformar()
    this.setTexture('latino');
  }
}