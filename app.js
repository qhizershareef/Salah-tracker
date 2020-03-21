const form= document.querySelector('form');
const id1=form.querySelector('#customSwitch1');
const id2=form.querySelector('#customSwitch2');
const id3=form.querySelector('#customSwitch3');
const id4=form.querySelector('#customSwitch4');
const id5=form.querySelector('#customSwitch5');
//console.log(id1)
let arr=[id1,id2,id3,id4,id5];
arr.forEach((id,index)=>{
    console.log(id);
    CheckValue(id);
})

function CheckValue(num){
    num.addEventListener('click',()=>{
        console.log('key pressed')
        if(num.value=='off'){
            num.value='on';
            console.log(num.value);
        }
        else{
            num.value='off';
            console.log(num.value);
        }
    })
}
//take the final data from the user
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=[id1.name,id2.name,id3.name,id4.name,id5.name]
    const arr=[id1.value,id2.value,id3.value,id4.value,id5.value];
    console.log(name)
    console.log(arr);
    FinalFunction(name,arr);
});

function FinalFunction(name,arr){
    const temparr=['','','','',''];
    arr.forEach((check,index)=>{
        if(check=='off'){
            temparr[index]= name[index]+' not prayed';
        }
        else{
            temparr[index]= name[index]+' prayed';
        }
    })
    console.log(temparr);
    alert(temparr);
    addInToFirebase(temparr);
}
console.log(id1.value);
//console.log(id2.value);