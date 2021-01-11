import Loteria from './loteria.js';
export default class Tickets{
    constructor (scene, x, y, numero) {
        this.ticket = new Phaser.GameObjects.Graphics(scene);
        this.x = x;
        this.y = y;
        this.loteria = new Loteria();
        this.value = numero;

        this.render();
        render()
        {
        this.ticket.fillStyle(0xFFFFFF);
        this.add.image(this.x, this.y, 'loteria');
        this.ticket.fillRect(this.x, this.y, 200, 16);
        this.add.text(140, 695, this.value, {fontFamily: 'VT323', fontSize: '12px', color: '#ffffff' });
        }
        scene.add.existing(this.barra);
    }
}