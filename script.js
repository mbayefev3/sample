const button = document.querySelector('#enter')
const input = document.querySelector('#userInput')



const li = document.querySelectorAll('li')


const toRemoveLi = (li) => {
    const button = document.createElement('button')
    button.textContent = 'delete'

    li.appendChild(button)
    button.addEventListener('click', (e) => {

        li.remove()
    })
    li.addEventListener('click', (e) => {
        li.classList.toggle('done')


    })
}

li.forEach(li => {


    toRemoveLi(li)
})

const onAddedInput = () => {

    const li = document.createElement('li')
    const button = document.createElement('button')

    button.textContent = 'delete'
    li.textContent = input.value

    li.addEventListener('click', (e) => {

        li.classList.toggle('done')


    })

    li.appendChild(button)

    button.addEventListener('click', (e) => {

        li.remove()
    })

    document.querySelector('ul').appendChild(li)

    input.value = ''
}

onButtonClick = () => {
    if (input.value !== '') {
        onAddedInput()
    }
}

button.addEventListener('click', onButtonClick)


// we use keypress
onKeyPress = (e) => {
    if (input.value !== '' && e.keyCode === 13) {
        onAddedInput()
    }

}

input.addEventListener('keypress', onKeyPress)
