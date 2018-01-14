class Skills extends Perso {
    constructor(skillName,cpCost,strMultiplier,str,name,pv,cp,def,item) {
        super(name,pv,cp,str,def,item);
        this.skillName = skillName;
        this.cpCost= cpCost;
        this.strMultiplier = strMultiplier;

    }
    skillattack(user,target) {
        if (user.cp < this.cpCost) {
            console.log('no cp left,attaque normale');
            let att2 = user.str;
            target.pv = target.pv -att2;
            target.iaAttack(user, target);
            console.log(`il reste ${user.cp} cp à ${user.name}.`)
            console.log(`${target.name} perd ${att2} pv, il lui reste ${target.pv}pv`);
            console.log(`il reste à ${user.name},  ${user.pv}pv`);
            
            
        } else {
        
            console.log(`${this.skillName} de ${user.name}.`)
            user.cp = user.cp - this.cpCost;
            let att = user.str*this.strMultiplier + Math.floor((Math.random() * 4) + 0);
            target.pv = target.pv - att;
            console.log(`il reste ${user.cp} cp à ${user.name}.`)
            console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`)
            return target.hp;
        }
        
        return target.hp;
        endGame(Cloud,Sephiroth);
    }
}