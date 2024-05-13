//imports

import addIconIM from "./img/icon/square-plus.svg" 
import addTaskToDom from "./addTask"

//selectors

const sideControls = document.querySelector('.side-controls')
const mainInfoDiv = document.querySelector('.main-info')
const taskContainer = document.querySelector('.task-container')

const taskTitle = document.querySelector('#task-title')
const taskDetail = document.querySelector('#task-detail')
const taskDate = document.querySelector('#task-date')

const projectHeading = document.querySelector('#projectHeading')
const taskButton = document.querySelector('.task-button')
const taskSubmitBtn = document.querySelector('#taskSubmitBtn')
const projectTask = document.querySelector('.project-task')

const taskDialog = document.querySelector('#taskDialog')

//global variables

let hasTaskButton = false;

let taskList  = []

//functions

export default function addProject(a) {
    a.forEach (project => {
        projectHeading.innerHTML = `${project.title}`
    
    if (!hasTaskButton) {
    const addTask = document.createElement('button')
    addTask.classList.add('task-button')
    addTask.innerHTML = "Add Task <img src='./img/icon/square-plus.svg' alt='' class='add-button-img' id='addIcon'>"

    taskContainer.appendChild(addTask)

    const addIcon = document.querySelector('#addIcon')
    addIcon.src = addIconIM

    hasTaskButton = true;

    addTask.addEventListener('click', () => {
        taskDialog.showModal()
    })
    }

    if (!project.tasks == null) {
        const projectTaskDiv = document.createElement('div')
        projectTaskDiv.classList.add('project-task')
    
        taskContainer.appendChild(projectTaskDiv)
    }
    })
    
    
    
}





