
// 키보드 방향키 입력 콘솔나타내기
$('.input-key').keydown(function(e){
    console.log(e)
    if( e.code === 'Arrowup'){
        console.log('up')
    }else if(e.code === 'ArrowRight') {
        console.log('right');
    }else if(e.code === 'ArrowLeft') {
        console.log('left');
    }else if(e.code === 'ArrowDown') {
        console.log('down');
    }else {
        console.log('others');
        //질문사항
        // $('.input-key').css('background-color' = 'black') 
    }
})

$('.input-key').on('keydown', function(e){
    console.log(e.code)

})

// 폼-액션-키보드 입력 작성 코드
$('#todo-form').submit(function(e){
    //추가 버튼 클릭 시 '/'사이트로 이동하는 동작을 안하게 하는 법
    e.preventDefault();
    const todo = $('input[name=todo]').val()
    console.log(todo);
    $('.todos').append(`<li>${todo}</li>`)
    //입력칸 남은 글자 삭제 코드 .val()를 쓰면 가져오는거지만 .val('')를 사용하면 값을 설정한다.
    $('input[name=todo]').val('')
})


