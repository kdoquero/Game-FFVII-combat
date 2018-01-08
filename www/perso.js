class Perso {
    constructor(name,pv,cp,str,item,isDead=false) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.str = str;
        this.item = item;
        this.isDead = isDead;
    }

    attack() {
    
    }

    skill() {
        console.log('Climhazard');

    }

    useItem() {
        console.log ('Hi-potion');
    }
}