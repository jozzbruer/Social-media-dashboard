const switcher = document.getElementById('switch')
const main = document.querySelector('.main')
const topp = document.querySelector('.top-patern')
const title = document.querySelector('.title')
const small = document.querySelector('.text-small')
const cards = document.querySelectorAll('.card')
const users = document.querySelectorAll('.user-name')
const followers = document.querySelectorAll('.followers-number')
const paragraph = document.querySelectorAll('p')
const textcontainer = document.querySelector('.titlebis')
switcher.addEventListener('click', () => {
    main.classList.toggle('dark')
    topp.classList.toggle('dark')     
    title.classList.toggle('dark')
    small.classList.toggle('dark')
    textcontainer.classList.toggle('dark')
    cards.forEach(card => {
        card.classList.toggle('dark')    
    })

    users.forEach(user => {
        user.classList.toggle('dark')    
    })

    
    followers.forEach(follower => {
        follower.classList.toggle('dark')    
    })

    paragraph.forEach(paragraph => {
       paragraph.classList.toggle('dark')
    })



})