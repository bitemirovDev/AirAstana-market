const deleteIcon = document.querySelector('.deleteBtn')
const searchInput = document.querySelector('.searchInput')

function deleteText () {
    deleteIcon.addEventListener('click', () =>{
        searchInput.value = ""
    })
}

function showDeleteBtn (){
    searchInput.addEventListener('click', () =>{
        deleteIcon.classList.add('deleteBtnShow')
    })
}