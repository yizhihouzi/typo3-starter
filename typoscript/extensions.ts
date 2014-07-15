/*
    Einbinden der externen TypoScript Dateien
*/
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/typoscript/extensions/tt_news-setup.ts">


/*
    Entfernen diverser Head Includes
*/
page.headerData.1337 >


/*
    Unerwünschte Stylesheet aus TYPO3 Erweiterungen eliminieren
*/
plugin.tx_cssstyledcontent >
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >