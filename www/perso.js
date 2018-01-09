class Perso {
    constructor(name,pv,cp,str,def,item,isDead=false) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.str = str;
        this.def = def;
        this.item = item;
        this.isDead = isDead;
    }

    attack1() {
        let str = this.str + Math.floor((Math.random() * 9) + 0);
        return str;
    }

    attack2() {
        let str = this.str + Math.floor((Math.random() * 3) + 0);
        return str;
    }

    skill() {
        let str = this.str *3 + Math.floor((Math.random() * 10) + 1);

        return str;

    }

    block() {
        let def = this.def + Math.floor((Math.random() * 4) + 0);
        let pv = this.pv + 2 + Math.floor((Math.random() * 12) + 0);

        return def;
        return pv;
    }

    useItem() {
        console.log ('Hi-potion');
    }
}