import closeIconIM from "./img/icon/close.svg" 
import editIconIM from "./img/icon/edit.svg"


const mainInfoDiv = document.querySelector('.main-info')
const taskContainer = document.querySelector('.task-container')




export default function addTaskToDom(a) {
    const projectTaskDiv = document.createElement('div')
    projectTaskDiv.classList.add('project-task')
    

    const mainTaskDiv = document.createElement('div')
    mainTaskDiv.classList.add('task-main')

    const taskTitle = document.createElement('span')
    taskTitle.innerHTML = `${a.title}`

    const notherDiv = document.createElement('div')

    const date = document.createElement('span')
    date.innerHTML = `Due: ${a.date}`

    const editButton = document.createElement('img')
    editButton.src = editIconIM

    const deleteButton = document.createElement('img')
    deleteButton.src = closeIconIM

    const detailDiv = document.createElement('div')
    detailDiv.classList.add('project-details')

    const detail = document.createElement('p')
    detail.classList.add('hidden-details')
    detail.innerHTML = `${a.details}`


    let clicked = false
    projectTaskDiv.addEventListener('click', () => {
        
        if (!clicked) {
            detail.style.display = 'block'
            clicked = true
        } else {
            detail.style.display = 'none'
            clicked = false
        }
        
    })

    

    taskContainer.appendChild(projectTaskDiv)
    projectTaskDiv.appendChild(mainTaskDiv)
    mainTaskDiv.appendChild(taskTitle)
    mainTaskDiv.appendChild(notherDiv)
    notherDiv.appendChild(date)
    notherDiv.appendChild(editButton)
    notherDiv.appendChild(deleteButton)
    projectTaskDiv.appendChild(detail)

    deleteButton.addEventListener('click', () => {
        taskContainer.removeChild(projectTaskDiv)
    })
}

