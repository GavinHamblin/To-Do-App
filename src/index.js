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
const taskForm = document.querySelector('#taskForm')

const taskTitle = document.querySelector('#task-title')
const taskDetail = document.querySelector('#task-detail')
const taskDate = document.querySelector('#task-date')
const taskContainer = document.querySelector('.task-container')


   

const addProjectBtn = document.querySelector('.add-button')
const projectSubmitBtn = document.querySelector('#projectSubmitBtn')
const projectCancelBtn = document.querySelector('#projectCancelBtn')
const projectsDiv = document.querySelector('[data-projects]')
const projectHeading = document.querySelector('#projectHeading')

const taskSubmitBtn = document.querySelector('#taskSubmitBtn')
const taskCancelBtn = document.querySelector('#taskCancelBtn')

const projectTitle = document.querySelector('#project-title')
const projectBtn = document.querySelectorAll('.project-buttons')


const LOCAL_STORAGE_LIST_KEY = 'project.list'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY =   'project.selectedListId'


let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

let selectedProject = projectList.find(list => list.id === selectedListID) || null

let selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)




projectsDiv.addEventListener('click', (e) => {
 
    if (e.target.tagName.toLowerCase() === 'button') {
        projectHeading.innerHTML = e.target.innerHTML
        selectedListID = e.target.dataset.listID
        selectedProject = projectList.find(list => list.id === selectedListID)
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID)
       
        clearElement(taskContainer)
        addProject(projectList)
        
        saveAndRender()
        rebuildTasks()
    }
})

export function rebuildTasks() {
    selectedProject = projectList.find(list => list.id === selectedListID)

    if (selectedProject) {
        console.log('Rebuilding tasks for project:', selectedProject);
        selectedProject.tasks.forEach(task => {
            addTaskToDom(task, selectedListID, selectedProject)
        })
    }
}

addProjectBtn.addEventListener('click', () => {
    projectDialog.showModal()
})

projectSubmitBtn.addEventListener('click', e => {
    e.preventDefault()
    const projectName = projectTitle.value

    const newProject = createProjectList(projectName)

    projectList.push(newProject)
    saveAndRender()
    projectDialog.close()
})

function createProjectList(name) {
    return {id:  Date.now().toString(), name: name, tasks: []}
}

function createTaskList(name, date, detail, projectId) {
    return {id: Date.now().toString(), name: name, date: date, detail: detail, projectId: projectId}
}

export function saveAndRender() {
    save()
    renderProject()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectList))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID)
}

function renderProject() {
    const projectHeading = document.querySelector('#projectHeading')
    clearElement(projectsDiv)
    renderProjectButtons()
    const selectedProject = projectList.find(list => list.id === selectedListID)
   
    if (selectedProject) {
        projectHeading.innerHTML = selectedProject.name
        createTasks()
    } else {
        projectHeading.innerHTML = 'Add a project!'
    }

}



function createTasks() {
    const taskTitle = document.querySelector('#task-title')
    const taskDetail = document.querySelector('#task-detail')
    const taskDate = document.querySelector('#task-date')
    const selectedProject = projectList.find(list => list.id === selectedListID)
   
    
    if(selectedProject && taskTitle.value !== '') {
        
            const newTask = createTaskList(taskTitle.value, taskDate.value, taskDetail.value, selectedListID)
            selectedProject.tasks.push(newTask)
            addTaskToDom(newTask, selectedListID, selectedProject)
        
        
    }
  
}

function renderProjectButtons() {
    projectList.forEach(button => {
        
        const projectButton = document.createElement('button')
        projectButton.dataset.listID = button.id
        projectButton.classList.add('project-buttons')
        projectButton.innerHTML = button.name
        if(button.id === selectedListID) {
            projectButton.classList.add('active-project')
        }
        projectsDiv.appendChild(projectButton)
    })
}

export function clearElement(element) {
while (element.firstChild) {
    element.removeChild(element.firstChild)
}
}


taskSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createTasks()
    taskForm.reset()
    taskDialog.close()
})

taskCancelBtn.addEventListener('click', e => {
    e.preventDefault()
    taskDialog.close()
})










