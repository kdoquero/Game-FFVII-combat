class Persorev {
    constructor(name,pv,cp,str,def,item,maxPv,id,skills = []) {
        this.name = name;
        this.pv = pv;
        this.cp = cp;
        this.str = str;
        this.def = def;
        this.item = item;
        this.maxPv = maxPv;
        this.skills = skills;
    }

    normalAttack(target,normalAttack){
        let att = this.str + Math.floor((Math.random() * 9) + 0);
        target.pv = target.pv - att;
        console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        return target.pv;

    }

    ClimHazard(target,climHazard) {
        if (this.cp < climHazard.cp) {
            console.log('no cp left,attaque normale');
            let att = this.str;
            target.pv = target.pv - att;
            target.iaAttack(user, target);
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${this.name},  ${this.pv}pv`);
            animationatk(user);
            
            
        } else {
        
            console.log(`${climHazard.name} de ${this.name}.`)
            this.cp = this.cp - C;
            let att = this.str*climHazard.str+ Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${this.cp} cp à ${this.name}.`)
            console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`)
            return target.hp;
            animationAtkSkill(user);
        }
        
        return target.hp;
        endGame(Cloud,Sephiroth);
    }

}
