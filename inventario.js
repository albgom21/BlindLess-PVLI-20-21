export default class Inventario{
    constructor(scene, x, y){
        this.inventario = new Phaser.GameObjects.Graphics(scene);
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.render();
        scene.add.existing(this.inventario);
    }

    render(){
        this.inventario.lineStyle(0xFFFFFF);
        this.inventario.fillStyle(0xFFFFFF);
        // Crea un rectángulo en la posición x, y y del tamaño 50, 20.
        this.inventario.strokeRect(this.x, this.y, 50, 20);
    }
}