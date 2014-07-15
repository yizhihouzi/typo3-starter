/*
    Setzen einiger Basis Konstanten für das Template
*/
config {
    adminPanel = 0
    debug = 0
    absRefPrefix = /

    # Tracking Konfiguration
    googleAnalytics = XXXXX

    # Default Page IDs
    rootID = 
    homeID = 

    serviceNavigationPID = 
    navExcludeList =

    # Default Base URL
    domain = http://www.example.de
    domain_clean = www.example.de

    # Fallback MetaTags/Title
    description = 
    keywords = 
    robots = index,follow
    title = 
}


/*
    Allgemeine Dateipfade zu den Templatefiles
*/
filepath {
    templates = fileadmin/template/
    css = fileadmin/template/assets/css/
    img = fileadmin/template/assets/img/
    scripts = fileadmin/template/assets/js/
    extensiontemplates = fileadmin/template/extensions/
    typoscript = fileadmin/template/typoscript/
    ext_typoscript = fileadmin/template/typoscript/extentions/
}


/*
    News Konstanten setzen
*/
news {
    # ID der Aktuelles Seite
    backID = 
    archiveID = 

    # ID der Einzelseite
    singleID = 

    # ID der tt_news Datensätze
    dataID = 

    # RSS Title/beschreibung
    rssTitle = 
    rssDescription = Bleiben Sie auf dem Laufenden
}


/*
    Einbinden der externen Constants Dateien
*/
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/typoscript/extensions/tt_news-constants.ts">