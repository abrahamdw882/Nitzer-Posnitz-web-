const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classlist.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(
        ul => {ul.classlist.remove('show')
            ul.previousElementSibling.classList.remove('rotate')
        })
}

function toggleSubMenu(button){
 button.nextElementSibling.classlist.toggle('show')

 if(sidebar.classlist.contains('close')) {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
 }
}