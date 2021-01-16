export default class Inventario extends Phaser.Scene{
    constructor(){
         super({ key: "inventario" });
    }

    create(){
        this.add.image(640, 360, 'inventario');
        this.hola = this.add.image(1160, 100, 'botonescena').setInteractive();
        //this.hola.on('pointerdown', () => stop(this));
    }
}