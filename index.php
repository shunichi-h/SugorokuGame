<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SUGOROKU GAME</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="stylesheet.css?1234">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">
  </script>
</head>
<body>

  <?php
    try {
      $pdo = new PDO ( 'mysql:host=us-cdbr-east-06.cleardb.net;dbname=heroku_23246dfcd368977;charset=utf8','b0d6d5442f2d1c', 'b723a602');
      //print 'ゲームの進行状況を保存しました。';
    } catch ( PDOException $e ) {
      print "接続エラー:{$e->getMessage()}";
    }

    if(isset($_POST["plnm"])){
      $pn = $_POST["plnm"];
    }else{
      foreach ($pdo->query('select playernum from playernumber2') as $row) {
        $pn = "$row[playernum]";
      }
    }

    foreach ($pdo->query('select nextplayer from playernumber2') as $row) {
    $nxpl = "$row[nextplayer]";
    }

    foreach ($pdo->query('select currentspace from sugoroku2 where player = 1') as $row) {
    $cs1 = "$row[currentspace]";
    }
    foreach ($pdo->query('select currentspace from sugoroku2 where player = 2') as $row) {
    $cs2 = "$row[currentspace]";
    }
    foreach ($pdo->query('select currentspace from sugoroku2 where player = 3') as $row) {
    $cs3 = "$row[currentspace]";
    }
    foreach ($pdo->query('select currentspace from sugoroku2 where player = 4') as $row) {
    $cs4 = "$row[currentspace]";
    }

    foreach ($pdo->query('select togoal from sugoroku2 where player = 1') as $row) {
    $tg1 = "$row[togoal]";
    }
    foreach ($pdo->query('select togoal from sugoroku2 where player = 2') as $row) {
    $tg2 = "$row[togoal]";
    }
    foreach ($pdo->query('select togoal from sugoroku2 where player = 3') as $row) {
    $tg3 = "$row[togoal]";
    }
    foreach ($pdo->query('select togoal from sugoroku2 where player = 4') as $row) {
    $tg4 = "$row[togoal]";
    }

    foreach ($pdo->query('select dicerollcount from sugoroku2 where player = 1') as $row) {
    $drc1 = "$row[dicerollcount]";
    }
    foreach ($pdo->query('select dicerollcount from sugoroku2 where player = 2') as $row) {
    $drc2 = "$row[dicerollcount]";
    }
    foreach ($pdo->query('select dicerollcount from sugoroku2 where player = 3') as $row) {
    $drc3 = "$row[dicerollcount]";
    }
    foreach ($pdo->query('select dicerollcount from sugoroku2 where player = 4') as $row) {
    $drc4 = "$row[dicerollcount]";
    }


  ?>

  <script type="text/javascript">
    var pn='<?php echo $pn; ?>';
    var nxpl = '<?php echo $nxpl; ?>';

    var currentSpace1 = '<?php echo $cs1; ?>';
    var currentSpace2 = '<?php echo $cs2; ?>';
    var currentSpace3 = '<?php echo $cs3; ?>';
    var currentSpace4 = '<?php echo $cs4; ?>';

    var toGoal1 = '<?php echo $tg1; ?>';
    var toGoal2 = '<?php echo $tg2; ?>';
    var toGoal3 = '<?php echo $tg3; ?>';
    var toGoal4 = '<?php echo $tg4; ?>';

    var diceRollCount1 = '<?php echo $drc1; ?>';
    var diceRollCount2 = '<?php echo $drc2; ?>';
    var diceRollCount3 = '<?php echo $drc3; ?>';
    var diceRollCount4 = '<?php echo $drc4; ?>';
  </script>

  <?php $pdo = null; ?>


  <div class="sugoroku-wrapper">
    <div class="container">
			<div class="title">
				<h1>すごろくゲーム</h1>
			</div>

      <div class="menu" id="menu">
        <p class="menu-text"> プレイ人数を選択してください</p>
        <div class="choice-box" onclick="onePlayer()">
          <p class="choice choice-text">1人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i></p>
        </div>
        <div class="choice-box" onclick="twoPlayer()">
          <p class="choice choice-text">2人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i><i class="fas fa-male p2"></i></p>
        </div>
        <div class="choice-box" onclick="threePlayer()">
          <p class="choice choice-text">3人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i><i class="fas fa-male p2"></i><i class="fas fa-male p3"></i></p>
        </div>
        <div class="choice-box" onclick="fourPlayer()">
          <p class="choice choice-text">4人でプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i><i class="fas fa-male p2"></i><i class="fas fa-male p3"></i><i class="fas fa-male p4"></i></p>
        </div>
        <div id="restart" class="choice-box" onclick="restart()">
          <p class="choice choice-text">続きからプレイ</p>
          <p class="choice choice-icon"><i class="fas fa-running"></i></p>
        </div>

      </div>


			<div class="clear"></div>

      <div class="game-form">
        <p>フォーム（最終的に隠す）</p>
        <form name="menuform" action = "game.php" method = "post">

          <p>playerNum</p> <input id="playerNum" type = "text" name ="plnm"><br/>
          <p>nextPlayer</p> <input id="nextPlayer" type = "text" name ="nxpl"><br/>

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


  <script src="script.js?1234">
  </script>

</body>
</html>
