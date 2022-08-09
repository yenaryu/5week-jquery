$(function(){
    
    //전송버튼 클릭하면 끝낸 일에 추가
    $('.btn-submit').click(function(){ //전송 버튼을 클릭 했을 때

        text = $('.input-text').val(); //검색창의 값을 가져와서

        if(text){ //만약 검색창의 값이 입력되었을 때
            html = `<li>
        <span class="text">${text}</span>
        <button class="btn-complete">완료</button>
        <button class="btn-del">제거</button>
        </li>`;

        $('.list1').append(html) //할일list1 뒤에 html 추가
        $('.input-text').val('') // 검색창을 초기화(초기화는 밑에 있어야한다 검색창을 밑으로 빼서 초기화하는 것)

        } else{
            console.log('입력해주세요')
        } // else는 !=부정과 같다
        /* if(text !== ''){
            console.log('입력해주세요')
        } */
        
    })


    //완료버튼을 눌렀을 때 끝낸일에 추가+할일창에서 삭제
    $(document).on('click','.btn-complete',function(){
        text = $(this).siblings('.text').text(); //btn-complete(this)의 형제siblings인 text선택해서 text값 가져옴
        
        html=`<li>
        <span class="text">${text}</span></span>
        </li>`; //가져온 text값 변수로 넣어줌
        $('.list2').append(html); // 끝낸일list2뒤에 html 추가

        $(this).parent().remove(); // btn-complete의 한칸 부모인 할일(list1)에서 삭제



    })

    //제거버튼을 눌렀을 때 할일창에서 삭제
    $(document).on('click','.btn-del',function(){
        $(this).parent().remove(); //btn-del의 한칸 부모인 할일(list1)에서 삭제
    }) 
})


