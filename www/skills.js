class Skills extends Perso {
    constructor(skillName,cpCost,strMultiplier,str,name,pv,cp,def,item) {
        super(name,pv,cp,str,def,item);
        this.skillName = skillName;
        this.cpCost= cpCost;
        this.strMultiplier = strMultiplier;

    }

    ClimHazard () {
        this.cpCost =7;
        this.skillName = Climhazard;
    }

}