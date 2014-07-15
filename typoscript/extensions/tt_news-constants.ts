/*
    Plugin: tt_news Konstanten
*/
xmlnewsfeed_id = {$news.backID}

plugin.tt_news {
    # PID mit tt_news Datensätze
    pid_list = {$news.dataID}
    
    # PID mit der Singleanzeige des tt_news Plugins
    singlePid = {$news.singleID}
    
    displayXML {
        # Maximale Anzahl der ausgelieferten Artikel im XML
        xmlLimit = 20
        
        # XML Template einbinden
        rss2_tmplFile = {$filepath.extensiontemplates}tt_news_rss.tmpl
        atom03_tmplFile = {$filepath.extensiontemplates}tt_news_atom.tmpl
        atom1_tmplFile = {$filepath.extensiontemplates}tt_news_atom.tmpl
        
        # Aktivierung des Cachings
        xmlCaching = 1
        
        # Basis-URL für die Verlinkung
        xmlLink = {$config.domain}
        
        # Titel des XML-Feeds
        xmlTitle = {$news.rssTitle}
        
        # Beschreibung des XML-Feeds
        xmlDesc = {$news.rssDescription}
        
        # Sprache des XML-Feeds
        xmlLang = de
        
        # Weitere Einstellungen
        title_stdWrap.htmlSpecialChars = 1
        title_stdWrap.htmlSpecialChars.preserveEntities = 1
        subheader_stdWrap.stripHtml = 1
        subheader_stdWrap.htmlSpecialChars = 1
        subheader_stdWrap.htmlSpecialChars.preserveEntities = 1
        subheader_stdWrap.crop = 425 | ...
        subheader_stdWrap.ifEmpty.field = bodytext
        xmlLastBuildDate = 1
    }
} 