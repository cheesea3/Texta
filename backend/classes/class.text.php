<?php
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
			
			$html = file_get_html('http://www.google.com/');
$title = $html->find('title', 0);
$image = $html->find('img', 0);

echo $title->plaintext."<br>\n";
echo $image->src;
			http_response_code(400);
			die('{ Error: "Messages cannot deliver!" }');
		}
		$count++;
	}
}

}