var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 'Ud3710be49a6c6c42b9a77a0f0c299ba2',
  channelSecret: '5f7b17f8d7b277a5b39a670bc93da590',
  channelAccessToken: 'DhLEP1r9gWZ1/zZVid4aLiYPe6k5wjpDPXEQlUlqhKQDQiY2S+nf6/ryrZBwvY40oOdMJBeWEBFc13GUXv6PoRVsWb46rpn0xlBJd0JxfNRZFPkr7z3pEIjM69up7jqWigazRWvDd4iYWgptWwdIvgdB04t89/1O/w1cDnyilFU='
});

//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
  //收到文字訊息時，直接把收到的訊息傳回去
    event.reply(msg).then(function(data) {
      // 傳送訊息成功時，可在此寫程式碼
      console.log(msg);
    }).catch(function(error) {
      // 傳送訊息失敗時，可在此寫程式碼
      console.log('錯誤產生，錯誤碼：'+error);
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是', port);
});
