


let Cloud = new Perso('Cloud',100,20,7,4,2);

let Sephiroth = new Perso('Sephiroth',200,10,11,2,1);

let contreTaillade = new Skills('Contre-taillade',usedCp=5);

function endGame(pvCloud,pvSephiroth) {
    if (pvSephiroth <= 0) {
        console.log("Sephiroth died");

        
    }

    if (pvCloud <= 0) {
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
    endGame(pvCloud,pvSephiroth);
});


skill.addEventListener('click' , function(event){
    let cp = Cloud.cp - contreTaillade.usedCp;
    console.log(cp);
    Sephiroth.pv = Sephiroth.pv - contreTaillade.contreTaillade(cp);
    
    Cloud.pv = Cloud.pv - Sephiroth.attack2();
    console.log(`reste ${cp} cp.`);
    console.log(`Sephiroth perd ${contreTaillade.contreTaillade(str)}, il lui reste ${Sephiroth.pv} pv !!!`);
    console.log(`Cloud perd ${Sephiroth.attack2()}, il lui reste ${Cloud.pv} pv !!!`);
    let pvSephiroth = Sephiroth.pv;
    let pvCloud = Cloud.pv;
    endGame(pvCloud,pvSephiroth);
    
    
});

block.addEventListener('click' , function(event){
    console.log('Sephiroth attaque pendant que Cloud bloque !!!');
    Cloud.pv = Cloud.pv - Sephiroth.attack2() + Cloud.block();
    let calculDef = Sephiroth.attack2() - Cloud.block();
     console.log(`Cloud perd ${Sephiroth.attack2()}, récupère ${Cloud.block()} pv, il lui reste ${Cloud.pv} pv !!!`);
     let pvCloud = Cloud.pv;
     let pvSephiroth = Sephiroth.pv;
     endGame(pvCloud,pvSephiroth);
    

    
});


/* item.addEventListener('click' , function(event){
    console.log(Cloud.useItem());
    
});
 */


