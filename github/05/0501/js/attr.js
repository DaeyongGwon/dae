function changeTextJs(){
    let p = document.querySelector('#text')
    p.textContent = "Js 체인지"
}
function changeTextJquery(){
    $('#text').text("Jquery 체인지")
}

function changeHtmlJs(){
    let p = document.querySelector('#html')
    console.log(p);
    p.innerHTML = '<h3>javascript</h3>'
}
function changeHtmlJquery(){
    $('#html').html('<h1>Jquery</h1>')
}