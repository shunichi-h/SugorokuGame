<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SUGOROKU GAME</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="resultstylesheet.css?123">

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

    $pn = $_POST["plnm"];

    $nxpl = $_POST["nxpl"];

    $cs1 = $_POST["cs1"];
    $tg1 = $_POST["tg1"];
    $drc1 = $_POST["drc1"];

    $cs2 = $_POST["cs2"];
    $tg2 = $_POST["tg2"];
    $drc2 = $_POST["drc2"];

    $cs3 = $_POST["cs3"];
    $tg3 = $_POST["tg3"];
    $drc3 = $_POST["drc3"];

    $cs4 = $_POST["cs4"];
    $tg4 = $_POST["tg4"];
    $drc4 = $_POST["drc4"];

    $sqlnxpl = "UPDATE playernumber2 SET nextplayer = $nxpl WHERE id = 1";
    $res = $pdo->query($sqlnxpl);

    $sql1 = "UPDATE sugoroku2 SET currentspace = $cs1, togoal = $tg1, dicerollcount = $drc1 WHERE player = 1";
    $res = $pdo->query($sql1);

    $sql2 = "UPDATE sugoroku2 SET currentspace = $cs2, togoal = $tg2, dicerollcount = $drc2 WHERE player = 2";
    $res = $pdo->query($sql2);

    $sql3 = "UPDATE sugoroku2 SET currentspace = $cs3, togoal = $tg3, dicerollcount = $drc3 WHERE player = 3";
    $res = $pdo->query($sql3);

    $sql4 = "UPDATE sugoroku2 SET currentspace = $cs4, togoal = $tg4, dicerollcount = $drc4 WHERE player = 4";
    $res = $pdo->query($sql4);

    if($tg1 == 0){
      $winner = 1;
      $winnerIcon = "p1";
    }else if($tg2 == 0){
      $winner = 2;
      $winnerIcon = "p2";
    }else if($tg3 == 0){
      $winner = 3;
      $winnerIcon = "p3";
    }else if($tg4 == 0){
      $winner = 4;
      $winnerIcon = "p4";
    }else{
      $winner = 0;
    }

    //$sqlrank = "SELECT * FROM sugoroku2 ORDER BY currentspace desc";
    //$res1 = $pdo->query($sqlrank);

    //foreach ($res1 as $row) {
    //echo "<p>プレイヤー$row[player]:現在のマス→$row[currentspace]:ゴールまで→$row[togoal]:次のターン→$row[dicerollcount]投目</p>";
    //}

    //echo "次のターン：プレイヤー{$nxpl}";

  ?>

  <script type="text/javascript">
    var pn = '<?php echo $pn; ?>';
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
				<h1>すごろくゲーム〈<?php echo $pn; ?>人プレイ〉</h1>
			</div>

      <div class="menu" id="menu">
        <p class="menu-text">　</p>
        <div id="nextTurn" class="choice-box choice-box-n" onclick="turnChange()">
          <p class="choice choice-text-n">プレイヤー<?php echo $nxpl; ?>のターンへ</p>
          <p class="choice choice-icon-n"><i id="nxplIcon" class="fas fa-running"></i></p>
        </div>
        <div id="rank1" class="choice-box">
          <p class="choice choice-text">プレイヤー１ <i class="fas fa-male p1"></i></p>
          <p class="choice choice-icon">残り<?php echo $tg1; ?>マス</p>
        </div>
        <div id="rank2" class="choice-box">
          <p class="choice choice-text">プレイヤー２ <i class="fas fa-male p2"></i></p>
          <p class="choice choice-icon">残り<?php echo $tg2; ?>マス</p>
        </div>
        <div id="rank3" class="choice-box">
          <p class="choice choice-text">プレイヤー３ <i class="fas fa-male p3"></i></p>
          <p class="choice choice-icon">残り<?php echo $tg3; ?>マス</p>
        </div>
        <div id="rank4" class="choice-box">
          <p class="choice choice-text">プレイヤー４ <i class="fas fa-male p4"></i></p>
          <p class="choice choice-icon">残り<?php echo $tg4; ?>マス</p>
        </div>
        <div id="reset" class="choice-box-r choice-box-n" onclick="returnMenu()">
          <p class="choice choice-text-r">メニューに戻る</p>
        </div>
      </div>

      <div class="goal" id="goal">
        <p class="menu-text"></p>
        <div class="goalmesage">
          <h1>プレイヤー<?php echo $winner; ?>の勝利！<br>おめでとうございます！</h1>
        </div>
        <div class="winner-icon">
          <i class="fas fa-child <?php echo $winnerIcon; ?>"></i>
        </div>

        <div id="reset" class="choice-box-r choice-box-n" onclick="resetGame()">
          <p class="choice choice-text-r">メニューに戻る</p>
        </div>
      </div>

			<div class="clear"></div>

      <div class="game-form">
        <p>フォーム（最終的に隠す）</p>
        <form name="resultform" action = "game.php" method = "post">

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


  <script src="resultscript.js?1234">
  </script>

</body>
</html>
