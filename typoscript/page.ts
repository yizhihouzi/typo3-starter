/*
    Basis Konfiguration des Templates
*/
config {
    
    # Abschalten des Title Tags
    noPageTitle = 2

    # Indexed Search Engine aktivieren/deaktivieren
    index_enable = 0
    index_externals = 0

    # Konfiguration von RealURL
    simulateStaticDocuments = 0
    baseURL = {$config.domain}
    tx_realurl_enable = 1
    prefixLocalAnchors = all

    # Deutsch als Standardsprache
    uniqueLinkVars = 1
    linkVars = L
    sys_language_uid = 0
    sys_language_overlay = 1
    sys_language_mode = content_fallback
    locale_all = de_DE
    htmlTag_setParams = lang="de" dir="ltr"
    language = de
    htmlTag_langKey = de

    # Ziele für Links setzen
    extTarget = _blank
}


/*
    Einbinden der externen TypoScript Dateien
*/
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/typoscript/cleancode.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/typoscript/extensions.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/typoscript/navigation.ts">


/*
    Page Objekt definieren und Templatebezogene Einstellungen vornehmen
*/
page = PAGE
page {
    
    # Templates je nach Backend-Layout zuweisen
    10 = FLUIDTEMPLATE
    10 {
        partialRootPath = {$filepath.templates}fluid/partials/
        layoutRootPath = {$filepath.templates}fluid/layouts/

        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout

            default = TEXT
            default.value = {$filepath.templates}fluid/templates/template-default.html

            1 = TEXT
            1.value = {$filepath.templates}fluid/templates/template-homepage.html
        }
    }

    # CSS im "head"-Tag einfügen
    includeCSS {
        file_main = {$filepath.css}style.min.css
        file_main.media = all
    }

    # JavaScript im "head"-Bereich einfügen
    #includeJS {
    #    10 = {$filepath.scripts}modernizr-2.6.2.js
    #}
    
    # JavaScript am Ende vom "body"-Tag einfügen
    includeJSFooter {
        10 = {$filepath.scripts}script.min.js
    }

    # Favicon einbinden
    #shortcutIcon = favicon.png

    # Meta Elemente setzen
    meta {
        description = {$config.description}
        description.override.field = description

        keywords = {$config.keywords}
        keywords.override.field = keywords

        robots = {$config.robots}

        viewport = width=device-width, initial-scale=1

        # Disabling Link Detection for Smartphones
        format-detection = telephone=no
    }

    # HTML in den "head"-Bereich einfügen
    headerData {
        10 = TEXT
        10 {
            field = abstract // subtitle // nav_title // title
            wrap = <title>|</title>
            insertData = 1
        }
    }
}


/*
    SEO friendly title and description for news
*/
temp.newsTitle = RECORDS
temp.newsTitle {
    source = {GP:tx_ttnews|tt_news}
    source.insertData = 1
    tables = tt_news
    conf.tt_news >
    conf.tt_news = TEXT
    conf.tt_news.field = title
    wrap = <title>|</title>
    insertData = 1
}

[globalVar = TSFE:id = {$news.singleID}]
    page.headerData {
        10 >
        10 = COA
        10 < temp.newsTitle
    }

    page.meta {
        description >
        description = TEXT
        description.data = register:newsSubheader
        description.ifEmpty = {$config.description}

        keywords >
        keywords = TEXT
        keywords.data = register:newsKeywords
        keywords.ifEmpty = {$config.keywords}
    }
[global]


/*
    Canonical MetaTag Container
*/
lib.canonical = TEXT
lib.canonical {
    typolink {
        parameter = {page:uid}
        parameter.insertData = 1
        useCacheHash = 1
        addQueryString = 1
        addQueryString.method = GET
        addQueryString.exclude = id
        returnLast = url
    }

    wrap = <link rel="canonical" href="{$config.domain}|" />
}
page.headerData.100 < lib.canonical


/*
    Layout-Optionen und sonstige Anpassungen
*/

# Content Element Layout, Rahmen-Styles
tt_content {
    stdWrap.innerWrap.cObject = CASE
    stdWrap.innerWrap.cObject {
        key.field = section_frame
        100 = TEXT
        100.value = <div class="custom_box">|</div>
    }
}

# Body Tag erweitern
lib.bodyTag = COA
lib.bodyTag {
    
    # Open Tag and fill page ID
    10 = TEXT
    10.dataWrap = <body id="page_{TSFE:id}

    # Close Tag
    999 = TEXT
    999.value = ">
}

# Body Class je nach Page Frontend Layout setzen
#[globalVar=TSFE:page|layout=0]
#    lib.bodyTag.20 = TEXT
#    lib.bodyTag.20.value = default
#    lib.bodyTag.20.noTrimWrap = | | |
#[global]

# Body Tag ersetzen
page.bodyTag >
page.bodyTagCObject < lib.bodyTag

# Anpassungen für die Startseite
[globalVar= TSFE:id={$config.homeID}]
    page = PAGE
    page {
        bodyTagCObject = TEXT
        bodyTagCObject.wrap = <body id="home">
    }
[global]

# Alternative Headline Layouts
lib.stdheader >
lib.stdheader = CASE
lib.stdheader {
    key.field = header_layout

    default = TEXT
    default.field = header
    default.wrap = <h1 id="c{field:uid}">|</h1>
    default.insertData = 1
    default.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    1 = TEXT
    1.field = header
    1.wrap = <h2 id="c{field:uid}">|</h2>
    1.insertData = 1
    1.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    2 = TEXT
    2.field = header
    2.wrap = <h3 id="c{field:uid}">|</h3>
    2.insertData = 1
    2.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    3 = TEXT
    3.field = header
    3.wrap = <h4 id="c{field:uid}">|</h4>
    3.insertData = 1
    3.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    4 = TEXT
    4.field = header
    4.wrap = <h5 id="c{field:uid}">|</h5>
    4.insertData = 1
    4.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    5 = TEXT
    5.field = header
    5.wrap = <h6 id="c{field:uid}">|</h6>
    5.insertData = 1
    5.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    # zusätzliche Headline
    6 = TEXT
    6.field = header
    6.wrap = <h1 id="c{field:uid}" class="blue">|</h1>
    6.insertData = 1
    6.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    100 = TEXT
    100.wrap = <span class="hidden">&nbsp;</span>
    100.insertData = 1
}


/*
    Constanten anzeigbar machen
*/
lib.varStorage = COA
lib.varStorage {
    
    # Sitename übergeben
    sitename = TEXT
    sitename.value = {$config.title}

    # Google Analytics ID
    googleAnalytics = TEXT
    googleAnalytics.value = {$config.googleAnalytics}
}


/*
    Inhalt einfügen inkl. "nicht-verfügbar-Fallback"
*/
lib.contentTeaser = COA
lib.contentTeaser {
    10 < styles.content.get
    10.select.where = colPos=0
    
    # Wenn leer, dann Inhalt aus anderer Seite holen
    10.stdWrap.ifEmpty.cObject = CONTENT
    10.stdWrap.ifEmpty.cObject {
        table = tt_content
        select {
            
            # Seite, aus der Standard CE geholt wird
            pidInList = {$config.rootID}
            orderBy = sorting
            where = colPos=0
        }
    }
}


/*
    Benutzerdefinierter Inhalt + Bilder aus media Feld mit korrekten Attributen
*/
lib.custom_content = FILES
lib.custom_content {
    stdWrap.wrap = <div class="accordion_container"><div class="accordion-slider"><div class="as-panels">|</div></div></div>

    references {
        table = pages
        data = levelmedia:-1,slide
    }

    renderObj = COA
    renderObj {
        wrap = <div class="as-panel">|</div>

        10 = TEXT
        10 {
            stdWrap.wrap = <strong>|</strong>
            data = file:current:title
        }

        20 = IMAGE
        20 {
            file {
                width = 930
                height = 236c

                import.data = file:current:publicUrl
            }
            stdWrap.typolink.parameter.data = file:current:link
            altText.data = file:current:alternative
            titleText.data = file:current:title
        }
    }
}


/*
    Sidebar Spalte mit Standard-Submenu und Title + Abhängikeit vom BE-Layout
*/
[globalVar = TSFE:page|backend_layout = 1]
    # leer lassen, weil es in TS keine entsprechenden Operatoren gibt
[else]
    lib.contentBackendColPos.3 = COA
    lib.contentBackendColPos.3 {
        
        # wenn unterseiten vorhanden sind
        10 = TEXT
        10.if.isTrue.numRows {
            table = pages
            where = pid=this
        }
        10.dataWrap = <p class="sidebar_headline"><strong>{leveltitle:1}</strong></p>

        # wenn keine untersieten vorhanden sind
        15 = TEXT
        15.if.isFalse.numRows {
            table = pages
            where = pid=this
        }
        15.dataWrap = <p class="sidebar_headline no_arrow"><strong>{leveltitle:1}</strong></p>

        20 = HMENU
        20 {
            entryLevel = 1
            wrap.insertData = 1
            stdWrap.dataWrap = <nav id="nav_sidebar"><ul>|</ul></nav>
            stdWrap.required = 1

            1 = TMENU
            1 {
                expAll = 0
                NO.allWrap.insertData = 1
                NO.ATagBeforeWrap = 1
                NO.stdWrap.htmlSpecialChars = 1
                NO.before.dataWrap = <li class="uid{field:uid}">|
                NO.wrapItemAndSub = |</li>

                CUR = 1
                CUR.before.dataWrap = <li class="active uid{field:uid}">|
                CUR.wrapItemAndSub = |</li>
                CUR.ATagBeforeWrap = 1

                ACT = 1
                ACT.before.dataWrap = <li class="active uid{field:uid}">|
                ACT.wrapItemAndSub = |</li>
                ACT.ATagBeforeWrap = 1
            }
        }

        30 < styles.content.get
        30.select.where = colPos=2
    }
[global]


/*
    Spalten definieren
*/
lib.contentBackendColPos = COA
lib.contentBackendColPos {
    1 < styles.content.get
    1.select.where = colPos=1

    2 < styles.content.get
    2.select.where = colPos=2

    3 < styles.content.get
    3.select.where = colPos=3

    4 < styles.content.get
    4.select.where = colPos=4

    5 < styles.content.get
    5.select.where = colPos=5
}


/*
    Inhalte zuweisen und Marker für Templatedateien befüllen
*/
page.10 {
    variables {

        # Colmanagement
        main_content < lib.contentBackendColPos.1
        news < lib.contentBackendColPos.2
        sidebar < lib.contentBackendColPos.3
        custom_content < lib.custom_content

        # Basic Constants in Templates verwenden
        sitename < lib.varStorage.sitename
        googleAnalytics < lib.varStorage.googleAnalytics
    }
}