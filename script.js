

if(pn != 0 && toGoal1 != 0 && toGoal2 != 0 && toGoal3 != 0 && toGoal4 != 0){
  document.getElementById('restart').style.display ="block";
}

document.getElementById("playerNum").value = pn;
document.getElementById("nextPlayer").value = nxpl;

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

setInputValueCS1();
setInputValueTG1();
setInputValueDRC1();
setInputValueCS2();
setInputValueTG2();
setInputValueDRC2();
setInputValueCS3();
setInputValueTG3();
setInputValueDRC3();
setInputValueCS4();
setInputValueTG4();
setInputValueDRC4();


function onePlayer(){
  setInputValuePn(1);
  setInputValueReset();
  submitMenuForm();
}

function twoPlayer(){
  setInputValuePn(2);
  setInputValueReset();
  submitMenuForm();
}

function threePlayer(){
  setInputValuePn(3);
  setInputValueReset();
  submitMenuForm();
}

function fourPlayer(){
  setInputValuePn(4);
  setInputValueReset();
  submitMenuForm();
}

function restart(){
  submitMenuForm();
}
