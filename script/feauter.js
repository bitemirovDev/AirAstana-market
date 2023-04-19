
function changeHeart (){
    const heartButtons = document.querySelectorAll('.heart').length;

    for(let i = 0; i < heartButtons; i++){
    document.querySelectorAll('.heart')[i].addEventListener('click', () =>{
        const heart = document.querySelectorAll('.heart')[i]
        heart.classList.toggle('fa-solid')
    })
}
}

changeHeart ()