class View {
    constructor() {}
    display() {
        let persoRightPv = document.querySelector('#barpv1');
        let persoRightHpText = document.querySelector('#barpv1text');
        let persoLeftHptext = document.querySelector('#barpv2text');
        let persoLeftPv = document.querySelector('#barpv2');
        let persoRightCp = document.querySelector('#barcp1');
        let persoLeftCp = document.querySelector('#barcp2');
        let persoLeftCpText = document.querySelector('#barcp2text');
        let sephirothCpText = document.querySelector('#barcp1text');
    
        persoRightHp.textContent = `PV : ${sephiroth.pv} /200`;
        persoLeftHptext.textContent = `PV : ${cloud.pv} /275`;
        persoRightHp.style.width = sephiroth.pv/2  + "%";
        persoLeftHp.style.width = cloud.pv/2.5   + "%";
        persoRightCp.style.width = sephiroth.cp*4 + "%";
        persoLeftCp.style.width = cloud.cp*2 + "%";
        persoRightCptext.textContent = `CP: ${sephiroth.cp} /25`;
        persoLeftCptext.textContent = `CP: ${cloud.cp} /50`;
        // skill1.setAttribute('value', `${climHazard.skillName} : ${climHazard.cpCost} cp`);
        // skill2.setAttribute('value', `${meteoRain.skillName} : ${meteoRain.cpCost} cp`);
        // skill3.setAttribute('value', `${omnislash.skillName} : ${omnislash.cpCost} cp`);
        // item1.setAttribute('value', `${potion.name} : restaure ${potion.hp} pv`);
        skillblock.style.display ='none';
    
    }
}