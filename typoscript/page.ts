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
    includeJS {
        10 = {$filepath.scripts}modernizr-2.6.2.js
    }

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
    headerData = COA
    headerData {
        # Website Title
        10 = TEXT
        10.field = abstract // subtitle // nav_title // title
        10.wrap  = <title>|</title>
        10.insertData = 1

        20 = TEXT
        20.value (

        )
    }
}


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
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
    key.field = section_frame
    100 = TEXT
    100.value = <div class="customBox">|</div>
}

# Body Tag erweitern
lib.bodyTag = COA
lib.bodyTag {
    # Open Tag and fill page ID
    10 = TEXT
    10.dataWrap = <body id="pageID{TSFE:id}

    # Close Tag
    999 = TEXT
    999.value = ">
}

# Body Class je nach Page Frontend Layout setzen
[globalVar=TSFE:page|layout=0]
    lib.bodyTag.20 = TEXT
    lib.bodyTag.20.value = default
    lib.bodyTag.20.noTrimWrap = | | |
[global]

# Body Tag ersetzen
page.bodyTag >
page.bodyTagCObject < lib.bodyTag

# Frontend-Ausgabe des Page Titels für das Logo
temp.pageTitle = TEXT
temp.pageTitle {
    value = <span>{page:title}</span>
    insertData = 1
}

# Diverse Anpassungen für die Startseite
[globalVar= TSFE:id={$config.homeID}]
    page = PAGE
    page {
        bodyTagCObject = TEXT
        bodyTagCObject.wrap = <body id="homepage">
    }
[global]

# Alternative Headline Layouts
lib.stdheader >
lib.stdheader = CASE
lib.stdheader {
    key.field = header_layout

    default = TEXT
    default.field = header
    default.wrap = <h2 id="c{field:uid}">|</h2>
    default.insertData = 1
    default.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    1 = TEXT
    1.field = header
    1.wrap = <h1 id="c{field:uid}">|</h1>
    1.insertData = 1
    1.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    2 = TEXT
    2.field = header
    2.wrap = <h2 id="c{field:uid}">|</h2>
    2.insertData = 1
    2.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    3 = TEXT
    3.field = header
    3.wrap = <h3 id="c{field:uid}">|</h3>
    3.insertData = 1
    3.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    4 = TEXT
    4.field = header
    4.wrap = <h4 id="c{field:uid}">|</h4>
    4.insertData = 1
    4.typolink {
        parameter.insertData = 1
        parameter = {field:header_link}
    }

    5 = TEXT
    5.field = header
    5.wrap = <h5 id="c{field:uid}">|</h5>
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
    Spalten definieren und Inhalte zuweisen
*/

# Constanten ausgeben
lib.varStorage = COA
lib.varStorage {
    # Sitename übergeben
    sitename = TEXT
    sitename.value = {$config.title}

    # Google Analytics ID
    googleAnalytics = TEXT
    googleAnalytics.value = {$config.googleAnalytics}
}

# teaser
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

# Spalten definieren
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

# Footer mit Standard CE füllen, solange kein anderes angelegt ist
temp.footerContent >
temp.footerContent = COA
temp.footerContent {
    10 < styles.content.get
    10.select.where = colPos=6
    # Wenn leer, dann Inhalt aus anderer Seite holen
    10.stdWrap.ifEmpty.cObject = CONTENT
    10.stdWrap.ifEmpty.cObject {
        table = tt_content
        select {
          # Seite, aus der Standard CE geholt wird
          pidInList = {$config.rootID}
          orderBy = sorting
          where = colPos=6
        }
    }
}

# Marker für Templatedateien befüllen
page.10 {
    variables {
        # Colmanagement
        teaserArea < lib.contentTeaser
        mainContent < lib.contentBackendColPos.1
        sidebarContent < lib.contentBackendColPos.2

        # Basic Constants in Templates verwenden
        sitename < lib.varStorage.sitename
        googleAnalytics < lib.varStorage.googleAnalytics
    }
}