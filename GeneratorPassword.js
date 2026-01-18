const btnEl=document.querySelector(".btn");
const inputEl=document.querySelector(".input");
const copyIcon=document.querySelector(".fa-copy");
const alertContainerEl=document.querySelector(".alert-container")
btnEl.addEventListener("click", ()=>{
    createpassword();
})
copyIcon.addEventListener("click", ()=>{
    copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active")
        },1000)}
    })
    
function createpassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxyz:!*$^=(){#~&@£µ%§/.?})ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength=8
    let password="";
    for(let index=0; index<passwordLength;index++){
        const element=Array[index];
        const randomNum=Math.floor(Math.random()*chars.length);
        password +=chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value=password;
    navigator.clipboard.writeText(inputEl.value);
    alertContainerEl.innerText=password +" copied!"
}
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 999);
    
    
}