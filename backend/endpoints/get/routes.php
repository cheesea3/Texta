<?php
	if ($_GET['url'] == "text")
    {
	        if (isset($_GET['verifyparam']))
        {
			require("text/verifytext.php");
		}
    }
?>