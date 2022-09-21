//Take mass
    let Weight=document.getElementById('mass')
    

function Sun(){
    let weight=Number(Weight.value)
    let weightonsun=weight*27.01;
    document.getElementById('sunWeight').innerText=`Your weight on Sun is ${weightonsun} kg`;
}
function Mercury(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.38;
    document.getElementById('merWeight').innerText=`Your weight on Mercury is ${finalweight} kg`;;
}
function Venus(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.91;
    document.getElementById('VenWeight').innerText=`Your weight on Venus is ${finalweight} kg`;
}
function Earth(){
    let weight=Number(Weight.value)
    let finalweight=weight*1;
    document.getElementById('earthWeight').innerText=`Your weight on Earth is ${finalweight} kg`;
}
function Mars(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.38;
    document.getElementById('marsWeight').innerText=`Your weight on Mars is ${finalweight} kg`;
}
function Jupiter(){
    let weight=Number(Weight.value)
    let finalweight=weight*2.34;
    document.getElementById('jupiterWeight').innerText=`Your weight on Jupiter is ${finalweight} kg`;
}
function Saturn(){
    let weight=Number(Weight.value)
    let finalweight=weight*1.06;
    document.getElementById('saturnWeight').innerText=`Your weight on Saturn is ${finalweight} kg`;
}
function Uranus(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.92;
    document.getElementById('uranusWeight').innerText=`Your weight on Uranus is ${finalweight} kg`;
}
function Neptune(){
    let weight=Number(Weight.value)
    let finalweight=weight*1.19;
    document.getElementById('neptuneWeight').innerText=`Your weight on Neptune is ${finalweight} kg`;
}
function Pluto(){
    let weight=Number(Weight.value)
    let finalweight=weight*0.06;
    document.getElementById('plutoWeight').innerText=`Your weight on Pluto is ${finalweight} kg`;
}