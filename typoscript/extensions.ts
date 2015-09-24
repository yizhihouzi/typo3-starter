/*
    Einbinden der externen TypoScript Dateien
*/
# <INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/typoscript/extensions/tt_news-setup.ts">


/*
    Entfernen diverser Head Includes
*/
page.headerData.1337 >


/*
    Unerwünschte Stylesheet aus TYPO3 Erweiterungen eliminieren
    Wenn die FE-Login verwendet wird, entsprechend auskommentieren
*/
plugin.tx_cssstyledcontent >
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >
plugin.tx_felogin_pi1._CSS_DEFAULT_STYLE >