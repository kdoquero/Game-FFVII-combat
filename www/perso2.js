class perso {
    constructor(name,pv,cp, isDead=false) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.isDead = isDead;
    }

    attack() {
        console.log('attack!!!');
    }

    skill() {
        console.log('Climhazard');

    }

    item() {
        console.log ('Hi-potion');
    }
}