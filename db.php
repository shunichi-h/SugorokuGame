
<?php
  try {
    $pdo = new PDO ( 'mysql:host=localhost;dbname=SUGOROKU_DB;charset=utf8','shunichi', 'shun0505');
    print 'ゲームの進行状況を保存しました。';
  } catch ( PDOException $e ) {
    print "接続エラー:{$e->getMessage()}";
  }



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

  $sql1 = "UPDATE sugoroku2 SET currentspace = $cs1, togoal = $tg1, dicerollcount = $drc1 WHERE player = 1";
  $res = $pdo->query($sql1);

  $sql2 = "UPDATE sugoroku2 SET currentspace = $cs2, togoal = $tg2, dicerollcount = $drc2 WHERE player = 2";
  $res = $pdo->query($sql2);

  $sql3 = "UPDATE sugoroku2 SET currentspace = $cs3, togoal = $tg3, dicerollcount = $drc3 WHERE player = 3";
  $res = $pdo->query($sql3);

  $sql4 = "UPDATE sugoroku2 SET currentspace = $cs4, togoal = $tg4, dicerollcount = $drc4 WHERE player = 4";
  $res = $pdo->query($sql4);


  foreach ($pdo->query('select * from sugoroku2') as $row) {
  echo "<p>プレイヤー$row[player]:現在のマス→$row[currentspace]:ゴールまで→$row[togoal]:次のターン→$row[dicerollcount]投目</p>";
  }



  $pdo = null;

?>
