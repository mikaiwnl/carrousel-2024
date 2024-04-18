
<?php 
/**
 * Plugin Name: Premier plugin
 * Author: Michael Ali Soeu  
 * Description: Une premiere extention pour comprendre
 * Version: 1.0.0
 * Author URL: https://github.com/mikaiwnl/2024-4w4-gr1
 * 
 * 
 * 
 */ 

function enqueue_style_script(){
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

wp_enqueue_style(   'em_plugin_carrousel_css',
                plugin_dir_url(__FILE__) . "style.css",
                array(),
                $version_css);
                
wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
    }

    add_action('wp_enqueue_scripts', 'enqueue_style_script');
 

    function genere_html() {
        $html='
        <button class="bouton__ouvrir">Ouvrir Carousel</button>
        <div class="carrousel">
            <a href="" class="carrousel__x">X</a>
            <figure class="carrousel__figure"></figure>
            <form action="" class="carrousel__form"></form>
        </div>
        ';
        return $html;
        }
         
        add_shortcode( 'carrousel', 'genere_html' );

