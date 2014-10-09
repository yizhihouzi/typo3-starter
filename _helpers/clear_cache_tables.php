<?php

// Datenbankverbindung herstellen
include('_init.php');

// Truncate tables
$truncate = array(
    'cache_imagesizes', 
    'cache_md5params', 
    'cache_treelist', 
    'cache_typo3temp_log', 
    'cf_cache_hash', 
    'cf_cache_hash_tags', 
    'cf_cache_pages',
    'cf_cache_pagesection', 
    'cf_cache_pagesection_tags', 
    'cf_cache_pages_tags',
    'cf_cache_rootline',
    'cf_cache_rootline_tags',
    'cf_extbase_datamapfactory_datamap',
    'cf_extbase_datamapfactory_datamap_tags',
    'cf_extbase_object',
    'cf_extbase_object_tags',
    'cf_extbase_reflection',
    'cf_extbase_reflection_tags',
    'cf_extbase_typo3dbbackend_queries',
    'cf_extbase_typo3dbbackend_queries_tags',
    'cf_extbase_typo3dbbackend_tablecolumns',
    'cf_extbase_typo3dbbackend_tablecolumns_tags',
    'tt_news_cache',
    'tt_news_cache_tags',
    'tx_realurl_urldecodecache',
    'tx_realurl_urlencodecache',
    'tx_devlog',
    'cf_tt_news_cache',
    'cf_tt_news_cache_tags',
    'index_debug', 
    'index_fulltext', 
    'index_grlist', 
    'index_phash', 
    'index_rel', 
    'index_section', 
    'index_stat_search', 
    'index_stat_word', 
    'index_words',	
    'sys_history',
    'sys_log'
);

// Clean tables
$clean = array(
    'tt_news', 
    'pages', 
    'tt_content'
);

// Query durchfühern
foreach ($truncate as $tbl) {
    $result = $db->run("TRUNCATE $tbl;");
    if (!$result) die("Could not execute query!" . $db->error);
}

// Query durchfühern
foreach ($clean as $tbl) {
    $db->delete($tbl, array('deleted'=>1));
}