import Personaje from './personaje.js';
export default class Latino extends Personaje {
  constructor(scene,x,y,image, dialogos) {
    super(scene,x,y,image,false,-60,-50, dialogos);
    this.name = 'latino'       //nombre del sprite
  }   
  hablar(){    
    super.hablar()
  }    
  deformar(){
    super.deformar()
    this.setTexture('latino');
  }
}