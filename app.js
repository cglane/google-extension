
var main = {
  url:"https://www.reddit.com/r/Charleston.json",
  onionUrl:"http://a.knrz.co/horoscope-api/current",
  notOnionURl:"https://www.reddit.com/r/nottheonion.json",
  init:function(){
    main.initEvents();
  },
  initEvents:function(){
    main.createContent();
    // main.onionContent();
  },

  onionContent:function(){
    var h2 = $('h2');
    var a = $('a');
    var dataIt = 0;
    $.ajax({
      url: main.onionUrl,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        for(var i = 0; i <h2.length; i++){
          if(data[dataIt].prediction != undefined){
            var header = data[dataIt].prediction;
            var sign = data[dataIt].sign;
          }else{
            header = 'hello';
            sign = "you";
          }
            if(h2[i].children[0] != undefined){
              $(h2[i]).children().html(header + '  -'+ sign.toUpperCase());
            }else{
              $(h2[i]).html(header + '-'+ sign.toUpperCase());
            };
            console.log(dataIt,'dataIt');
            console.log(data[dataIt]);
            (dataIt < data.length-1)? dataIt++ : dataIt = 0;
          }
        }
    });

  },

  createContent:function(){
    $.ajax({
      url: main.notOnionURl,
      method: 'GET',
      success: function (data) {
        var h2 = $('h2');
        var h1 = $('h1')
        var a = $('a');
        var h3 = $('h3');
        var hs = [h1,h2,h3];
        console.log(hs,'hs')
        var masterH = [];
        for(var i = 0; i < 3; i++){
          for (var j = 0; j < hs[i].length; j++) {
            masterH.push(hs[i][j]);
          }
        }
        console.log('h',masterH)
        console.log(h2.length,'h2')
        console.log(h3.length,'h3')
        var dataIt = 0;
        console.log(data.data.children,'data')
        var numHeadlines = data.data.children.length;
          for(var i = 1; i <numHeadlines; i++){
            if(data.data.children[i].data.title != undefined){
              var header = data.data.children[i].data.title;
            }else{
              header = 'hello';
              sign = "you";
            }
              if(masterH[i-1].children[0]){
                $(masterH[i-1]).children().html(header);
              }else{
                $(masterH[i-1]).html(header);
              };
              (dataIt < numHeadlines-1)? dataIt++ : dataIt = 0;
            }
            console.log(dataIt,'dataIt')
          }
    });
  }
};
(function(){
    main.init();
})();
