/*
    Säubern des Quellcodes und setzen der TYPO3 CreativeGroup Grundkonfiguration
*/
config {
    # Character sets
    renderCharset = utf-8
    metaCharset = utf-8

    # Cache settings
    cache_period = 43200
    sendCacheHeaders = 1

    # URL Settings
    tx_realurl_enable = 1
    simulateStaticDocuments = 0

    # Einstellen des DocType auf HTML5 setzen
    doctype = html5

    # XHTML Cleaning aktivieren
    xhtml_cleaning = all

    # Include Boilerplate handling for IE browsers
    htmlTag_stdWrap {
        setContentToCurrent = 1
        cObject = COA
        cObject {
            10 = LOAD_REGISTER
            10 {
                newLine.char = 10
                tagEnd {
                    current = 1
                    split.max = 2
                    split.token = <html
                    split.returnKey = 1
                }
            }

            20 = TEXT
            20.value = <!--[if lt IE 7]> <html class="no-js ie6 oldie"{register:tagEnd} <![endif]-->
            20.wrap = |{register:newLine}
            20.insertData = 1
            30 < .20
            30.value = <!--[if IE 7]> <html class="no-js ie7 oldie"{register:tagEnd} <![endif]-->
            40 < .20
            40.value = <!--[if IE 8]> <html class="no-js ie8 oldie"{register:tagEnd} <![endif]-->
            50 < .20
            50.value = <!--[if gt IE 8]> <!--><html class="no-js ie6 oldie"{register:tagEnd} <!--<![endif]-->

            90 = RESTORE_REGISTER
        }
    }

    # Code cleaning
    disablePrefixComment = 1

    # Link settings
    absRefPrefix = {$config.absRefPrefix}
    prefixLocalAnchors = all

    # Remove targets from links
    intTarget =
    extTarget =

    # Indexed Search
    index_enable = 1
    index_externals = 1

    # Move default CSS and JS to external file
    #removeDefaultJS = 0 # dies ist der Ausgangszustand, also mit JS.
    #removeDefaultJS = 1 # damit wird das JS entfernt.
    removeDefaultJS = external # hier wird auf ein externes JS umgeschaltet
    inlineStyle2TempFile = 1

    # Protect mail addresses from spamming
    spamProtectEmailAddresses = -3
    spamProtectEmailAddresses_atSubst = (at)<span style="display:none;"> - Kein Spam - </span>

    # CSS und JavaScript Zusammenfassen
    concatenateCss = 0
    compressCss = 0
    concatenateJs = 0
    compressJs = 0

    # Extend TYPO3 Header Comment
    headerComment (

CreativeGroup (http://www.creativegroup.de/) <3 TYPO3!
Thank you for examining our code!

===

    )
}


/*
    Rewrite der CSC-Styled-Content für sauberen Code
*/
lib {
    # RTE Tuning
    parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
    parseFunc_RTE.nonTypoTagStdWrap.encapsLines.remapTag >
    parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.DIV.class >

    # Angabe von Tags, die nicht mit einem zusätzlichen wrap umgeben werden dürfen
    parseFunc_RTE.nonTypoTagStdWrap.encapsLines.encapsTagList = cite, div, p, pre, h1, h2, h3, h4, h5, h6

    # Standard-Headings aufräumen
    stdheader.stdWrap.dataWrap = |
    stdheader.10.1.fontTag = <h1>|</h1>
    stdheader.10.2.fontTag = <h2>|</h2>
    stdheader.10.3.fontTag = <h3>|</h3>
    stdheader.10.4.fontTag = <h4>|</h4>
    stdheader.10.5.fontTag = <h5>|</h5>

    # W3C konforme XHMTL-Konfiguration
    stdheader {
        stdWrap {
            dataWrap =
            prefixComment =
        }

        3.headerClass =
        3.headerClass.noTrimWrap =
        10.stdWrap.wrap =
    }

    # Unterdrückt den Umbruch mit <BR>
    stdheader.10.stdWrap.wrap = |

    # Behebt Fehler bei der Ausgabe von der Tabellen Klasse
    parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class >

}


# Vermeidet CSC Default Wrapper
#tt_content.stdWrap.innerWrap >


# Wirft das CLEAR.GIF raus
tt_content {
    textpic.20.spaceBelowAbove = 0
    image.20.spaceBelowAbove = 0
    header.stdWrap.space = 0|0
    stdWrap.space = 0|0
    stdWrap.spaceBefore = 0
    stdWrap.spaceAfter = 0

    # entfernt 1-pixel CLEAR.GIF über jedem Bild mit Text
    textpic.20.noStretchAndMarginCells = 1

    # entfernt 1-pixel CLEAR.GIF über jedem Bild
    image.20.noStretchAndMarginCells = 1
}

content.headerSpace = 0|0
content.space = 0|0
lib.stdheader.stdWrap.space = 0|0


# Content Elemente aufräumen und Kommentare entfernen
tt_content {
    stdWrap.prefixComment >
    header.20.dataWrap >
    header.20.prefixComment >
    default.prefixComment >
    text.stdWrap.prefixComment >
    text.20.prefixComment >
    textpic.20.stdWrap.prefixComment >
    table.20.stdWrap.prefixComment >
    mailform.20.stdWrap.wrap >
    menu.20.stdWrap.prefixComment >
    image.20.stdWrap.prefixComment >
    list.20.stdWrap.prefixComment >
    stdWrap.prefixComment >
    text.20.prefixComment >
    bullets.20.stdWrap.prefixComment >
    table.20.stdWrap.prefixComment >
    stdWrap.dataWrap >
    stdWrap.prepend.dataWrap >
    imageStdWrap.dataWrap >
    imageStdWrapNoWidth.wrap >
}

# entfernt automatische Abstände
styles.content.imgtext.colSpace = 0
styles.content.imgtext.rowSpace = 0
styles.content.imgtext.textMargin = 10

# Noch ein paar <br> entfernen
styles.content.imgtext.caption.1.wrap = |
styles.content.imgtext.caption.1.spaceBefore = 0
styles.content.imgtext.caption.1.br = 0

# Rahmen bei Checkbox "Rahmen setzen" veraendern
styles.content.imgtext.borderThick = 1
styles.content.imgtext.borderColor = #000000
styles.content.imgtext.borderSelector = DIV.imgtext