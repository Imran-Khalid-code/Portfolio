import { projects } from './assests/scripts/data.js'
const projectsContainer = document.querySelector('.projects-inner')
const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')

projects.map((project) => {
	//creating each project HTML to be rendered
	console.log(project)
	//Project Container
	const projectNode = document.createElement('div')
	projectNode.classList.add('project-item')

	//Project Img
	const projectImg = document.createElement('img')
	projectImg.classList.add('project-img')
	projectImg.src = project.imgsrc

	//Project Header
	const projectHeader = document.createElement('h4')
	projectHeader.innerText = project.name

	const projectBtn = document.createElement('button')
	projectBtn.innerText = 'view more'

	projectBtn.classList.add('project-btn')

	//Append to Project container
	projectNode.appendChild(projectImg)
	projectNode.appendChild(projectHeader)
	console.log(projectNode)
	projectNode.appendChild(projectBtn)

	//Append each project to projects container

	projectsContainer.appendChild(projectNode)

	//Creating a Modal for each project

	//Modal Container
	const modal = document.createElement('div')
	modal.classList.add('modal')

	const modalContainer = document.createElement('div')
	modalContainer.classList.add('modal-container')

	//Modal Header
	const modalHeader = document.createElement('h4')
	modalHeader.innerText = project.name

	//Modal Img
	const modalImg = document.createElement('img')
	modalImg.classList.add('modal-img')
	//?
	modalImg.src = project.imgsrc

	//Modal Description
	const modalDescription = document.createElement('div')
	modalDescription.classList.add('modal-description')
	modalDescription.innerText = project.description

	//Modal button

	const modalButton = document.createElement('button')
	modalButton.classList.add('close-btn')
	modalButton.innerText = 'X'

	const btnContainer = document.createElement('div')
	btnContainer.classList.add('modal-btn-container')

	const previewLink = document.createElement('a')
	previewLink.innerText = 'preview'
	previewLink.classList.add('modal-btn')
	previewLink.classList.add('preview-btn')
	previewLink.href = project.preview
	console.log(previewLink)
	const codeLink = document.createElement('a')
	codeLink.innerText = 'code'
	codeLink.classList.add('modal-btn')
	codeLink.classList.add('code-btn')
	codeLink.href = project.link
	console.log(codeLink)
	// //Close Modal on click

	modalButton.addEventListener('click', () => {
		modal.classList.remove('active')
		overlay.classList.remove('active')
	})

	//Append all elements to modal container
	modal.appendChild(modalContainer)
	btnContainer.appendChild(previewLink)
	btnContainer.appendChild(codeLink)
	modalContainer.appendChild(modalButton)
	modalContainer.appendChild(modalHeader)
	modalContainer.appendChild(modalImg)
	modalContainer.appendChild(modalDescription)
	modalContainer.appendChild(btnContainer)

	// append modal to the main
	main.appendChild(modal)
	const displayModal = () => {
		modal.classList.add('active')
		overlay.classList.add('active')
	}
	projectImg.addEventListener('click', displayModal)

	projectBtn.addEventListener('click', displayModal)
})
