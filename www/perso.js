class Perso {
    constructor(name,pv,cp,str,def,item) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.str = str;
        this.def = def;
        this.item = item;
    }

    iaAttack(user, target) {
        function randomAction(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        };
        let array = [normalAttack,useSkills,actionBlock];
        let rand = randomAction(0, 3);
    
        if (this.pv < 45 && this.item >=1) {
            useItem(user,hiPotion);
        } else {
            array[rand](user, target);
        };
    };
}