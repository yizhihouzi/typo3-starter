<?php
class user_pageNotFound {
	function pageNotFound($param,$ref) {
		$host = $_SERVER['HTTP_HOST'];
		$reason = $param['reasonText'];		
		$filename = "http://$host/404.html" ;
		$filecontent = file_get_contents($filename);  
		echo $filecontent;
	}
}
?>