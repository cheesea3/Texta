<?php
	if ($_GET['url'] == "text")
    {
	        if (isset($_GET['sendtext']))
        {
			require("text/sendtext.php");
		}
    }
?>