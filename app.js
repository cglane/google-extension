$(document).ready(function(){

    main.init()
});

var main = {
  url:"https://www.reddit.com/r/Charleston.json",
  init:function(){
    main.initEvents();
  },
  initEvents:function(){
    main.createContent();
  },
  createContent:function(){
    $.ajax({
      url: main.url,
      method: 'GET',
      success: function (data) {
          var paragraphs = $('p');
          var h2 = $('h2');
          console.log(data);
          console.log(data.data.children.length);
          for(var i = 0; i <data.data.children.length; i++){
            var header = data.data.children[i].data.title;
            var content = data.data.children[i].data.selftext_html;
            $(h2[i]).html(header);
            $(paragraphs[i]).html(content);

            console.log(content);
            }
          }
    });
  }
};
