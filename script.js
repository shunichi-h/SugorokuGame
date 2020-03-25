
//現在のマスを定義
var currentSpace = 0;
//現在のマスのidを定義
var currentSpaceId = ("g" + currentSpace);
//ゴールまでのマス数を定義
var toGoal = 100;
//サイコロを振って得た出目を定義
var diceDeme;
//出目に応じて表示する図を定義
var demeImage = "img/1.png";
//サイコロを振るのが何回目かを定義
var diceRollCount = 1;

//定義した現在のマスを、idにcurrentSpaceがあるHTML要素に送る
document.getElementById('currentSpace').innerHTML = "現在：スタート";

//定義したゴールまでのマス数を、idにtoGoalがあるHTML要素に送る
document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal+"マス";

//定義した「出目に応じた図」を、idにdemeImageがあるHTML要素に送る
//document.getElementById('demeImage').src =  demeImage;

//定義した「サイコロを振るのが何回目か」を、idにdiceRollCountがあるHTML要素に送る
document.getElementById('diceRollCount').innerHTML = "サイコロを振ってください";

document.getElementById(currentSpaceId).innerHTML = '<i class="fas fa-running"></i>';

getdice6 = new Array(
"img/1.png",
"img/2.png",
"img/3.png",
"img/4.png",
"img/5.png",
"img/6.png");



//サイコロを振った時に実行する関数を定義
function rollDice() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  //出目に応じて表示する図のurlを定義
  //demeImage = diceDeme + '.png';
  //出目に応じて表示する図のurlを、idにdiceImageがあるHTML要素に送る
  //document.getElementById('demeImage').src =  demeImage;

  document.getElementById('diceRollCount').innerHTML = diceRollCount+"投目";
  diceRollCount ++;


  currentSpace += diceDeme;
  if(currentSpace >= 100){
    document.getElementById('currentSpace').innerHTML = "";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace+"マス目";
  }

  toGoal -= diceDeme;
  if(toGoal <= 0){
    document.getElementById('toGoal').innerHTML = "ゴールしました!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').innerHTML = '<i class="fas fa-child"></i>';
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal+"マス";
  }

  document.getElementById(currentSpaceId).innerHTML = "";
  currentSpaceId = ("g" + currentSpace);
  document.getElementById(currentSpaceId).innerHTML = '<i id="now" class="fas fa-running"></i>';

  var element = document.getElementById('now');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});


}
