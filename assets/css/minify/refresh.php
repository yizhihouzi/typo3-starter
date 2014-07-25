<?php


    // Minify ausführen/nicht ausführen
    $enable_css_minify = true;


    // Templatepath setzen und Entwicklermodus ein- bzw. ausschalten
    if(!function_exists('add_theme_support') && !isset($page)) {

        // Direktaufruf der Datei
        echo '<meta http-equiv="refresh" content="1">';
        runCssMinify('./../', $enable_css_minify);

    } else if(function_exists('add_theme_support') && defined('CGBASE_COMPILE_ASSETS') && CGBASE_COMPILE_ASSETS == true) {

        // Entwicklermodus für WordPress
        runCssMinify(CGBASE_CSS, $enable_css_minify);

    } else if(isset($page) && defined('DEBUG') && DEBUG == true) {

        // Entwicklermodus für CreativeGroup Static PHP Template
        runCssMinify(APPLICATION_DIR . CSS_PATH, $enable_css_minify);

    }


    function runCssMinify($path, $minify=true) {
        // Inhalte der CSS Dateien laden
        $output  = file_get_contents($path . 'unmerged/libs/normalize.css');
        $output .= file_get_contents($path . 'unmerged/libs/font-awesome.css');
        $output .= file_get_contents($path . 'unmerged/libs/jquery.fancybox.css');
        $output .= file_get_contents($path . 'unmerged/libs/bootstrap.min.css');
        $output .= file_get_contents($path . 'unmerged/style.css');


        // Minify Klasse einbinden und auf CSS Inhalt anwenden
        if($minify==true) {
            require 'cssmin-v3.0.1-minified.php';
            $result['style.min.css'] = CssMin::minify($output);
        } else {
            $result['style.min.css'] = $output;
        }


        // CSS Datei schreiben
        foreach($result as $filename => $file_content){
            $file = fopen($path . $filename, 'w');
            fwrite($file, $file_content);
            fclose($file);
            chmod($path . $filename, 0775);
        }
    }

?>