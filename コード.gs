function doPost(e) {
  var id = Number(e.parameter.data); // POSTリクエストからデータを取得
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Aさん');

  sheet.insertRows(2,1);  // 2行1列目に列を挿入する
  sheet.getRange(2, 2).setValue((new Date).toLocaleString('ja-JP'));
  sheet.getRange(2, 1).setValue((new Date).getDate().toLocaleString('ja-JP'));

  if(id == 0){ //各絵文字を入力
    sheet.getRange(2, 3).setValue("😍");
    changeSlackStatus(':heart_eyes:', 'by Google App Script.');
  }else if(id == 1){
    sheet.getRange(2, 3).setValue("😊");
    changeSlackStatus(':blush:', 'by Google App Script.');
  }else if(id == 2){ 
    sheet.getRange(2, 3).setValue("🥰");
    changeSlackStatus(':smiling_face_with_3_hearts:', 'by Google App Script.');
  }else if(id == 3){
    sheet.getRange(2, 3).setValue("😄");
    changeSlackStatus(':smile:', 'by Google App Script.');
  }else if(id == 4){
    sheet.getRange(2, 3).setValue("😙");
    changeSlackStatus(':kissing_smiling_eyes:', 'by Google App Script.');
  }else if(id == 5){
    sheet.getRange(2, 3).setValue("🥳");
    changeSlackStatus(':partying_face:', 'by Google App Script.');
  }else if(id == 6){
    sheet.getRange(2, 3).setValue("😋");
    changeSlackStatus(':yum:', 'by Google App Script.');
  }else if(id == 7){
    sheet.getRange(2, 3).setValue("😇");
    changeSlackStatus(':innocent:', 'by Google App Script.');
  }else if(id == 8){
    sheet.getRange(2, 3).setValue("😳");
    changeSlackStatus(':flushed:', 'by Google App Script.');
  }else if(id == 9){
    sheet.getRange(2, 3).setValue("😎");
    changeSlackStatus(':sunglasses:', 'by Google App Script.');
  }else if(id == 10){
    sheet.getRange(2, 3).setValue("🤭");
    changeSlackStatus(':face_with_hand_over_mouth:', 'by Google App Script.');
  }else if(id == 11){
    sheet.getRange(2, 3).setValue("😮");
    changeSlackStatus(':open_mouth:', 'by Google App Script.');
  }else if(id == 12){
    sheet.getRange(2, 3).setValue("😐");
    changeSlackStatus(':neutral_face:', 'by Google App Script.');
  }else if(id == 13){
    sheet.getRange(2, 3).setValue("🙄");
    changeSlackStatus(':face_with_rolling_eyes:', 'by Google App Script.');
  }else if(id == 14){
    sheet.getRange(2, 3).setValue("😟");
    changeSlackStatus(':worried:', 'by Google App Script.');
  }else if(id == 15){
    sheet.getRange(2, 3).setValue("😓");
    changeSlackStatus(':sweat:', 'by Google App Script.');
  }else if(id == 16){
    sheet.getRange(2, 3).setValue("😣");
    changeSlackStatus(':persevere:', 'by Google App Script.');
  }else if(id == 17){
    sheet.getRange(2, 3).setValue("🤨");
    changeSlackStatus(':face_with_raised_eyebrow:', 'by Google App Script.');
  }else if(id == 18){
    sheet.getRange(2, 3).setValue("😤");
    changeSlackStatus(':triumph:', 'by Google App Script.');
  }else if(id == 19){
    sheet.getRange(2, 3).setValue("😩");
    changeSlackStatus(':weary:', 'by Google App Script.');
  }else if(id == 20){
    sheet.getRange(2, 3).setValue("😡");
    changeSlackStatus(':rage:', 'by Google App Script.');
  }else if(id == 21){
    sheet.getRange(2, 3).setValue("🤬");
    changeSlackStatus(':face_with_symbols_on_mouth:', 'by Google App Script.');
  }else if(id == 22){
    sheet.getRange(2, 3).setValue("😱");
    changeSlackStatus(':scream:', 'by Google App Script.');
  }else if(id == 23){
    sheet.getRange(2, 3).setValue("🤢");
    changeSlackStatus(':nauseated_face:', 'by Google App Script.');
  }

  getEmoji();
  
  return ContentService.createTextOutput("Data received successfully."); // レスポンスを返す
}

function getEmoji(){
  const cc = SpreadsheetApp.getActiveSpreadsheet();
  var emoji = cc.getSheetByName('Aさん').getRange("C2").getValue();

  const sheet = cc.getSheetByName("座席");
  sheet.getRange("D10").setValue(emoji);
}

function imagerange() {

  //シートを指定
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('座席');
  
  //データテーブルを作成
  var table = Charts.newDataTable();

  //表のヘッダーとデータ範囲を取得 ※１
  var header = sheet.getRange("B2:H2").getDisplayValues();
  var values = sheet.getRange("B3:H35").getDisplayValues();

  //ヘッダー行を入力
  for(var i=0; i<header[0].length; i++) {
    table.addColumn(Charts.ColumnType.STRING, header[0][i]);
  }
  
  //データ範囲を入力
  for(var j=0; j<values.length; j++) {
    table.addRow(values[j]);
  }

  for(var row = 3; row < 36; row++ ){
    for(var column = 2; column < 9; column++){
      var bgcolor = sheet.getRange(row, column).getBackground(); //セル色
      var fontsize= sheet.getRange(row, column).getFontSize(); //フォントサイズ
      var fontweight = sheet.getRange(row, column).getFontWeight(); //太文字
      var valign = sheet.getRange(row, column).getVerticalAlignment(); //縦配置
      var halign = sheet.getRange(row, column).getHorizontalAlignment(); //横配置
      var border = sheet.getRange(row, column).getBorder(); //罫線 
      /*
      table.setRange(row-2, column-1).setValue(bgcolor);
      table.setRange(row-2, column-1).setValue(fontsize);
      table.setRange(row-2, column-1).setValue(fontweight);
      table.setRange(row-2, column-1).setValue(valign);
      table.setRange(row-2, column-1).setValue(halign);
      table.setRange(row-2, column-1).setValue(border);
      */
    }
  }

  //表グラフを作成＆画像化
  const blob = Charts.newTableChart()
    .setDataTable(table.build())
    .setDimensions(900, 800)
    .build()
    .getBlob();

  //画像をシートに挿入
  sheet.insertImage(blob, 1, 1);
}


function hourMessage() {
  //Webhook URLを以下に入力
  const postUrl = "";

  const jsonData = {
    "text":  "みんなの気持ちはどんな感じかな！？<スプレッドシートURL|ここから覗いてみよう！>"
  };
  const payload = JSON.stringify(jsonData);

  const options = {
    "method": "post",
    "contentType": "application/json",
    "payload": payload
  };
  UrlFetchApp.fetch(postUrl, options);

}

function changeSlackStatus(emoji, message) {
  const slackUserId = '';
  const slackApiToken = '';
  const slackSetStatusUrl = '';

  const headers = {
    'Authorization': 'Bearer ' + slackApiToken,
    'X-Slack-User': slackUserId,
    'COntent-Type': 'application/json; charset=utf-8'
  };
  const payload = {
    'profile': {
      'status_emoji': emoji,
      'status_text': message
    }
  };
  const options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(payload)
  };

  const res = UrlFetchApp.fetch(slackSetStatusUrl, options);
  
  const resJson = JSON.parse(res.getContentText());
  console.log(JSON.stringify(resJson, false, 2));
}


/***
 * 対象スライドのリンクしているグラフを全部更新して、指定のGoogleドライブへ保存
 * 
 * @param fileName 保存したいファイル名
 */
function exportSlideToPNG(fileName){

  const folderId = '';
  const format = 'png';

  const slideId = "";
  const presentation = SlidesApp.openById(slideId);
  const slides = presentation.getSlides();

  const slide = slides[0];
  const sheetCharts = slide.getSheetsCharts();

  // update
  for (var i = 0; i<sheetCharts.length; i++){
    sheetCharts[i].refresh();
  }

  // flush
  presentation.saveAndClose();

  // output
  const url = "https://docs.google.com/presentation/d/" + slideId + "/export/" + format;
  const options = {
    method: "get",
    headers: {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
    muteHttpExceptions: true
  };

  const res = UrlFetchApp.fetch(url, options);
  if (res.getResponseCode() === 200) {
    const folder = DriveApp.getFolderById(folderId);
    folder.createFile(res.getBlob()).setName(fileName + "." + format);  
  }
}

function statetransition(){
  const postUrl = "";
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Aさん');
  const array = new Array();
  const today = sheet.getRange("A2").getValue();
  var yesterday = sheet.getRange("A3").getValue();
  var row = 2;

  while(today == yesterday){
    array.push(sheet.getRange(row,3).getValue());
    yesterday = sheet.getRange(row,1).getValue();
    row++;
  }

  const text = array.join();
  const jsonData = {
    "text": '本日もお疲れ様でした！今日のAさんの感情遷移はこちら！' + "\n" + text
  };
  const payload = JSON.stringify(jsonData);

  const options = {
    "method": "post",
    "contentType": "application/json",
    "payload": payload
  };
  UrlFetchApp.fetch(postUrl, options);

}

function sendmessage(){
  var hour = (new Date).getHours().toLocaleString('ja-JP');

  if(hour ==  18){
    statetransition();
  }else if((hour >= 10)&&(hour <= 15)){
    hourMessage();
  }
}


