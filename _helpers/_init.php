<?php
// Dateien und Ordner Pfade
define('AJAX_CALL', true);
define('APPLICATION_DIR', realpath(dirname(__FILE__)) . '/../');
define('AJAX_DIR', realpath(dirname(__FILE__)) . '/');
date_default_timezone_set('Europe/Berlin');
header_remove("X-Powered-By");
header("X-XSS-Protection: 1;");
header("X-Robots-Tag: googlebot: noindex, nofollow;");


// Datenbank Zugangsdaten WordPress
// include(APPLICATION_DIR . 'wp-config.php');
// define('WORDPRESS_TEMPLATE_DIR', APPLICATION_DIR . 'wp-content/themes/friseur-jobs/');
// define('WORDPRESS_UPLOAD_DIR', APPLICATION_DIR . 'wp-content/uploads/');


// Datenbank Zugangsdaten TYPO3
$typo3_config = include(APPLICATION_DIR . 'typo3conf/LocalConfiguration.php');
define('DB_HOST',$typo3_config['DB']['localhost']);
define('DB_NAME',$typo3_config['DB']['database']);
define('DB_USER',$typo3_config['DB']['username']);
define('DB_PASSWORD',$typo3_config['DB']['password']);
include(AJAX_DIR . '_smplPDO.php');


// Dateien und Ordner Pfade
@ini_set('log_errors','On');
@ini_set('display_errors','On');
@ini_set('error_log', AJAX_DIR . 'logs/php-error.log');


// Increase PHP Limit
ini_set('max_execution_time', 60);
ini_set('display_errors', 1);
ini_set('output_buffering', 0); 
ini_set('default_socket_timeout', 60);
ini_set('memory_limit', '125M');


// Datenbankverbindung laden
$db_host = DB_HOST;
$db_name = DB_NAME;
$db_user = DB_USER;
$db_pass = DB_PASSWORD;
$db = new smplPDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);


// Session starten
if(!isset($_SESSION)) {
     session_start();
}