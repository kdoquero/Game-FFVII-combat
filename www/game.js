


let Cloud = new Perso('Cloud',100,10,7,4,2);

let Sephiroth = new Perso('Sephiroth',200,5,11,2,1);

function endGame(pvSephiroth,pvCloud) {
    if (pvSephiroth == 0) {
        console.log("Sephiroth died");

        
    }

    if (pvCloud == 0) {
        console.log("Cloud died");
    }
    
};

let form = document.querySelector('form');
let attack = document.querySelector('#attack');
let skill = document.querySelector('#skill');
let block = document.querySelector('#block');
let item = document.querySelector('#item');

attack.addEventListener('click' , function(event){
    Sephiroth.pv = Sephiroth.pv - Cloud.attack1();
    Cloud.pv = Cloud.pv - Sephiroth.attack2();
    console.log(`Sephiroth perd ${Cloud.attack1()}, il lui reste ${Sephiroth.pv} pv !!!`);
    console.log(`Cloud perd ${Sephiroth.attack2()}, il lui reste ${Cloud.pv} pv !!!`);
    let pvSephiroth = Sephiroth.pv;
    let pvCloud = Cloud.pv;
    endGame(pvSephiroth,pvCloud);
});


skill.addEventListener('click' , function(event){
    Sephiroth.pv = Sephiroth.pv - Cloud.skill();
    Cloud.pv = Cloud.pv - Sephiroth.attack2();
    console.log('Climhazard !!!');
    console.log(`Sephiroth perd ${Cloud.skill()}, il lui reste ${Sephiroth.pv} pv !!!`);
    console.log(`Cloud perd ${Sephiroth.attack2()}, il lui reste ${Cloud.pv} pv !!!`);
    let pvSephiroth = Sephiroth.pv;
    let pvCloud = Cloud.pv;
    endGame(pvSephiroth,pvCloud);
    
    
});

block.addEventListener('click' , function(event){
    console.log('Sephiroth attaque pendant que Cloud bloque !!!');
    Cloud.pv = Cloud.pv - Sephiroth.attack2() + Cloud.block();
    let calculDef = Sephiroth.attack2() - Cloud.block();
     console.log(`Cloud perd ${Sephiroth.attack2()}, récupère ${Cloud.block()} pv, il lui reste ${Cloud.pv} pv !!!`);
     let pvSephiroth = Sephiroth.pv;
     let pvCloud = Cloud.pv;
     endGame(pvSephiroth,pvCloud);
    
});

/* item.addEventListener('click' , function(event){
    console.log(Cloud.useItem());
    
});
 */


