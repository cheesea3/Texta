<?php
		//check if number is given
        if (isset($_GET['number']))
        {
			//assign variable to number
			$number = $_GET['number'];
            //check if number is valid
            if ($number === "123")
            {
				//return result
                echo '{ "Status": "Success" }';
                http_response_code(200);
            }
            else
            {
				//return error reason
                echo '{ Error: "Invalid Number }';
                http_response_code(400);
            }
        }
        else
        {
			//notify user of improper details
            echo '{ Error: "Malformed request" }';
            http_response_code(400);
        }
?>