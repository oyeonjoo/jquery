$('#myId') // <div id='myId'></div>

// 과제: class myClass DOM들을 찾아라.
$('.myClass') // css에서 class를 . 으로 표기

// 과제: name attribute value 가 surname 인 input DOM 들을 찾아라. > input이 객체이다
$('input[name="surname"]') // <input name='surname'/>

$('#contents ul.people li')
// 위 selector 에 해당하는 HTML code를 작성하라.
/*
<div id='contents'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div>
*/ // li가 원소이다, li 2개가 collection 안에 들어있다

$('a.external:first') // first sellector 때문에 맨 위의 a class가 리턴된다
/*
<a class='external'></a>
<a class='external'></a>
*/

$('li:odd') // 홀수번째 tr
/*
<ul>
    <li><li/> 0번쨰
    <li><li/> 1번쨰 --
    <li><li/> 2번쨰
    <li><li/> 3번쨰 --
</ul>
*/

$('div:visible') // 보이는 것만 찾겠다

$('div:gt(1)') //
/*
<div></div>
<div></div>
<div></div> -- 1 보다 큰
 */

$('div:animated')

$('a[rel$="thinger"]') // rel 속성이 thinger
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p') // 첫번째($)에서 div 2개가 골라지고, has로 p를 가진 것(collection)을 골라낸다
/*
<div class='foo'>
    <p></p>
</div>
<div class='foo'>
</div>
// has는 파라미터를 자식으로 가진 것을 골라낸다, has('자식')*/

$('ul li').filter('.current') // 최종으로 currnet class가 붙어있는 것을 골라낸다, li
/*
<ul>
    <li class='current'></li> --0
    <li></li> --1
</ul>
// filter는 파라미터를 속성으로 가진 것을 골라낸다 */ 

$('ul li').not('.current') // current가 아닌 것을 골라낸다, li

$('ul li').eq(1) // 1번 index의 값, <li></li>, li
// 제이쿼리의 리턴값은 컬렉션이다

$('form :button') // button like, 두가지가 컬렉션에 담겨 리턴
/*
    <form>
        <button></button>
        <input type='button'/>
    </form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked') // 체크된(마우스로 입력하는 데이터), 체크된 것들을 골라낸다
/*
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form :selected') // select 의 옵션에 해당하는 것, checked와 select에서 걸린다
/*
<select><option></option></select>
*/

$('form :enabled')
$('form :disabled')

$('form :file') // <input type='file'/>

$('form :input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button>
*/

$('form :text') // <input type='text'/> , text like

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio') // form 뒤에 space 붙인것-자식, space 없는것-나
// 과제: 위 selector에 해당하는 HTML code를 작성하라.
/*
<input type='radio' name='gender'/>
*/

$('form :reset') // <input type='reset'/>

$('form: submit') //<input type='submit'/>
