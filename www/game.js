


let Cloud = new Perso('Cloud',200,15,7,4,2);

let Sephiroth = new Perso('Sephiroth',300,10,12,2,1);

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
let SephirothHp = document.querySelector('.barpv1');
let SephirothHpcontainer = document.querySelector('.barcontainer');
let gameOver = document.querySelector('#gameover');


function useSkills(user,target) {
    let att = user.str*3 + Math.floor((Math.random() * 4) + 0);
    if (user.cp < 5) {
        console.log('no cp left');
        let att2 = user.str;
        console.log(`il reste ${user.cp} cp à ${user.name}.`)
        console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`);
        console.log(`${user.name} perd ${att2}, il lui reste ${user.pv}`);
        
        
    } else {
        user.cp -= 5;
        target.pv = target.pv - att;
        let att2 = target.str + Math.floor((Math.random() * 19) + 0);
        console.log(`il reste ${user.cp} cp à ${user.name}.`)
        console.log(`${target.name} perd ${att}, il lui reste ${target.pv}`)
        console.log(`${user.name} perd ${att2}, il lui reste ${user.pv}`);
        return target.hp;
    }
    
    return target.hp;
    endGame(Cloud,Sephiroth);
    
};

function normalAttack(user,target) {
    let att = user.str + Math.floor((Math.random() * 9) + 0);
    target.pv = target.pv - att;
    console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
    return target.pv;
};

function actionBlock(user,target) {
    user.pv = user.pv + user.def*2 + Math.floor((Math.random() * 30) + 0) -target.str;
    console.log(`${user.name} bloque ,il lui reste ${user.pv}, l'attaque de ${target.name} fait ${target.str} dégats de pv.`);
    return target.pv;
    
};

function endGame(target1,target2) {
    if (target1.pv <= 0) {
        gameOver.style.display ="flex";

        
    }
    if (target2.pv <= 0) {
        alert(`${target2.name} died`);
        gameOver.style.display ="flex";

        
    }

};

function useItem(user,item) {
    if (user.item == 0) {
        console.log('no item left');
        
    }
    else {
        user.pv = user.pv + item.hp
        console.log(`used ${item.name} recovered ${item.hp} pv. ${user.pv} left.` );
    }
};

function randomAction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function iaAttack(user, target) {
    let array = [normalAttack,useSkills,actionBlock];
    let rand = randomAction(0, 3);

    if (Sephiroth.pv < 45 && Sephiroth.item >=1) {
        useItem(Sephiroth,hiPotion);
    } else {
        array[rand](user, target);
    }
}



attack.addEventListener('click' , function(event){

    iaAttack(Sephiroth,Cloud);
    normalAttack(Cloud,Sephiroth);
    display();
    endGame(Cloud,Sephiroth);
});


skill.addEventListener('click' , function(event){
    skillblock.style.display ='flex';

    //useSkills(Cloud,Sephiroth);
    //endGame(Cloud,Sephiroth);
    
});

skill1.addEventListener('click' , function(event){
    iaAttack(Sephiroth,Cloud);
    useSkills(Cloud,Sephiroth);
    endGame(Cloud,Sephiroth);
    display();
    
});

block.addEventListener('click' , function(event){
    actionBlock(Cloud,Sephiroth);
    iaAttack(Sephiroth,Cloud);
     endGame(Cloud,Sephiroth);
     display();
    

    
});


item.addEventListener('click' , function(event){
    iaAttack(Sephiroth,Cloud);
    useItem(Cloud,potion);
    display();
    
});


function display() {
    let sephirothHp = document.querySelector('.barpv1');
    let sephirothHptext = document.querySelector('.barpv1text');
    let cloudHptext = document.querySelector('.barpv2text');
    let cloudHp = document.querySelector('.barpv2');
    sephirothHptext.textContent = `PV : ${Sephiroth.pv} /300`;
    cloudHptext.textContent = `PV : ${Cloud.pv} /200`;

    
    sephirothHp.style.width = Sephiroth.pv/3  + "%";
    cloudHp.style.width = Cloud.pv/2  + "%";

    
}

display();