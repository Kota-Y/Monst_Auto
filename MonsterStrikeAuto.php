﻿<?php
	if(isset($_POST["run_limit_tasu"]))				//運極限定(タス曜日)
	{
		$gamewith = file_get_contents('http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/bbs/matching/threads/show/33');
		$kind = $_POST["kind_limit_tasu"];
		SearchRun($gamewith,$kind);
	}
	else if(isset($_POST["run_limit_hard"]))		//運極限定(超絶)
	{
		$gamewith = file_get_contents('http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/bbs/matching/threads/show/3');
		$kind = $_POST["kind_hard"];
		SearchRun($gamewith,$kind);
	}
	else if(isset($_POST["run_anybody_hard"]))		//誰でも(超絶)
	{
		$gamewith = file_get_contents('http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/bbs/matching/threads/show/4');
		$kind = $_POST["kind_hard"];
		SearchRun($gamewith,$kind);
	}
	else if(isset($_POST["run_limit_normal"]))		//運極限定(降臨)
	{
		$gamewith = file_get_contents('http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/bbs/matching/threads/show/3');
		$kind = $_POST["kind_limit_normal"];
		SearchRun($gamewith,$kind);
	}
	else if(isset($_POST["run_anybody_normal"]))	//誰でも(降臨)
	{
		$gamewith = file_get_contents('http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/bbs/matching/threads/show/4');
		$kind = $_POST["kind_anybody_normal"];
		SearchRun($gamewith,$kind);
	}
	else if(isset($_POST["run_temple"]))			//神殿
	{
		$gamewith = file_get_contents('http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/bbs/matching/threads/show/12');
		$kind = $_POST["kind_temple"];
		SearchRun($gamewith,$kind);
	}
	else if(isset($_POST["run_ra"]))			//ラーx専用
	{
		$gamewith = file_get_contents('http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/bbs/matching/threads/show/85');
		$kind = $_POST["kind_ra"];
		SearchRun($gamewith,$kind);
	}
/******************************************************************/
/*ホーム画面に戻る*/
/******************************************************************/
	function BackHome()
	{
		print <<< EOM
		<script type = "text/javascript">
			location.href = "http://mcz-monst.sakura.ne.jp/MonsterStrikeAuto.html"
		//	location.href = "http://localhost/MonsterStrikeAuto.html"
		</script>
EOM;
	}
/******************************************************************/
/*ファイルに書き込む*/
/******************************************************************/
	function FileInput($_filenumber,$_textfile)
	{
		$file = "data" . $_filenumber . ".txt";
		file_put_contents($file,$_textfile);
	}
/******************************************************************/
/*検索して実行*/
/******************************************************************/
	function SearchRun($_gamewith,$_kind)
	{
		$time = $_POST["time_hidden"];	//検索回数		

		//検索回数によって分岐
		switch($time)
		{
			case 1:
				$number = strpos($_gamewith,$_kind);
				if ($number === false)		//クエストが見つからなかった時
				{
					BackHome();
				}
				else	//クエストが見つかった時
				{
					$get_write = substr($_gamewith,$number,300);
					$get_http = strpos($get_write,"http://static.monster-strike.com/line/?pass_code=");
					$get_monst = substr($get_write,$get_http,61);	//ページのURL取得
					header("Location:$get_monst",true,301);		//ページに移動
				}
				break;
			case 2:
				$number2 = strpos($_gamewith,$_kind);
				$get_write2 = substr($_gamewith,$number2);
				$get_http2 = strpos($get_write2,"http://static.monster-strike.com/line/?pass_code=");
				$get2 = substr($get_write2,$get_http2);
				$number = strpos($get2,$_kind);
				if ($number === false or $number2 === false or $get_http2 === false)	//クエストが見つからなかった時
				{
					BackHome();
				}
				else	//クエストが見つかった時
				{
					$get_write = substr($get2,$number,300);
					$get_http = strpos($get_write,"http://static.monster-strike.com/line/?pass_code=");
					$get_monst = substr($get_write,$get_http,61);	//ページのURL取得
					header("Location:$get_monst",true,301);		//ページに移動
				}
				break;
			case 3:
				$number3 = strpos($_gamewith,$_kind);
				$get_write3 = substr($_gamewith,$number3);
				$get_http3 = strpos($get_write3,"http://static.monster-strike.com/line/?pass_code=");
				$get3 = substr($get_write3,$get_http3);
				$number3 = strpos($get3,$_kind);
				$get_write3 = substr($get3,$number3);
				$get_http3 = strpos($get_write3,"http://static.monster-strike.com/line/?pass_code=");
				$get3 = substr($get_write3,$get_http3);
				$number = strpos($get3,$_kind);
				if ($number === false or $number3 === false or $get_http3 === false)	//クエストが見つからなかった時
				{
					BackHome();
				}
				else	//クエストが見つかった時
				{
					$get_write = substr($get3,$number,300);
					$get_http = strpos($get_write,"http://static.monster-strike.com/line/?pass_code=");
					$get_monst = substr($get_write,$get_http,61);	//ページのURL取得
					header("Location:$get_monst",true,301);		//ページに移動
				}
				break;
			case 4:
				$number4 = strpos($_gamewith,$_kind);
				$get_write4 = substr($_gamewith,$number4);
				$get_http4 = strpos($get_write4,"http://static.monster-strike.com/line/?pass_code=");
				$get4 = substr($get_write4,$get_http4);
				$number4 = strpos($get4,$_kind);
				$get_write4 = substr($get4,$number4);
				$get_http4 = strpos($get_write4,"http://static.monster-strike.com/line/?pass_code=");
				$get4 = substr($get_write4,$get_http4);
				$number4 = strpos($get4,$_kind);
				$get_write4 = substr($get4,$number4);
				$get_http4 = strpos($get_write4,"http://static.monster-strike.com/line/?pass_code=");
				$get4 = substr($get_write4,$get_http4);
				$number = strpos($get4,$_kind);
				if ($number === false or $number4 === false or $get_http4 === false)	//クエストが見つからなかった時
				{
					BackHome();
				}
				else	//クエストが見つかった時
				{
					$get_write = substr($get4,$number,300);
					$get_http = strpos($get_write,"http://static.monster-strike.com/line/?pass_code=");
					$get_monst = substr($get_write,$get_http,61);	//ページのURL取得
					header("Location:$get_monst",true,301);		//ページに移動
				}
				break;
			case 5:
				$number5 = strpos($_gamewith,$_kind);
				$get_write5 = substr($_gamewith,$number5);
				$get_http5 = strpos($get_write5,"http://static.monster-strike.com/line/?pass_code=");
				$get5 = substr($get_write5,$get_http5);
				$number5 = strpos($get5,$_kind);
				$get_write5 = substr($get5,$number5);
				$get_http5 = strpos($get_write5,"http://static.monster-strike.com/line/?pass_code=");
				$get5 = substr($get_write5,$get_http5);
				$number5 = strpos($get5,$_kind);
				$get_write5 = substr($get5,$number5);
				$get_http5 = strpos($get_write5,"http://static.monster-strike.com/line/?pass_code=");
				$get5 = substr($get_write5,$get_http5);
				$number5 = strpos($get5,$_kind);
				$get_write5 = substr($get5,$number5);
				$get_http5 = strpos($get_write5,"http://static.monster-strike.com/line/?pass_code=");
				$get5 = substr($get_write5,$get_http5);
				$number = strpos($get5,$_kind);
				if ($number === false or $number5 === false or $get_http5 === false)	//クエストが見つからなかった時
				{
					BackHome();
				}
				else	//クエストが見つかった時
				{
					$get_write = substr($get5,$number,300);
					$get_http = strpos($get_write,"http://static.monster-strike.com/line/?pass_code=");
					$get_monst = substr($get_write,$get_http,61);	//ページのURL取得
					header("Location:$get_monst",true,301);		//ページに移動
				}
				break;
		}

		
	}	
?>
