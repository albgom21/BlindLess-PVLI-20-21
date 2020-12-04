import Personaje from './personaje.js';
export default class Latino extends Personaje {
  constructor(scene,x,y,image) {
    super(scene,x,y,image,false,-60,-50);   
    this.name = 'latino'       //nombre del sprite
  }   
  hablar(){    
    super.hablar()
    alert('LATINO');      
  }    
  deformar(){
    super.deformar()
    this.setTexture('latino');
  }
}