function text(title,text){
    var p = document.createElement('p');
    p.innerHTML = '<strong>'+title+'</strong><br>'+text;
    document.body.appendChild(p);
}

function rollDie(){
    return (Math.floor(Math.random()*6)+1);
}

function rollDice(){
    return rollDie()+rollDie();
}

const graph = document.getElementById('graph');
const gHeight = 300;

function roll(rolls){
    var count=[0,0,0,0,0,0,0,0,0,0,0];
    for(let i=0;i<rolls;i++){
        count[rollDice()-2]++;   
    }
    
    for(let i=2;i<13;i++){
        element(i,count[i-2],rolls);
    }
    return count;
}

function element(n,num,rolls){
    var temp=document.getElementById('b'+n);
    if(temp!==null){
        temp.style.height=((num/rolls)*gHeight)+'px';
    }
}

document.getElementById('rollButton').onclick = function(){
    var input=document.getElementById('input')
    var text = input.value;
    roll(parseInt(text));
}