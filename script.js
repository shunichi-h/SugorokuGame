

if(pn != 0){
  document.getElementById('restart').style.display ="block";
}


function setInputValuePn(i){
  document.getElementById("playerNum").value = i;
}
function setInputValueReset(){
  document.getElementById("nextPlayer").value = 1;
  document.getElementById("inputCS1").value = 0;
  document.getElementById("inputTG1").value = 100;
  document.getElementById("inputDRC1").value = 1;
  document.getElementById("inputCS2").value = 0;
  document.getElementById("inputTG2").value = 100;
  document.getElementById("inputDRC2").value = 1;
  document.getElementById("inputCS3").value = 0;
  document.getElementById("inputTG3").value = 100;
  document.getElementById("inputDRC3").value = 1;
  document.getElementById("inputCS4").value = 0;
  document.getElementById("inputTG4").value = 100;
  document.getElementById("inputDRC4").value = 1;
}


function submitMenuForm(){
  document.menuform.submit();
}

function setInputValueCS1(){
  document.getElementById("inputCS1").value = currentSpace1;
}
function setInputValueTG1(){
  document.getElementById("inputTG1").value = toGoal1;
}
function setInputValueDRC1(){
  document.getElementById("inputDRC1").value = diceRollCount1;
}

function setInputValueCS2(){
  document.getElementById("inputCS2").value = currentSpace2;
}
function setInputValueTG2(){
  document.getElementById("inputTG2").value = toGoal2;
}
function setInputValueDRC2(){
  document.getElementById("inputDRC2").value = diceRollCount2;
}

function setInputValueCS3(){
  document.getElementById("inputCS3").value = currentSpace3;
}
function setInputValueTG3(){
  document.getElementById("inputTG3").value = toGoal3;
}
function setInputValueDRC3(){
  document.getElementById("inputDRC3").value = diceRollCount3;
}

function setInputValueCS4(){
  document.getElementById("inputCS4").value = currentSpace4;
}
function setInputValueTG4(){
  document.getElementById("inputTG4").value = toGoal4;
}
function setInputValueDRC4(){
  document.getElementById("inputDRC4").value = diceRollCount4;
}

function submitform(){
  document.myform.submit();
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
  setInputValueDRC1();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#ff3333";
  //document.getElementById('diceBtn').style.boxShadow ="0 7px #b32424";
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
  setInputValueDRC2();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#3333ff";
  //document.getElementById('diceBtn').style.boxShadow ="0 7px #2929cc";
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
  setInputValueDRC3();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#ffff33";
  //document.getElementById('diceBtn').style.boxShadow ="0 7px #cccc29";
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
  setInputValueDRC4();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#00cc00";
  //document.getElementById('diceBtn').style.boxShadow ="0 7px #009900";
}

function onePlayer(){
  playerNum = 1;
  setInputValuePn(1);
  setInputValueReset();
  submitMenuForm();
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i>';
  onePlayerAction();
}

function twoPlayer(){
  playerNum = 2;
  setInputValuePn(2);
  setInputValueReset();
  submitMenuForm();
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i><i id="now2" class="fas fa-male p2"></i>';
  onePlayerAction();
}

function threePlayer(){
  playerNum = 3;
  setInputValuePn(3);
  setInputValueReset();
  submitMenuForm();
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i><i id="now2" class="fas fa-male p2"></i><i id="now3" class="fas fa-male p3"></i>';
  onePlayerAction();
}

function fourPlayer(){
  playerNum = 4;
  setInputValuePn(4);
  setInputValueReset();
  submitMenuForm();
  document.getElementById(currentSpaceId1).innerHTML = '<i id="now1" class="fas fa-male p1"></i><i id="now2" class="fas fa-male p2"></i><i id="now3" class="fas fa-male p3"></i><i id="now4" class="fas fa-male p4"></i>';
  onePlayerAction();
}
