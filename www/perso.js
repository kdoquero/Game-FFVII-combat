class Perso {
    constructor(name,pv,cp,str,def,item) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.str = str;
        this.def = def;
        this.item = item;
    }

    

    attack2() {
        let str = this.str + Math.floor((Math.random() * 3) + 0);
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