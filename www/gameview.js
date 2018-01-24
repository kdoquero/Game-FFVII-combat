class View {
    constructor() {}

     display() {
       
        let sephirothHp = document.querySelector('#barpv1');
        let sephirothHptext = document.querySelector('#barpv1text');
        let cloudHptext = document.querySelector('#barpv2text');
        let cloudHp = document.querySelector('#barpv2');
        let sephirothCp = document.querySelector('#barcp1');
        let cloudCp = document.querySelector('#barcp2');
        let cloudCptext = document.querySelector('#barcp2text');
        let sephirothCptext = document.querySelector('#barcp1text');
        let backgroundbtn = document.querySelector('#backgbtn');
    
        sephirothHptext.textContent = `PV : ${sephiroth.pv} /250`;
        cloudHptext.textContent = `PV : ${cloud.pv} /250`;
        sephirothHp.style.width = sephiroth.pv/ + "%";
        cloudHp.style.width = cloud.pv/+ "%";
        sephirothCp.style.width = sephiroth.cp + "%";
        cloudCp.style.width = cloud.cp+ "%";
        sephirothCptext.textContent = `CP: ${sephiroth.cp} /35`;
        cloudCptext.textContent = `CP: ${cloud.cp} /50`;
        skill1.setAttribute('value', `${cloud.skills[1].name} : ${cloud.skills[1].cp} cp`);
        skill2.setAttribute('value', `${cloud.skills[2].name} : ${cloud.skills[2].cp} cp`);
        skill3.setAttribute('value', `${cloud.skills[4].name} : ${cloud.skills[4].cp} cp`);
        item1.setAttribute('value', `${hiPotion.name} :${hiPotion.hp} pv`);
        item2.setAttribute('value', `${manaPot.name} :${manaPot.cp} cp`);
        skillblock.style.display ='none';
        itemblock.style.display ='none';
        cloud.overloadStats();
        sephiroth.overloadStats();
        this.showLimitBreak();
        cloud.endGame();
        sephiroth.endGame();
        logs.scrollTop = logs.scrollHeight;
        return logs;
    
    }
    showLimitBreak (){
        if (cloud.limitBreak >=255) {
            limitBreakButton.style.display ="flex";
            
        } else {
            limitBreakButton.style.display ="none";
        
        }
    }
    
    
    
    
}
