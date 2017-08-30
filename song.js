$(function(){
    $.get('./lyric.json').then(function(object){
    let {lyric} = object
    let array = lyric.split('\n')
    let regex = /^\[(.+)\](.*)$/
    array = array.map(function(string,index){
        let matches = string.match(regex)
        if(matches){
            return{time:matches[1],word:matches[2]}
        }
    })
    let $lyric = $('.lyric')
    array.map(function(object){
        if(!object){return}
        let $p = $('<p/>')
        $p.attr('data-time',object.time).text(object.words)
        $p.appendTo($lyric.children('.lines'))
    })
  }) 
  let audio = document.createElement('audio')
  audio.src="http://dl.stream.qqmusic.qq.com/C4000027zPYs3A9fyb.m4a?fromtag=38&vkey=DAF062B24BB951B4561F9445BA2C4D7D56FFF804AB096CAC924F65118014E3AB80981DEC60112EBBFEDBD78E28E9EC9A69F71CE52FDFC775&guid=1981527532"
  audio.oncanplay = function(){
      audio.play()
      $('.disc-container').addClass('playing')
  }
  $('.pause').on('click',function(){
      audio.pause()
      $('disc-container').removeClass('playing')
  })
  $('play').on('click',function(){
      audio.play()
      $('disc-container').addClass('playing')
  })
})