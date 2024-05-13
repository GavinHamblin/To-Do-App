//imports

import _ from 'lodash';
import './style.css'
import closeIconIM from "./img/icon/close.svg" 
import editIconIM from "./img/icon/edit.svg" 
import addIconIM from "./img/icon/square-plus.svg" 
import addProject from './addProject'
import addTaskToDom from './addTask'


//selectors

const closeIcon = document.querySelector('#closeIcon')
const editIcon = document.querySelector('#editIcon')
const addIcon = document.querySelector('#addIcon')
const addProjectIcon = document.querySelector('.add-project-img')

addProjectIcon.src = addIconIM
// closeIcon.src = closeIconIM
// editIcon.src = editIconIM
// addIcon.src = addIconIM

const projectDialog = document.querySelector('#projectDialog')
const taskDialog = document.querySelector('#taskDialog')

const taskTitle = document.querySelector('#task-title')
const taskDetail = document.querySelector('#task-detail')
const taskDate = document.querySelector('#task-date')
const taskContainer = document.querySelector('.task-container')

const addProjectBtn = document.querySelector('.add-button')
const projectSubmitBtn = document.querySelector('#projectSubmitBtn')
const projectCancelBtn = document.querySelector('#projectCancelBtn')
const sideControls = document.querySelector('[data-projects]')

const taskSubmitBtn = document.querySelector('#taskSubmitBtn')
const taskCancelBtn = document.querySelector('#taskCancelBtn')

const projectTitle = document.querySelector('#project-title')
const projectBtn = document.querySelectorAll('.project-buttons')



//global variables
let projectList = []


//event listeners

    //add project event
addProjectBtn.addEventListener('click', () => {
    projectDialog.showModal();
    
})

    // submit project form
projectSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    

    const newProject = createList(projectTitle.value)
    projectList.push(newProject)

    addProjectTab(newProject)
    projectDialog.close()
})

function createList(name) {
    return {id: Date.now().toString(), name: name, tasks: []}
}

    //cancel project form
projectCancelBtn.addEventListener('click', (event) => {
    event.preventDefault()
    projectDialog.close();
})

    //submit task form
    
    
    //cancel task form
taskCancelBtn.addEventListener('click', (event) => {
    event.preventDefault()
    taskDialog.close();
})



sideControls.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'button') {
        // selectedListID = e.target.dataset.listID
        console.log(projectList.title)
        addProject(projectList)
    }
})

function addProjectTab(a) {
    const projectButton = document.createElement('button')
    projectButton.classList.add('project-buttons')

    projectButton.innerHTML = `${a.title}`

    projectButton.dataset.listID = a.id

    console.log(projectList)
    console.log(a.id)

    sideControls.appendChild(projectButton)

    
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function renderProject() {
    
    projectHeading.innerHTML = `${project.name}`
    
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
    
    
    
    
}






