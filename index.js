const openBtn = document.querySelector("button");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");

openBtn.addEventListener('click',openModal);
function openModal(){
    modal.style.display = 'grid';
}


closeBtn.addEventListener('click',closeModal);
function closeModal(){
   modal.classList.add('close-modal-animation');
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.reload();
    },500);
}


modal.addEventListener('click', function(a){
    if(a.target.classList.contains('modal')){
        closeModal(); 
    }
})

form.addEventListener('submit', submitform);
function submitform(){
    const card = document.querySelector('.card');
    card.innerHTML= "<h1>Thanks for your subscription</h1>";
    setTimeout(() => {
        closeModal();  
    }, 3000);
}