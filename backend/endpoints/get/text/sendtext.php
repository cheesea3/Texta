<?php
		// Check if there are any missing arguments
        if (isset($_GET['number']) && isset($_GET['carrier']) && isset($_GET['msg']) && isset($_GET['amount']))
        {
			// Variable Declaration
			$number = $_GET['number'];
			$carrier = $_GET['carrier'];
			$msg = $_GET['msg'];
			$amount = $_GET['amount'];
			$destination = $number."@".$carrier;
			if(filter_var($destination, FILTER_VALIDATE_EMAIL)) {
				//word wrap msg just in case
				$msg = wordwrap($msg,70);
				if($amount > 30){
                echo '{ Error: "Amount exceeds limit" }';
                http_response_code(401);					
					die();
				}
				Text::sendText($destination, $msg, $amount);
				//return result
                echo '{ "Status": "Success" }';
                http_response_code(200);
				die();
			}
            else
            {
				//return error reason
                echo '{ Error: "Invalid Destination" }';
                http_response_code(400);
				die();
            }
        }
        else
        {
			//notify user of improper details
            echo '{ Error: "Malformed request" }';
            http_response_code(400);
        }
?>