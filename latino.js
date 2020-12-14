import Personaje from './personaje.js';
export default class Latino extends Personaje {
  constructor(scene,x,y,image, dialogos) {
    super(scene,x,y,image,false,-60,-50, dialogos);
    this.name = 'Latino'       //nombre del sprite y personaje
  }   
  hablar(){    
    super.hablar()
  }    
  deformar(){
    super.deformar()
    this.setTexture('Latino');
  }
}