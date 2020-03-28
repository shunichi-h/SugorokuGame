
//現在のマス
var currentSpace = 0;
//現在のマスのid
var currentSpaceId = ("g" + currentSpace);
//ゴールまでのマス数
var toGoal = 100;
//サイコロを振って得た出目
var diceDeme;
//出目に応じて表示する図
var demeImage = "img/1.png";
//サイコロを振るのが何回目か
var diceRollCount = 1;
//コマが移動する数
var moveCount;

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

var count = 20;	//　点滅させる回数
var mSec = 50;	//　点滅速度（1秒＝1000）

//サイコロを振るアニメーション
function animate(){
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  count--;
      if (count >=1 )  { tim = setTimeout("animate()",mSec);}
      if (count ==0 )  { count = 20 ;}
}


//コマを進める
function forward(){
  document.getElementById(currentSpaceId).innerHTML = "";
  currentSpace ++;
  currentSpaceId = ("g" + currentSpace);

  if(currentSpace >= 100){
    document.getElementById('currentSpace').innerHTML = "";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace+"マス目";
  }

  toGoal --;
  if(toGoal <= 0){
    document.getElementById('toGoal').innerHTML = "ゴールしました!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').innerHTML = '<i class="fas fa-child"></i>';
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal+"マス";
  }

  document.getElementById(currentSpaceId).innerHTML = '<i id="now" class="fas fa-running"></i>';
  var element = document.getElementById('now');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 )  { tim = setTimeout("forward()",500);}
}


//サイコロを振った時に実行する関数を定義
function rollDiceAction() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;


  document.getElementById('diceRollCount').innerHTML = diceRollCount+"投目";
  diceRollCount ++;

  moveCount = diceDeme;
  forward();



}

function rollDice(){
  animate();
  var rollTime = count * mSec + 100;
  setTimeout(rollDiceAction,rollTime);
}
