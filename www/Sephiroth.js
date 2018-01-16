class Sephiroth extends Persorev {
    constructor(){
        let normalattack = new Skill("Hard-Edge", 10, 2, "perso1Attack");
        let skill2 = new Skill("fulguropoing", 10, 2, "perso1Attack");
        let skill3 = new Skill("fulguropoing", 10, 2, "perso1Attack");

        super("Sephiroth", 200, 25, 12, 2, 1, 200, [skill1, skill2, skill3]);
    }
}