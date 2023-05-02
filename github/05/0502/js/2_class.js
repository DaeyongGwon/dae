//클래스 추가
function addClass() {
    $('.origin-class').addClass('add-class')
}
//js클래스 추가
function addClassJs() {
    let p = document.querySelector(".origin-class")
    p.classList.add('add-class')
}
//클래스 삭제
function removeClass() {
    $('.origin-class').removeClass('origin-class')
}
//js클래스 삭제
function removeClassJs() {
    let p = document.querySelector(".origin-class")
    p.classList.remove('origin-class')
}
//클래스 유무 확인
function hasClass() {
    console.log($('.origin-class').hasClass('add-class'))
}
//js클래스 유무 확인
function hasClassJs() {
    let p = document.querySelector(".origin-class")
    console.log(p.classList.contains('origin-class'))
}
//클래스 토글
function toggleClass() { 
    $('.origin-class').toggleClass('add-class')
}
//js클래스 토글
function toggleClassJs() {
    let p = document.querySelector(".origin-class")
    p.classList.toggle('add-class')
}
