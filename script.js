
var playerNum
//現在のマス
var currentSpace1 = 0;
var currentSpace2 = 0;
var currentSpace3 = 0;
var currentSpace4 = 0;
//現在のマスのid
var currentSpaceId1 = ("g" + currentSpace1);
var currentSpaceId2 = ("g" + currentSpace2);
var currentSpaceId3 = ("g" + currentSpace3);
var currentSpaceId4 = ("g" + currentSpace4);
//ゴールまでのマス数
var toGoal1 = 100;
var toGoal2 = 100;
var toGoal3 = 100;
var toGoal4 = 100;
//サイコロを振って得た出目
var diceDeme;
//出目に応じて表示する図
var demeImage = "img/1.png";
//サイコロを振るのが何回目か
var diceRollCount1 = 1;
var diceRollCount2 = 1;
var diceRollCount3 = 1;
var diceRollCount4 = 1;
//コマが移動する数
var moveCount;

var element;

var turnTime = 2000;



//定義した現在のマスを、idにcurrentSpaceがあるHTML要素に送る
//document.getElementById('currentSpace').innerHTML = "現在：スタート";

//定義したゴールまでのマス数を、idにtoGoalがあるHTML要素に送る
//document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal+"マス";

//定義した「出目に応じた図」を、idにdemeImageがあるHTML要素に送る
////document.getElementById('demeImage').src =  demeImage;

//定義した「サイコロを振るのが何回目か」を、idにdiceRollCountがあるHTML要素に送る
//document.getElementById('diceRollCount').innerHTML = "サイコロを振ってください";

//document.getElementById(currentSpaceId).innerHTML = '<i class="fas fa-male p1"></i>';

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
function forward1(){
  var child1 = document.getElementById('now1');
  document.getElementById(currentSpaceId1).removeChild(child1);
  currentSpace1 ++;
  currentSpaceId1 = ("g" + currentSpace1);

  if(currentSpace1 >= 100){
    document.getElementById('currentSpace').innerHTML = "";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  }

  toGoal1 --;
  if(toGoal1 <= 0){
    document.getElementById('toGoal').innerHTML = "ゴールしました!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').innerHTML = '<i class="fas fa-child p1"></i>';
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";
  }
  document.getElementById(currentSpaceId1).insertAdjacentHTML('afterbegin','<i id="now1" class="fas fa-running p1"></i>');
  element = document.getElementById('now1');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 )  {
    tim = setTimeout("forward1()",500);
  }else if (document.getElementById(currentSpaceId1).classList.contains('event') == true){
    tim = setTimeout(events1,1000);
  }else if (playerNum == 1){
    tim = setTimeout(onePlayerAction,turnTime);
  }else {
    tim = setTimeout(twoPlayerAction,turnTime);
  }
}

function forward2(){
  var child2 = document.getElementById('now2');
  document.getElementById(currentSpaceId2).removeChild(child2);
  currentSpace2 ++;
  currentSpaceId2 = ("g" + currentSpace2);

  if(currentSpace2 >= 100){
    document.getElementById('currentSpace').innerHTML = "";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  }

  toGoal2 --;
  if(toGoal2 <= 0){
    document.getElementById('toGoal').innerHTML = "ゴールしました!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').innerHTML = '<i class="fas fa-child p2"></i>';
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";
  }

  document.getElementById(currentSpaceId2).insertAdjacentHTML('afterbegin','<i id="now2" class="fas fa-running p2"></i>');
  element = document.getElementById('now2');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 )  {
    tim = setTimeout("forward2()",500);
  }else if (document.getElementById(currentSpaceId2).classList.contains('event') == true){
    tim = setTimeout(events2,1000);
  }else if (playerNum <= 2){
    tim = setTimeout(onePlayerAction,turnTime);
  }else {
    tim = setTimeout(threePlayerAction,turnTime);
  }
}

function forward3(){
  var child3 = document.getElementById('now3');
  document.getElementById(currentSpaceId3).removeChild(child3);
  currentSpace3 ++;
  currentSpaceId3 = ("g" + currentSpace3);

  if(currentSpace3 >= 100){
    document.getElementById('currentSpace').innerHTML = "";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  }

  toGoal3 --;
  if(toGoal3 <= 0){
    document.getElementById('toGoal').innerHTML = "ゴールしました!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').innerHTML = '<i class="fas fa-child p3"></i>';
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";
  }

  document.getElementById(currentSpaceId3).insertAdjacentHTML('afterbegin','<i id="now3" class="fas fa-running p3"></i>');
  element = document.getElementById('now3');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 )  {
    tim = setTimeout("forward3()",500);
  }else if (document.getElementById(currentSpaceId3).classList.contains('event') == true){
    tim = setTimeout(events3,1000);
  }else if (playerNum <= 3){
    tim = setTimeout(onePlayerAction,turnTime);
  }else {
    tim = setTimeout(fourPlayerAction,turnTime);
  }
}

function forward4(){
  var child4 = document.getElementById('now4');
  document.getElementById(currentSpaceId4).removeChild(child4);
  currentSpace4 ++;
  currentSpaceId4 = ("g" + currentSpace4);

  if(currentSpace4 >= 100){
    document.getElementById('currentSpace').innerHTML = "";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  }

  toGoal4 --;
  if(toGoal4 <= 0){
    document.getElementById('toGoal').innerHTML = "ゴールしました!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').innerHTML = '<i class="fas fa-child p4"></i>';
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";
  }

  document.getElementById(currentSpaceId4).insertAdjacentHTML('afterbegin','<i id="now4" class="fas fa-running p4"></i>');
  element = document.getElementById('now4');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 )  {
    tim = setTimeout("forward4()",500);
  }else if (document.getElementById(currentSpaceId4).classList.contains('event') == true){
    tim = setTimeout(events4,1000);
  }else {
    tim = setTimeout(onePlayerAction,turnTime);
  }
}

//コマを戻す
function back1(){
  var child1 = document.getElementById('now1');
  document.getElementById(currentSpaceId1).removeChild(child1);
  currentSpace1 --;
  currentSpaceId1 = ("g" + currentSpace1);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  toGoal1 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";
  document.getElementById(currentSpaceId1).insertAdjacentHTML('afterbegin','<i id="now1" class="fas fa-running p1"></i>');
  element = document.getElementById('now1');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back1()",500);
  }else if (playerNum == 1){
    tim = setTimeout(onePlayerAction,turnTime);
  }else {
    tim = setTimeout(twoPlayerAction,turnTime);
  }
}

function back2(){
  var child2 = document.getElementById('now2');
  document.getElementById(currentSpaceId2).removeChild(child2);
  currentSpace2 --;
  currentSpaceId2 = ("g" + currentSpace2);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  toGoal2 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";
  document.getElementById(currentSpaceId2).insertAdjacentHTML('afterbegin','<i id="now2" class="fas fa-running p2"></i>');
  element = document.getElementById('now2');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back2()",500);
  }else if (playerNum <= 2){
    tim = setTimeout(onePlayerAction,turnTime);
  }else {
    tim = setTimeout(threePlayerAction,turnTime);
  }
}

function back3(){
  var child3 = document.getElementById('now3');
  document.getElementById(currentSpaceId3).removeChild(child3);
  currentSpace3 --;
  currentSpaceId3 = ("g" + currentSpace3);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  toGoal3 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";
  document.getElementById(currentSpaceId3).insertAdjacentHTML('afterbegin','<i id="now3" class="fas fa-running p3"></i>');
  element = document.getElementById('now3');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back3()",500);
  }else if (playerNum <= 3){
    tim = setTimeout(onePlayerAction,turnTime);
  }else {
    tim = setTimeout(fourPlayerAction,turnTime);
  }
}

function back4(){
  var child4 = document.getElementById('now4');
  document.getElementById(currentSpaceId4).removeChild(child4);
  currentSpace4 --;
  currentSpaceId4 = ("g" + currentSpace4);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  toGoal4 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";
  document.getElementById(currentSpaceId4).insertAdjacentHTML('afterbegin','<i id="now4" class="fas fa-running p4"></i>');
  element = document.getElementById('now4');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back4()",500);
  }else {
    tim = setTimeout(onePlayerAction,turnTime);
  }
}


//進むイベント
function eventForward1() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward1();
}

function eventForward2() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward2();
}

function eventForward3() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward3();
}

function eventForward4() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward4();
}

//戻るイベント
function eventBack1(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back1();
}

function eventBack2(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back2();
}

function eventBack3(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back3();
}

function eventBack4(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back4();
}


//イベントで進むor戻るを決定
function events1() {
  var eventNum = Math.floor(Math.random() * 2) + 1;
  if(eventNum === 1){
    eventForward1();
  }else if(eventNum === 2){
    eventBack1();
  }
}

//イベントで進むor戻るを決定
function events2() {
  var eventNum = Math.floor(Math.random() * 2) + 1;
  if(eventNum === 1){
    eventForward2();
  }else if(eventNum === 2){
    eventBack2();
  }
}

function events3() {
  var eventNum = Math.floor(Math.random() * 2) + 1;
  if(eventNum === 1){
    eventForward3();
  }else if(eventNum === 2){
    eventBack3();
  }
}

function events4() {
  var eventNum = Math.floor(Math.random() * 2) + 1;
  if(eventNum === 1){
    eventForward4();
  }else if(eventNum === 2){
    eventBack4();
  }
}


//サイコロを振った時に実行する
function rollDiceAction1() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount1+"投目";
  diceRollCount1 ++;

  moveCount = diceDeme;
  forward1();
}

function rollDiceAction2() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount2+"投目";
  diceRollCount2 ++;

  moveCount = diceDeme;
  forward2();
}

function rollDiceAction3() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount3+"投目";
  diceRollCount3 ++;

  moveCount = diceDeme;
  forward3();
}

function rollDiceAction4() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount4+"投目";
  diceRollCount4 ++;

  moveCount = diceDeme;
  forward4();
}


function rollDice1(){
  document.getElementById('diceBtn').onclick = "";
  animate();
  var rollTime = count * mSec + 100;
  setTimeout(rollDiceAction1,rollTime);
}

function rollDice2(){
  document.getElementById('diceBtn').onclick = "";
  animate();
  var rollTime = count * mSec + 100;
  setTimeout(rollDiceAction2,rollTime);
}

function rollDice3(){
  document.getElementById('diceBtn').onclick = "";
  animate();
  var rollTime = count * mSec + 100;
  setTimeout(rollDiceAction3,rollTime);
}

function rollDice4(){
  document.getElementById('diceBtn').onclick = "";
  animate();
  var rollTime = count * mSec + 100;
  setTimeout(rollDiceAction4,rollTime);
}



function onePlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice1;
  element = document.getElementById('now1');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('playerTurn').innerHTML = "プレイヤー１のターン";
  if(currentSpace1 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount1+"投目";
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#ff3333";
  document.getElementById('diceBtn').style.boxShadow ="0 7px #b32424";
}

function twoPlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice2;
  element = document.getElementById('now2');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('playerTurn').innerHTML = "プレイヤー２のターン";
  if(currentSpace2 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount2+"投目";
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#3333ff";
  document.getElementById('diceBtn').style.boxShadow ="0 7px #2929cc";
}

function threePlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice3;
  element = document.getElementById('now3');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('playerTurn').innerHTML = "プレイヤー３のターン";
  if(currentSpace3 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount3+"投目";
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#ffff33";
  document.getElementById('diceBtn').style.boxShadow ="0 7px #cccc29";
}

function fourPlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice4;
  element = document.getElementById('now4');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('playerTurn').innerHTML = "プレイヤー４のターン";
  if(currentSpace4 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount4+"投目";
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#00cc00";
  document.getElementById('diceBtn').style.boxShadow ="0 7px #009900";
}

function allPlayer(){
  document.getElementById('menu').style.display ="none";
  document.getElementById('gameRollDice').style.display ="inline-block";
  document.getElementById('gameGrids').style.display ="inline-block";
}

function onePlayer(){
  allPlayer();
  playerNum = 1;
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i>';
  onePlayerAction();
}

function twoPlayer(){
  allPlayer();
  playerNum = 2;
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i><i id="now2" class="fas fa-male p2"></i>';
  onePlayerAction();
}

function threePlayer(){
  allPlayer();
  playerNum = 3;
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i><i id="now2" class="fas fa-male p2"></i><i id="now3" class="fas fa-male p3"></i>';
  onePlayerAction();
}

function fourPlayer(){
  allPlayer();
  playerNum = 4;
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i><i id="now2" class="fas fa-male p2"></i><i id="now3" class="fas fa-male p3"></i><i id="now4" class="fas fa-male p4"></i>';
  onePlayerAction();
}
