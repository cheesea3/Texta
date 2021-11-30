<?php


use Nesk\Puphpeteer\Puppeteer;
    use Nesk\Rialto\Data\JsFunction;
class Text {

public function sendText($destination, $msg, $amount){
	//intial default value for counter
	$count = 0;
	$messagesSent = 0;
	//obfuscation
	function generateRandomString($length = 10) {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}


$puppeteer = new Puppeteer;
$browser = $puppeteer->launch();

$page = $browser->newPage();
$page->goto('https://www.hlrlookup.com/');
$page->type('#msisdnfield', $destination);
$page->waitForSelector('button[id="lookup-button"]');
$page->click('button[id="lookup-button"]');

$data = $page->evaluate(JsFunction::createWithBody('
document.getElementById("msisdnfield").value = '.$destination.';
document.getElementById("lookup-button").click();
return document.documentElement.outerHTML;'));
echo $data;
$browser->close();

echo "Arwferw";
die();



	while ($amount != $count) {
		$tld = array("com", "org", "net");	
		//more obfuscation
		$random1 = md5(generateRandomString());
		$random2 = md5(generateRandomString());
		$random3 = md5(generateRandomString());
		$random4 = md5(generateRandomString());	
		$from = $random1."@".$random2.".".$tld[array_rand($tld)];
		$headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . $from . "\r\n" . 'X-Mailer: PHP/' . phpversion();
		if(@mail($destination, $random3, $random4, $headers)) {
			$messagesSent++;
		} else {
			//kill loop
			

			http_response_code(400);
			die('{ Error: "Messages cannot deliver!" }');
		}
		$count++;
	}
}

}