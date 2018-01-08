


let Cloud = new Perso('Cloud',100,10,7,2);

let Sephiroth = new Perso('Sephiroth',150,5,9,1);

function isDead() {
    let pv = Sephiroth.pv;
    if (pv === 0) {
        Sephiroth.isDead = true;

        return 'Sephiroth is Dead !!!';
        
    }
    
};

let form = document.querySelector('form');
let attack = document.querySelector('#attack');
let skill = document.querySelector('#skill');
let item = document.querySelector('#item');

attack.addEventListener('click' , function(event){
    Sephiroth.pv = Sephiroth.pv - Cloud.str;
    console.log(`Sephiroth perd ${Cloud.str}, il lui reste ${Sephiroth.pv} pv !!!`);
    isDead();
});

/* array.forEach(element => {
    
}); */

skill.addEventListener('click' , function(event){
    console.log(Cloud.skill());
    
});

item.addEventListener('click' , function(event){
    console.log(Cloud.useItem());
    
});



