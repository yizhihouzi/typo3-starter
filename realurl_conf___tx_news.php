<?php

$TYPO3_CONF_VARS['FE']['addRootLineFields'].= ',tx_realurl_pathsegment';
$TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'] = array(
        'pagePath' => array(
                'type' => 'user',
                'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
                'spaceCharacter' => '-',
                'languageGetVar' => 'L',
                'expireDays' => '3',
                'rootpage_id' => 1,
                'firstHitPathCache'=>1,
                'disablePathCache' => FALSE,
                'autoUpdatePathCache' => TRUE,
                'firstHitPathCache' => TRUE
        ),
        'init' => array(
                'enableCHashCache' => TRUE,
                'appendMissingSlash' => 'ifNotFile,redirect',
                'enableUrlDecodeCache' => TRUE,
                'enableUrlEncodeCache' => TRUE,
                'postVarSet_failureMode' => 'redirect_goodUpperDir',
                'emptyUrlReturnValue' => '/',
                'respectSimulateStaticURLs' => FALSE,
                'enableAllUnicodeLetters' => FALSE,
                'doNotRawUrlEncodeParameterNames' => TRUE
        ),
        'preVars' => array(
                array(
                        'GETvar' => 'L',
                        'valueMap' => array(
                                'en' => '1',
                        ),
                        'noMatch' => 'bypass',
                ),
                array(
                        'GETvar' => 'no_cache',
                        'valueMap' => array(
                                'nc' => 1,
                        ),
                        'noMatch' => 'bypass',
                ),
        ),
        'fixedPostVars' => array(
                'newsDetailConfiguration' => array(
                        array(
                                'GETvar' => 'tx_news_pi1[day]',
                                'noMatch' => 'bypass',
                        ),
                        array(
                                'GETvar' => 'tx_news_pi1[month]',
                                'noMatch' => 'bypass',
                        ),
                        array(
                                'GETvar' => 'tx_news_pi1[year]',
                                'noMatch' => 'bypass',
                        ),
                        array(
                                'GETvar' => 'tx_news_pi1[action]',
                                'noMatch' => 'bypass'
                        ),
                        array(
                                'GETvar' => 'tx_news_pi1[controller]',
                                'noMatch' => 'bypass'
                        ),
                        array(
                                'GETvar' => 'tx_news_pi1[news]',
                                'lookUpTable' => array(
                                        'table' => 'tx_news_domain_model_news',
                                        'id_field' => 'uid',
                                        'alias_field' => 'IF(path_segment!="",path_segment,title)',
                                        'addWhereClause' => ' AND NOT deleted',
                                        'useUniqueCache' => 1,
                                        'useUniqueCache_conf' => array(
                                                'strtolower' => 1,
                                                'spaceCharacter' => '-'
                                        ),
                                        'languageGetVar' => 'L',
                                        'languageExceptionUids' => '',
                                        'languageField' => 'sys_language_uid',
                                        'transOrigPointerField' => 'l10n_parent',
                                        'autoUpdate' => 1,
                                        'expireDays' => 180,
                                )
                        )
                ),
                'newsCategoryConfiguration' => array(
                        array(
                                'GETvar' => 'tx_news_pi1[overwriteDemand][categories]',
                                'lookUpTable' => array(
                                        'table' => 'sys_category',
                                        'id_field' => 'uid',
                                        'alias_field' => 'title',
                                        'addWhereClause' => ' AND NOT deleted',
                                        'useUniqueCache' => 1,
                                        'useUniqueCache_conf' => array(
                                                'strtolower' => 1,
                                                'spaceCharacter' => '-'
                                        )
                                )
                        )
                ),
                'newsTagConfiguration' => array(
                        array(
                                'GETvar' => 'tx_news_pi1[overwriteDemand][tags]',
                                'lookUpTable' => array(
                                        'table' => 'tx_news_domain_model_tag',
                                        'id_field' => 'uid',
                                        'alias_field' => 'title',
                                        'addWhereClause' => ' AND NOT deleted',
                                        'useUniqueCache' => 1,
                                        'useUniqueCache_conf' => array(
                                                'strtolower' => 1,
                                                'spaceCharacter' => '-'
                                        )
                                )
                        )
                ),
                '8' => 'newsDetailConfiguration',
                // '701' => 'newsDetailConfiguration', // For additional detail pages, add their uid as well
                // '71' => 'newsTagConfiguration',
                // '72' => 'newsCategoryConfiguration',

        ),
        'postVarSets' => array(
                '_DEFAULT' => array(
                        'controller' => array(
                                array(
                                        'GETvar' => 'tx_news_pi1[action]',
                                        'noMatch' => 'bypass'
                                ),
                                array(
                                        'GETvar' => 'tx_news_pi1[controller]',
                                        'noMatch' => 'bypass'
                                )
                        ),

                        'dateFilter' => array(
                                array(
                                        'GETvar' => 'tx_news_pi1[overwriteDemand][year]',
                                ),
                                array(
                                        'GETvar' => 'tx_news_pi1[overwriteDemand][month]',
                                ),
                        ),
                        'page' => array(
                                array(
                                        'GETvar' => 'tx_news_pi1[@widget_0][currentPage]',
                                ),
                        ),
                    
                        /* tt_news Alternative
                        // news archive parameters
                        'archive' => array(
                            array(
                                'GETvar' => 'tx_ttnews[year]' ,
                            ),
                            array(
                                'GETvar' => 'tx_ttnews[month]' ,
                                    'valueMap' => array(
                                    'january' => '01',
                                    'february' => '02',
                                    'march' => '03',
                                    'april' => '04',
                                    'may' => '05',
                                    'june' => '06',
                                    'july' => '07',
                                    'august' => '08',
                                    'september' => '09',
                                    'october' => '10',
                                    'november' => '11',
                                    'december' => '12',
                                )
                            ),
                        ),
                        //news pagebrowser
                        'browse' => array(
                            array(
                                'GETvar' => 'tx_ttnews[pointer]',
                            ),
                        ),
                        // news categories
                        'select_category' => array (
                            array(
                                'GETvar' => 'tx_ttnews[cat]',
                            ),
                        ),
                        // news articles and searchwords
                        'article' => array(
                            array(
                                'GETvar' => 'tx_ttnews[tt_news]',
                                'lookUpTable' => array(
                                    'table' => 'tt_news',
                                    'id_field' => 'uid',
                                    'alias_field' => 'title',
                                    'addWhereClause' => ' AND NOT deleted',
                                    'useUniqueCache' => 1,
                                    'useUniqueCache_conf' => array(
                                        'strtolower' => 1,
                                        'spaceCharacter' => '-',
                                    ),
                                ),
                            ),
                            array(
                                'GETvar' => 'tx_ttnews[backPid]',
                            ),
                            array(
                                'GETvar' => 'tx_ttnews[swords]',
                            ),
                        ),
                        */

                ),
        ),

);

?>