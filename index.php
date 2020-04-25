<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SUGOROKU GAME</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
  <link rel="stylesheet" href="responsive.css?20200302">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">
  </script>
</head>
<body>



  <div class="sugoroku-wrapper">
    <div class="container">
			<div class="title">
				<h1>すごろくゲーム</h1>
			</div>

      <div class="menu" id="menu">
        <p class="menu-text"> プレイ人数を選択してください</p>
        <div class="choice-box" onclick="onePlayer();">
          <p class="choice choice-text">1人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i></p>
        </div>
        <div class="choice-box" onclick="twoPlayer();">
          <p class="choice choice-text">2人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i><i class="fas fa-male p2"></i></p>
        </div>
        <div class="choice-box" onclick="threePlayer();">
          <p class="choice choice-text">3人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i><i class="fas fa-male p2"></i><i class="fas fa-male p3"></i></p>
        </div>
        <div class="choice-box" onclick="fourPlayer();">
          <p class="choice choice-text">4人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i><i class="fas fa-male p2"></i><i class="fas fa-male p3"></i><i class="fas fa-male p4"></i></p>
        </div>

      </div>

			<div class="game roll-dice" id="gameRollDice">

        <div class="player-turn">
          <p><span id="playerTurn"></span></p>
        </div>

        <div>
					<p id="diceBtn" class="dice-btn" onclick="rollDice1()">サイコロを振る</p>
				</div>

        <div class="diceroll-count">
          <p><span id="diceRollCount"></span></p>
        </div>

        <div class="dice-deme">
          <p>出た目：<span id="diceDeme"></span></p>
        </div>

        <div class="dice-icon">
					<img id="demeImage" src="img/1.png" name="imgdice1" alt="imgdice1">
				</div>

        <div class="current-space">
          <p><span id="currentSpace"></span></p>
        </div>

				<div class="to-goal">
					<p><span id="toGoal"></span></p>
				</div>

			</div>
			<div class="game grids" id="gameGrids">
        <div class="grid">スタート<br><span class="c-icon" id="g0"></span></div>
        <div class="grid">1<br><span class="c-icon" id="g1"></span></div>
        <div class="grid">2<br><span class="c-icon" id="g2"></span></div>
        <div class="grid">3<br><span class="c-icon" id="g3"></span></div>
        <div class="grid">4<br><span class="c-icon" id="g4"></span></div>
        <div class="grid events">5<br><span class="event c-icon" id="g5"></span></div>
        <div class="grid">6<br><span class="c-icon" id="g6"></span></div>
        <div class="grid">7<br><span class="c-icon" id="g7"></span></div>
        <div class="grid">8<br><span class="c-icon" id="g8"></span></div>
        <div class="grid">9<br><span class="c-icon" id="g9"></span></div>
        <div class="grid events">10<br><span class="event c-icon" id="g10"></span></div>
        <div class="grid">11<br><span class="c-icon" id="g11"></span></div>
        <div class="grid">12<br><span class="c-icon" id="g12"></span></div>
        <div class="grid">13<br><span class="c-icon" id="g13"></span></div>
        <div class="grid">14<br><span class="c-icon" id="g14"></span></div>
        <div class="grid events">15<br><span class="event c-icon" id="g15"></span></div>
        <div class="grid">16<br><span class="c-icon" id="g16"></span></div>
        <div class="grid">17<br><span class="c-icon" id="g17"></span></div>
        <div class="grid">18<br><span class="c-icon" id="g18"></span></div>
        <div class="grid">19<br><span class="c-icon" id="g19"></span></div>
        <div class="grid events">20<br><span class="event c-icon" id="g20"></span></div>
        <div class="grid">21<br><span class="c-icon" id="g21"></span></div>
        <div class="grid">22<br><span class="c-icon" id="g22"></span></div>
        <div class="grid">23<br><span class="c-icon" id="g23"></span></div>
        <div class="grid">24<br><span class="c-icon" id="g24"></span></div>
        <div class="grid events">25<br><span class="event c-icon" id="g25"></span></div>
        <div class="grid">26<br><span class="c-icon" id="g26"></span></div>
        <div class="grid">27<br><span class="c-icon" id="g27"></span></div>
        <div class="grid">28<br><span class="c-icon" id="g28"></span></div>
        <div class="grid">29<br><span class="c-icon" id="g29"></span></div>
        <div class="grid events">30<br><span class="event c-icon" id="g30"></span></div>
        <div class="grid">31<br><span class="c-icon" id="g31"></span></div>
        <div class="grid">32<br><span class="c-icon" id="g32"></span></div>
        <div class="grid">33<br><span class="c-icon" id="g33"></span></div>
        <div class="grid">34<br><span class="c-icon" id="g34"></span></div>
        <div class="grid events">35<br><span class="event c-icon" id="g35"></span></div>
        <div class="grid">36<br><span class="c-icon" id="g36"></span></div>
        <div class="grid">37<br><span class="c-icon" id="g37"></span></div>
        <div class="grid">38<br><span class="c-icon" id="g38"></span></div>
        <div class="grid">39<br><span class="c-icon" id="g39"></span></div>
        <div class="grid events">40<br><span class="event c-icon" id="g40"></span></div>
        <div class="grid">41<br><span class="c-icon" id="g41"></span></div>
        <div class="grid">42<br><span class="c-icon" id="g42"></span></div>
        <div class="grid">43<br><span class="c-icon" id="g43"></span></div>
        <div class="grid">44<br><span class="c-icon" id="g44"></span></div>
        <div class="grid events">45<br><span class="event c-icon" id="g45"></span></div>
        <div class="grid">46<br><span class="c-icon" id="g46"></span></div>
        <div class="grid">47<br><span class="c-icon" id="g47"></span></div>
        <div class="grid">48<br><span class="c-icon" id="g48"></span></div>
        <div class="grid">49<br><span class="c-icon" id="g49"></span></div>
        <div class="grid events">50<br><span class="event c-icon" id="g50"></span></div>
        <div class="grid">51<br><span class="c-icon" id="g51"></span></div>
        <div class="grid">52<br><span class="c-icon" id="g52"></span></div>
        <div class="grid">53<br><span class="c-icon" id="g53"></span></div>
        <div class="grid">54<br><span class="c-icon" id="g54"></span></div>
        <div class="grid events">55<br><span class="event c-icon" id="g55"></span></div>
        <div class="grid">56<br><span class="c-icon" id="g56"></span></div>
        <div class="grid">57<br><span class="c-icon" id="g57"></span></div>
        <div class="grid">58<br><span class="c-icon" id="g58"></span></div>
        <div class="grid">59<br><span class="c-icon" id="g59"></span></div>
        <div class="grid events">60<br><span class="event c-icon" id="g60"></span></div>
        <div class="grid">61<br><span class="c-icon" id="g61"></span></div>
        <div class="grid">62<br><span class="c-icon" id="g62"></span></div>
        <div class="grid">63<br><span class="c-icon" id="g63"></span></div>
        <div class="grid">64<br><span class="c-icon" id="g64"></span></div>
        <div class="grid events">65<br><span class="event c-icon" id="g65"></span></div>
        <div class="grid">66<br><span class="c-icon" id="g66"></span></div>
        <div class="grid">67<br><span class="c-icon" id="g67"></span></div>
        <div class="grid">68<br><span class="c-icon" id="g68"></span></div>
        <div class="grid">69<br><span class="c-icon" id="g69"></span></div>
        <div class="grid events">70<br><span class="event c-icon" id="g70"></span></div>
        <div class="grid">71<br><span class="c-icon" id="g71"></span></div>
        <div class="grid">72<br><span class="c-icon" id="g72"></span></div>
        <div class="grid">73<br><span class="c-icon" id="g73"></span></div>
        <div class="grid">74<br><span class="c-icon" id="g74"></span></div>
        <div class="grid events">75<br><span class="event c-icon" id="g75"></span></div>
        <div class="grid">76<br><span class="c-icon" id="g76"></span></div>
        <div class="grid">77<br><span class="c-icon" id="g77"></span></div>
        <div class="grid">78<br><span class="c-icon" id="g78"></span></div>
        <div class="grid">79<br><span class="c-icon" id="g79"></span></div>
        <div class="grid events">80<br><span class="event c-icon" id="g80"></span></div>
        <div class="grid">81<br><span class="c-icon" id="g81"></span></div>
        <div class="grid">82<br><span class="c-icon" id="g82"></span></div>
        <div class="grid">83<br><span class="c-icon" id="g83"></span></div>
        <div class="grid">84<br><span class="c-icon" id="g84"></span></div>
        <div class="grid events">85<br><span class="event c-icon" id="g85"></span></div>
        <div class="grid">86<br><span class="c-icon" id="g86"></span></div>
        <div class="grid">87<br><span class="c-icon" id="g87"></span></div>
        <div class="grid">88<br><span class="c-icon" id="g88"></span></div>
        <div class="grid">89<br><span class="c-icon" id="g89"></span></div>
        <div class="grid events">90<br><span class="event c-icon" id="g90"></span></div>
        <div class="grid">91<br><span class="c-icon" id="g91"></span></div>
        <div class="grid">92<br><span class="c-icon" id="g92"></span></div>
        <div class="grid">93<br><span class="c-icon" id="g93"></span></div>
        <div class="grid">94<br><span class="c-icon" id="g94"></span></div>
        <div class="grid events">95<br><span class="event c-icon" id="g95"></span></div>
        <div class="grid">96<br><span class="c-icon" id="g96"></span></div>
        <div class="grid">97<br><span class="c-icon" id="g97"></span></div>
        <div class="grid">98<br><span class="c-icon" id="g98"></span></div>
        <div class="grid">99<br><span class="c-icon" id="g99"></span></div>
        <div class="grid goal">ゴール<br><span class="c-icon" id="g100"></span></div>



        <div class="clear"></div>
      </div>
			<div class="clear"></div>

      <div class="game-form">
        <p>フォーム（最終的に隠す）</p>
        <form name="myform" action = "db.php" method = "post">

          <p>currentSpace1</p> <input id="inputCS1" type = "text" name ="cs1"><br/>
          <p>toGoal1</p> <input id="inputTG1" type = "text" name ="tg1"><br/>
          <p>dicerollcount1</p> <input id="inputDRC1" type = "text" name ="drc1"><br/>

          <p>currentSpace2</p> <input id="inputCS2" type = "text" name ="cs2"><br/>
          <p>toGoal2</p> <input id="inputTG2" type = "text" name ="tg2"><br/>
          <p>dicerollcount2</p> <input id="inputDRC2" type = "text" name ="drc2"><br/>

          <p>currentSpace3</p> <input id="inputCS3" type = "text" name ="cs3"><br/>
          <p>toGoal3</p> <input id="inputTG3" type = "text" name ="tg3"><br/>
          <p>dicerollcount3</p> <input id="inputDRC3" type = "text" name ="drc3"><br/>

          <p>currentSpace4</p> <input id="inputCS4" type = "text" name ="cs4"><br/>
          <p>toGoal4</p> <input id="inputTG4" type = "text" name ="tg4"><br/>
          <p>dicerollcount4</p> <input id="inputDRC4" type = "text" name ="drc4"><br/>

          <input type="submit" value="送信する">
        </form>




      </div>

    </div>
  </div>


  <script src="script.js?123">
  </script>

</body>
</html>
