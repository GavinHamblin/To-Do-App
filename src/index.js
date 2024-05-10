//imports

import _ from 'lodash';
import './style.css'
import closeIconIM from "./img/icon/close.svg" 
import editIconIM from "./img/icon/edit.svg" 
import addIconIM from "./img/icon/square-plus.svg" 
import addProjectTab from './addProject'
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

const addProjectBtn = document.querySelector('.add-button')
const projectSubmitBtn = document.querySelector('#projectSubmitBtn')
const projectCancelBtn = document.querySelector('#projectCancelBtn')

const taskSubmitBtn = document.querySelector('#taskSubmitBtn')
const taskCancelBtn = document.querySelector('#taskCancelBtn')

const projectTitle = document.querySelector('#project-title')
const projectBtn = document.querySelectorAll('.project-buttons')

const taskTitle = document.querySelector('#task-title')
const taskDetail = document.querySelector('#task-detail')
const taskDate = document.querySelector('#task-date')

//objects
let projectList = []

let taskList  = []

function Project(title) {
    this.title = title;
    
}

function Task(title, date, details) {
    this.title = title
    this.date = date
    this.details = details
}

//event listeners

    //add project event
addProjectBtn.addEventListener('click', () => {
    projectDialog.showModal();
    
})

    //project form buttons
projectSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const newProject = new Project(projectTitle.value)
    projectList.push(newProject)

    addProjectTab(newProject)
    projectDialog.close()
})

projectCancelBtn.addEventListener('click', (event) => {
    event.preventDefault()
    projectDialog.close();
})

    //task form buttons
taskSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const newTask = new Task(taskTitle.value, taskDate.value, taskDetail.value)
    taskList.push(newTask)

    console.log(newTask)
    addTaskToDom(newTask)
    taskDialog.close()
})

taskCancelBtn.addEventListener('click', (event) => {
    event.preventDefault()
    taskDialog.close();
})




