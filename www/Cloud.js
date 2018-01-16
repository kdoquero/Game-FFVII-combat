class Cloud extends Persorev {
    constructor(){
        let normalattackCloud = new Skill("attack", 0, 2, "perso1Attack");
        let climHazard = new Skill("fulguropoing", 10, 2, "perso1Attack");
        let skill3 = new Skill("fulguropoing", 10, 2, "perso1Attack");
        let skill3 = new Skill("fulguropoing", 10, 2, "perso1Attack");

        super("Cloud", 250, 50, 7, 4, 4, 250, [skill1, skill2, skill3,skill4]);
    }
}