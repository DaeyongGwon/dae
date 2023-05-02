// 폼-액션-키보드 입력 작성 코드
$('#todo-form').submit(function(e){
    //추가 버튼 클릭 시 '/'사이트로 이동하는 동작을 안하게 하는 법
    e.preventDefault();
    const msg = $('input[name=msg]').val()
    
    console.log(msg.toUpperCase())
    console.log(msg.toUpperCase())
    console.log(msg.toUpperCase())

    //입력칸 남은 글자 삭제 코드 .val()를 쓰면 가져오는거지만 .val('')를 사용하면 값을 설정한다.
})