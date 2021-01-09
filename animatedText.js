import Stats from './dialogoStats.js';

export default class AnimatedText extends Phaser.GameObjects.Text {
    constructor(scene, text, c) {
        super(scene, Stats.xDialogTextPos, Stats.yDialogTextPos, text,
             { fontFamily: Stats.dialogFont, fontSize: Stats.dialogoSize, color: c })

        scene.add.existing(this)
        this.depth = 100
        this.setScrollFactor(0)

        let copy = this.text
        this.text = ""
        this.i = 0
        this.timer = scene.time.addEvent({
            callback: () => {
                this.text += copy[this.i]
                this.i++
            },
            repeat: copy.length - 1,
            delay: Stats.dialogSpeed,
        })

        this.visible = true
    }
}