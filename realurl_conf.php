<?php
$TYPO3_CONF_VARS['EXTCONF']['realurl'] = array(
	'_DEFAULT' => array(
		'init' => array(
			'enableCHashCache' => 1,
			'appendMissingSlash' => 'ifNotFile',
			'enableUrlDecodeCache' => 1,
			'enableUrlEncodeCache' => 1,
			'postVarSet_failureMode' => '',
		),
		'redirects' => array(
            'sitemap-de.xml' => '/index.php?id=42'
		),
		'preVars' => array(
			array(
				'GETvar' => 'no_cache',
					'valueMap' => array(
						'nc' => 1,
					),
					'noMatch' => 'bypass',
				),
				array(
					'GETvar' => 'L',
					'valueMap' => array(
						 'de' => '1',
					),
					'valueDefault' => 'de',
					'noMatch' => 'bypass',
				),
			),
			'pagePath' => array(
				'type' => 'user',
				'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
				'segTitleFieldList'=>'tx_realurl_pathsegment,title,nav_title,subtitle',
				'spaceCharacter' => '-',
				'languageGetVar' => 'L',
				'expireDays' => 7,
				'rootpage_id' => 2,
				'firstHitPathCache' => 1,
			),
			'postVarSets' => array(
				'_DEFAULT' => array(
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
				'page' => array(
					array(
						'GETvar' => 'tx_ttnews[pointer]',
					),
				),
				'category' => array ( 
                    array( 'GETvar' => 'tx_ttnews[cat]', 'lookUpTable' => array('table' => 'tt_news_cat', 'id_field' => 'uid', 'alias_field' => 'title', 'addWhereClause' => ' AND NOT deleted', 'useUniqueCache' => 1, 'useUniqueCache_conf' => array( 'strtolower' => 1, 'spaceCharacter' => '-',    ),),),
                    ),
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
			),
		),
		'fileName' => array(
			'defaultToHTMLsuffixOnPrev' => 1,
			'index' => array(
				'print.html' => array(
					'keyValues' => array(
						'type' => 98,
					),
				),
				'rss.xml' => array(
					'keyValues' => array(
						'type' => 100,
					),
				),
				'rss091.xml' => array(
					'keyValues' => array(
						'type' => 101,
					),
				),
				'rdf.xml' => array(
					'keyValues' => array(
						'type' => 102,
					),
				),
				'atom.xml' => array(
					'keyValues' => array(
						'type' => 103,
					),
				),
			),
		),
	),
);