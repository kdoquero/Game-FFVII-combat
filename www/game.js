


let Cloud = new Perso('Cloud',200,15,7,4,2);

let Sephiroth = new Perso('Sephiroth',150,10,12,2,1);

let climHazard = new Skills('Climhazard',7,4);

let potion = {
    name : 'Potion',
    hp : 50
}

let hiPotion = {
    name : 'hi-potion',
    hp : 100
}

let form = document.querySelector('form');
let attack = document.querySelector('#attack');
let skill = document.querySelector('#skill');
let block = document.querySelector('#block');
let item = document.querySelector('#item');
let skillblock = document.querySelector('.skill-list');
let skill1 = document.querySelector('#skill1');
let skill2 = document.querySelector('#skill2');
let skill3 = document.querySelector('#skill3');
let skill4 = document.querySelector('#skill4');

function useSkills(user,target) {

       user.cp = user.cp - 5;
        console.log(`Il reste ${user.cp} cp a ${user.name}`)

    if (user.cp <= 4) {
        console.log('pas assez de cp, attaque normal');
        normalAttack(Sephiroth,Cloud);

        
    }
        let att = user.str *3 + Math.floor((Math.random() * 4) + 0);
        target.pv = target.pv - att;
        console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
        return target.pv;
        normalAttack(Cloud,Sephiroth); 
    endGame(Cloud,Sephiroth);
};

function normalAttack(target,attaker) {
    let att = attaker.str + Math.floor((Math.random() * 9) + 0);
    target.pv = target.pv - att;
    console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
    return target.pv;
};

function actionBlock(target,attaker) {
    target.pv = target.pv + target.def + Math.floor((Math.random() * 5) + 0) - attaker.str;
    console.log(`${target.name} bloque ,il lui reste ${target.pv}, l'attaque de ${attaker.name} fait ${attaker.str} dégats de pv.`);
    return target.pv;
    
};

function endGame(target1,target2) {
    if (target1.pv <= 0) {
        alert(`${target1.name} died`);

        
    }
    if (target2.pv <= 0) {
        alert(`${target2.name} died`);

        
    }

};

function randomAction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function enemyAtk(target, attaker) {
    let array = [];
    let rand = randomAction(0, 4);

    if (Sephiroth.pv < 45) {
        item(Sephiroth);
    } else {
        array[rand](target, attaker);
    }
}



attack.addEventListener('click' , function(event){

    normalAttack(Sephiroth,Cloud);
    normalAttack(Cloud,Sephiroth);
    endGame(Cloud,Sephiroth);
});


skill.addEventListener('click' , function(event){
    skillblock.style.display ='flex';

    //useSkills(Cloud,Sephiroth);
    //endGame(Cloud,Sephiroth);
    
});

skill1.addEventListener('click' , function(event){
    useSkills(Cloud,Sephiroth);
    endGame(Cloud,Sephiroth);
    
});

block.addEventListener('click' , function(event){
    actionBlock(Cloud,Sephiroth);
     endGame(Cloud,Sephiroth);
    

    
});


item.addEventListener('click' , function(event){
    normalAttack(Cloud,Sephiroth);
    Cloud.useItem(potion);
    
});



