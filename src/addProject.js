//imports

import addIconIM from "./img/icon/square-plus.svg" 


//selectors


const taskContainer = document.querySelector('.task-container')
const mainTaskContainer = document.querySelector('.main-info')
const taskButtonContainer = document.querySelector('.task-button-container')



const projectHeading = document.querySelector('#projectHeading')


const taskDialog = document.querySelector('#taskDialog')

//global variables

let hasTaskButton = false;



//functions

export default function addProject(a, b) {
    projectHeading.innerHTML = ''
    a.forEach (project => {
        projectHeading.innerHTML = `${project.name}`
    
    if (!hasTaskButton) {
    const addTask = document.createElement('button')
    addTask.classList.add('task-button')
    addTask.innerHTML = "Add Task <img src='./img/icon/square-plus.svg' alt='' class='add-button-img' id='addIcon'>"

    taskButtonContainer.appendChild(addTask)

    const addIcon = document.querySelector('#addIcon')
    addIcon.src = addIconIM

    hasTaskButton = true;

    addTask.addEventListener('click', () => {
        taskDialog.showModal()
    })
    }
    // const hasNoTask = a.find(list => list.name == null)
    // console.log(hasNoTask)

    // if (hasNoTask !== 'undefined') {
    //     const projectTaskDiv = document.createElement('div')
    //     projectTaskDiv.classList.add('project-task')
    
    //     taskContainer.appendChild(projectTaskDiv)
    // }
    })
    
    
    
}





