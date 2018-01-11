


let Cloud = new Perso('Cloud',175,20,7,4,2);

let Sephiroth = new Perso('Sephiroth',135,10,12,2,1);

let form = document.querySelector('form');
let attack = document.querySelector('#attack');
let skill = document.querySelector('#skill');
let block = document.querySelector('#block');
let item = document.querySelector('#item');

function contreTaillade(target,attaker) {
  let att = attaker.str *3 + Math.floor((Math.random() * 4) + 0);
  target.pv = target.pv - att;
  console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
  return target.pv;    
};

function normalAttack(target,attaker) {
    let att = attaker.str + Math.floor((Math.random() * 9) + 0);
    target.pv = target.pv - att;
    console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
    return target.pv;
};

function block(target) {
    let calcDef = target.def
    
};

function endGame(target1,target2) {
    if (target1.pv <= 0) {
        console.log(`${target1.name} died`);

        
    }
    if (target2.pv <= 0) {
        console.log(`${target2.name} died`);

        
    }

};



attack.addEventListener('click' , function(event){

    normalAttack(Sephiroth,Cloud);
    normalAttack(Cloud,Sephiroth);
    endGame(Cloud,Sephiroth);
});


skill.addEventListener('click' , function(event){
    contreTaillade(Sephiroth,Cloud);
    contreTaillade(Cloud,Sephiroth);
    endGame(Cloud,Sephiroth);
    
});

block.addEventListener('click' , function(event){
    console.log('Sephiroth attaque pendant que Cloud bloque !!!');
    Cloud.pv = Cloud.pv - Sephiroth.attack2() + Cloud.block();
    let calculDef = Sephiroth.attack2() - Cloud.block();
     console.log(`Cloud perd ${Sephiroth.attack2()}, récupère ${Cloud.block()} pv, il lui reste ${Cloud.pv} pv !!!`);
     endGame(Cloud,Sephiroth);
    

    
});


/* item.addEventListener('click' , function(event){
    console.log(Cloud.useItem());
    
});
 */


