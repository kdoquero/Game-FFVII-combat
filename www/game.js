


let Cloud = new Perso('Cloud',275,50,7,4,4,250,0);

let Sephiroth = new Perso('Sephiroth',200,25,12,2,1,200,1);

let climHazard = new Skills('Climhazard',5,4);
let meteoRain = new Skills('Meteorain',22,9);
let omnislash = new Skills('Omnislash',45,14);

let potion = {
    name : 'Potion',
    hp : 50
}

let hiPotion = {
    name : 'hi-potion',
    hp : 100
}

let manaPot = {
    name : 'Ether',
    cp : 25
}

let form = document.querySelector('form');
let attack = document.querySelector('#attack');
let skill = document.querySelector('#skill');
let block = document.querySelector('#block');
let item = document.querySelector('#item');
let skillblock = document.querySelector('.skill-list');
let itemblock = document.querySelector('.item-list');
let skill1 = document.querySelector('#skill1');
let skill2 = document.querySelector('#skill2');
let skill3 = document.querySelector('#skill3');
let skill4 = document.querySelector('#skill4');
let item1 = document.querySelector('#item1');
let item2 = document.querySelector('#item2');
let item3 = document.querySelector('#item3');
let item4 = document.querySelector('#item4');
let SephirothHp = document.querySelector('.barpv1');
let SephirothHpcontainer = document.querySelector('.barcontainer');
let gameOver = document.querySelector('#gameover');
let containerPerso = document.querySelector('.container-perso');
let perso1 = document.querySelector('.perso1');
let perso2 = document.querySelector('.perso2');
let audio = document.querySelector('audio');

function useSkills(user,target) {
    if (user.cp < 5) {
        console.log('no cp left');
        let att2 = user.str;
        target.pv = target.pv -att2;
        console.log(`il reste ${user.cp} cp à ${user.name}.`)
        console.log(`${target.name} perd ${att2} pv, il lui reste ${target.pv}pv`);
        console.log(`il reste à ${user.name},  ${user.pv}pv`);
        
        
    } else {
        animationatk(user);
        console.log(`contre-taillade de ${user.name}.`)
        user.cp -= 5;
        let att = user.str*4 + Math.floor((Math.random() * 4) + 0);
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

function animationatk(user) {
    if (user == Cloud){
        perso1.setAttribute('class', 'perso1atk');
        containerPerso.style.justifyContent = "center";
        perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', 'perso1');
            containerPerso.style.justifyContent = "space-around";
            
        });
        
    } 
    if (user == Sephiroth) {
        containerPerso.style.justifyContent = "center";
        perso2.setAttribute('class', 'perso2atk');
    perso2.addEventListener('animationend', function() {
        perso2.setAttribute('class', 'perso2');
        containerPerso.style.justifyContent = "space-around";
    });   
    }   
}

function animationAtkSkill(user) {
    if (user == Cloud){
        perso1.setAttribute('class', 'perso1skill');
        containerPerso.style.justifyContent = "center";
        perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', 'perso1');
            containerPerso.style.justifyContent = "space-around";
            
        });
        
    } 
    if (user == Sephiroth) {
        containerPerso.style.justifyContent = "center";
        perso2.setAttribute('class', 'perso2skill');
    perso2.addEventListener('animationend', function() {
        perso2.setAttribute('class', 'perso2');
        containerPerso.style.justifyContent = "space-around";
    });   
    }   
}

function animationAtkSkill2(user) {
    if (user == Cloud){
        perso1.setAttribute('class', 'perso1skill2');
        containerPerso.style.justifyContent = "center";
        perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', 'perso1');
            containerPerso.style.justifyContent = "space-around";
            
        });
        
    } 
    if (user == Sephiroth) {
        containerPerso.style.justifyContent = "center";
        perso2.setAttribute('class', 'perso2skill2');
    perso2.addEventListener('animationend', function() {
        perso2.setAttribute('class', 'perso2');
        containerPerso.style.justifyContent = "space-around";
    });   
    }   
}

function animationAtkSkill3(user) {
    if (user == Cloud){
        perso1.setAttribute('class', 'perso1skill3');
        containerPerso.style.justifyContent = "center";
        perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', 'perso1');
            containerPerso.style.justifyContent = "space-around";
            
        });
        
    } 
    if (user == Sephiroth) {
        containerPerso.style.justifyContent = "center";
        perso2.setAttribute('class', 'perso2skill3');
    perso2.addEventListener('animationend', function() {
        perso2.setAttribute('class', 'perso2');
        containerPerso.style.justifyContent = "space-around";
    });   
    }   
}



function animationdef(user) {
        if (user == Cloud){
            perso1.setAttribute('class', 'perso1def');
            perso1.addEventListener('animationend', function() {
                perso1.setAttribute('class', 'perso1');
                
            });
            
        } 
        if (user == Sephiroth) {
            perso2.setAttribute('class', 'perso2def');
        perso2.addEventListener('animationend', function() {
            perso2.setAttribute('class', 'perso2');
        });   
        }   
    
}

function animationItem(user) {
    if (user == Cloud){
        perso1.setAttribute('class', 'perso1item');
        perso1.addEventListener('animationend', function() {
            perso1.setAttribute('class', 'perso1');
            
        });
        
    } 
    if (user == Sephiroth) {
        perso2.setAttribute('class', 'perso2item');
    perso2.addEventListener('animationend', function() {
        perso2.setAttribute('class', 'perso2');
    });   
    }   

}

function normalAttack(user,target) {
    animationatk(user);
    let att = user.str + Math.floor((Math.random() * 9) + 0);
    target.pv = target.pv - att;
    console.log(`${target.name} perd ${att} pv, il lui reste ${target.pv} pv !!!`);
    return target.pv;
};

function actionBlock(user,target) {
    animationdef(user);
    if (user.hp >= user.maxPV)  {
        user.hp = user.maxPV;
        
    }
    user.pv = user.pv + user.def*2 + Math.floor((Math.random() * 40) + 0) -target.str;
    user.cp = user.cp + Math.floor((Math.random() * 3) + 1)
    console.log(`${user.name} bloque ,il lui reste ${user.pv}, l'attaque de ${target.name} fait ${target.str} dégats de pv.`);
    return target.pv;
    endGame(Cloud,Sephiroth);
    
};

function endGame(target1,target2) {
    if (target1.pv <= 0) {
        perso1.setAttribute('class', 'perso1dead');
        console.log(`${target1.name} died`);
        
        //gameOver.style.display ="flex";

        
    }
    if (target2.pv <= 0) {
        perso2.setAttribute('class', 'perso2dead');
        console.log(`${target2.name} died`);
        //gameOver.style.display ="flex";

        
    }

};

function useItem(user,item) {
    if (user.item == 0) {
        item1.style.display ='none';
        item2.style.display ='none';
        item3.style.display ='none';
        item4.style.display ='none';
        console.log('no item left');

        
    }

    if (user.hp >= user.maxPV)  {
        user.hp = user.maxPV;
        
    } else {
        
        user.pv = user.pv + item.hp
        user.item--
        console.log(`used ${item.name} recovered ${item.hp} pv. ${user.pv} left.` );
        animationItem(user);
    }
};

function randomAction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/* function iaAttack(user, target) {
    function randomAction(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    let array = [normalAttack,useSkills,actionBlock];
    let rand = randomAction(0, 3);

    if (Sephiroth.pv < 45 && Sephiroth.item >=1) {
        useItem(Sephiroth,hiPotion);
    } else {
        array[rand](user, target);
    };
}; */



attack.addEventListener('click' , function(event){
  

    Sephiroth.iaAttack(Sephiroth,Cloud);
    normalAttack(Cloud,Sephiroth);
    display();
    endGame(Cloud,Sephiroth);
    
});


skill.addEventListener('click' , function(event){
    if (skillblock.style.display =='flex') {
        skillblock.style.display ='none';
        
    }else {
        skillblock.style.display ='flex';
    }
    
    
});

skill1.addEventListener('click' , function(event){
    
    Sephiroth.iaAttack(Sephiroth,Cloud);
    animationAtkSkill(Cloud);
    climHazard.skillattack(Cloud,Sephiroth);
    
    endGame(Cloud,Sephiroth);
    display();
    
});

skill2.addEventListener('click' , function(event){
    animationAtkSkill2(Cloud);
    Sephiroth.iaAttack(Sephiroth,Cloud);
    meteoRain.skillattack(Cloud,Sephiroth);
    
    endGame(Cloud,Sephiroth);
    display();
    
});

skill3.addEventListener('click' , function(event){
    animationAtkSkill3(Cloud);
    Sephiroth.iaAttack(Sephiroth,Cloud);
    omnislash.skillattack(Cloud,Sephiroth);
   
    endGame(Cloud,Sephiroth);
    display();
    
});

block.addEventListener('click' , function(event){
    actionBlock(Cloud,Sephiroth);
    Sephiroth.iaAttack(Sephiroth,Cloud);
     endGame(Cloud,Sephiroth);
     display();
    

    
});


item.addEventListener('click' , function(event){
    if (itemblock.style.display =='flex') {
        itemblock.style.display ='none';
        
    }else {
        itemblock.style.display ='flex';
    }
});

item1.addEventListener('click' , function(event){
    Sephiroth.iaAttack(Sephiroth,Cloud);
    useItem(Cloud,potion);
    display();
    
});


function display() {
    let sephirothHp = document.querySelector('#barpv1');
    let sephirothHptext = document.querySelector('#barpv1text');
    let cloudHptext = document.querySelector('#barpv2text');
    let cloudHp = document.querySelector('#barpv2');
    let sephirothCp = document.querySelector('#barcp1');
    let cloudCp = document.querySelector('#barcp2');
    let cloudCptext = document.querySelector('#barcp2text');
    let sephirothCptext = document.querySelector('#barcp1text');

    sephirothHptext.textContent = `PV : ${Sephiroth.pv} /200`;
    cloudHptext.textContent = `PV : ${Cloud.pv} /275`;
    sephirothHp.style.width = Sephiroth.pv/2  + "%";
    cloudHp.style.width = Cloud.pv/2.5   + "%";
    sephirothCp.style.width = Sephiroth.cp*4 + "%";
    cloudCp.style.width = Cloud.cp*2 + "%";
    sephirothCptext.textContent = `CP: ${Sephiroth.cp} /25`;
    cloudCptext.textContent = `CP: ${Cloud.cp} /50`;
    skill1.setAttribute('value', `${climHazard.skillName} : ${climHazard.cpCost} cp`);
    skill2.setAttribute('value', `${meteoRain.skillName} : ${meteoRain.cpCost} cp`);
    skill3.setAttribute('value', `${omnislash.skillName} : ${omnislash.cpCost} cp`);
    item1.setAttribute('value', `${potion.name} : restaure ${potion.hp} pv`);
    skillblock.style.display ='none';

}

display();