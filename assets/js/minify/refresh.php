<?php


    // Minify ausführen/nicht ausführen
    $enable_css_minify = true;


    // Templatepath setzen und Entwicklermodus ein- bzw. ausschalten
    if(!function_exists('add_theme_support') && !isset($page)) {

        // Direktaufruf der Datei
        echo '<meta http-equiv="refresh" content="1">';
        runJsMinify('./../', $enable_css_minify);

    } else if(function_exists('add_theme_support') && defined('CGBASE_DEBUG') && CGBASE_DEBUG == true) {

        // Entwicklermodus für WordPress
        runJsMinify(CGBASE_JS, $enable_css_minify);

    } else if(isset($page) && defined('DEBUG') && DEBUG == true) {

        // Entwicklermodus für CreativeGroup Static PHP Template
        runJsMinify(APPLICATION_DIR . JS_PATH, $enable_css_minify);

    }


    function runJsMinify($path, $minify=true) {
        // Inhalte der Skript Dateien laden
        $output  = file_get_contents($path . 'unmerged/libs/jquery-1.10.2.js');
        $output .= file_get_contents($path . 'unmerged/libs/jquery-migrate-1.2.1.js');
        $output .= file_get_contents($path . 'unmerged/libs/jquery.fancybox.js');
        $output .= file_get_contents($path . 'unmerged/script.js');



        // Minify Klasse einbinden und auf JS Inhalt anwenden
        if($minify==true) {
            require 'JSMin.php';
            $result['script.min.js'] = JSMin::minify($output);
        } else {
            $result['script.min.js'] = $output;
        }


        // JS Datei schreiben
        foreach($result as $filename => $file_content){
            $file = fopen($path . $filename, 'w');
            fwrite($file, $file_content);
            fclose($file);
            chmod($path . $filename, 0775);
        }
    }

?>