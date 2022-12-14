const bgImg = document.getElementById('bg-image');

window.addEventListener('scroll',()=>{
    updateImage();
})

function updateImage(){
    bgImg.style.opacity = 1 - +window.pageYOffset/550+'';
    //  console.log(1 - +window.pageYOffset/550+'');
    bgImg.style.top = +window.pageYOffset + 'px';
    bgImg.style.backgroundPositionY = -+window.pageYOffset/2 + 'px';
}