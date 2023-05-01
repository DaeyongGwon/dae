let ul = document.querySelector('.colors')
let li = document.createElement('li')
li.innerHTML = '마지막 자식'
ul.append(li)
function appendJs() {
}
function appendJquery() {
    $('.colors').append('<li>jQuery 마지막 자식추가</li>')
}
const article-box = document.createElement('.article-box')


function prependJs(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerHTML = '첫 자식'
    ul.prepend(li) 
}
function prependJquery(){
    $('.colors').prepend('<li>jQuery 첫번째 자식추가</li>')
}


function beforejs(){
    let green = document.querySelector('.green')
    let li = document.createElement('li')
    li.textContent = '이전 형제'
    green.before(li)
}
function beforrejQuery(){
    $('.green').before(`<li>Js before ${i}추가</li>`)
}

function afterjs(){
    let navy = document.querySelector('.avy')
    let li = document.createElement('li')
    li.textContent = '다음 형제'
    navy.after(li)
}
function afterjQuery(){
    $('.navy').after('<li>Js before 자식추가</li>')
}


function removeJs(){
    let li = document.querySelector('#li2')
    li.remove()
}
function removeJquery(){
    $('#li2').remove()
}

function emptyJs(){
    let ul = document.querySelector('.nums')
    //자바스크립트는 empty()가 존재하지 않음
    ul.innerHTML = ''
}
function emptyJquery(){
    $('.nums').empty()
}
