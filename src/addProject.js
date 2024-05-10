//imports

import addIconIM from "./img/icon/square-plus.svg" 

//selectors

const sideControls = document.querySelector('.side-controls')
const mainInfoDiv = document.querySelector('.main-info')

const projectHeading = document.querySelector('#projectHeading')
const taskButton = document.querySelector('.task-button')

const taskDialog = document.querySelector('#taskDialog')



let hasTaskButton = false;
//functions

export default function addProjectTab(a) {
    const projectButton = document.createElement('button')
    projectButton.classList.add('project-buttons')

    projectButton.innerHTML = `${a.title}`

    sideControls.appendChild(projectButton)

    projectButton.addEventListener('click', () => {
        addProject(a)
        console.log(a)
    })
}

function addProject(a) {
    projectHeading.innerHTML = `${a.title}`
    
    if (!hasTaskButton) {
    const addTask = document.createElement('button')
    addTask.classList.add('task-button')
    addTask.innerHTML = "Add Task <img src='./img/icon/square-plus.svg' alt='' class='add-button-img' id='addIcon'>"

    mainInfoDiv.appendChild(addTask)

    const addIcon = document.querySelector('#addIcon')
    addIcon.src = addIconIM

    hasTaskButton = true;

    addTask.addEventListener('click', () => {
        taskDialog.showModal()
    })
    }

    const projectTaskDiv = document.createElement('div')
    projectTaskDiv.classList.add('project-task')
    
}

