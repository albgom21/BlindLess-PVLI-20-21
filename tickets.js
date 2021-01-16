export default class Tickets extends Phaser.GameObjects.Sprite{
    constructor (scene, x, y, numero) {
        super(scene, x, y,  'loteria');
        this.ticket = new Phaser.GameObjects.Graphics(scene);
        this.x = x;
        this.y = y;
        this.value = numero;
        scene.add.existing = this;
        this.scene.add.text(140, 695, this.value, {fontFamily: 'VT323', fontSize: '112px', color: '#ffffff' });
    }
    create(){
        this.scene.add.image(400, 400, 'loteria');
    }

}