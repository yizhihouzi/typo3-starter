# Wenn aktiviert, ersetzt es im Page Tree die Tooltipps mit dem Navigationstitel anstatt dem einfachen Title
options.pageTree.showNavTitle = 1

# Ausblenden der unbenutzten Spalten im Backend
mod.SHARED.colPos_list= 1,0,2,3,4

# Seitenlayout Auswahl definieren
TCEFORM.pages.layout {
    # Bezeichnungen für unterschiedliche Seiten Layouts definieren
    altLabels.0 = Standard

    # Entfernt die Seiten Layouts
    removeItems = 3,2,1
}

# Entfernt nicht benötigte Seiteneigenschaften für Backenduser
TCEFORM.pages {
    subtitle.disabled = 1
    tx_realurl_pathsegment.disabled = 1
    fe_group.disabled = 1
    fe_login_mode.disabled = 1
    author.disabled = 1
    author_email.disabled = 1
    lastUpdated.disabled = 1
    keywords.disabled = 1
    content_from_pid.disabled = 1
    newUntil.disabled = 1
    l18n_cfg.disabled = 1
    module.disabled = 1
    alias.disabled = 1
    target.disabled = 1
    no_search.disabled = 1
    editlock.disabled = 1
    php_tree_stop.disabled = 1
    #media.disabled = 1
    layout.disabled = 1
    categories.disabled = 1
}

# Benennt Seiteneigenschaften für Backenduser um
TCEFORM.pages {
    abstract.label.de = Seitentitel
}

# Entfernt nicht benötigte Seitentypen für Backenduser (kann teilweise auch bei den Benutzerrechten eingestellt werden)
TCEFORM.pages.doktype {
    #1 = Standard
    #2 = Erweitert
    #3 = Externe URL
    #4 = Shortcut
    #5 = Nicht im Menü
    #6 = Backend Benutzer Bereich
    #7 = Mount Seite
    #199 = Trennlinie
    #254 = Sysordner
    #255 = Recycler
    #--div-- = Trennlinie
    removeItems=2,5,6,7,255
}

# Entfernt nicht benötigte Content-Element-Eigenschaften für Backenduser
TCEFORM.tt_content {
    fe_group.disabled = 1
    spaceAfter.disabled = 1
    spaceBefore.disabled = 1
    rte_enabled.disabled = 1
    sys_language_uid.disabled = 1
    linkToTop.disabled = 1
    header_position.disabled = 1
    date.disabled = 1
    categories.disabled = 1
    layout.disabled = 1
    #endtime.disabled = 1
}

# Entfernt nicht benötigte tt_news Eingabefelder für Backenduser
TCEFORM.tt_news {
    related.disabled = 1
    fe_group.disabled = 1
    keywords.disabled = 1
    author.disabled = 1
    author_email.disabled = 1
    editlock.disabled = 1
    archivedate.disabled = 1
    sys_language_uid.disabled = 1
    type.disabled = 1
    category.disabled = 1
    starttime.disabled = 1
    endtime.disabled = 1
}

# Entfernt nicht benötigte tt_powermail Eingabefelder für Backenduser -> im Plugin
TCEFORM {
    tt_content {
        pi_flexform {
            powermail_pi1 {
                main {
                    settings\.flexform\.main\.moresteps.disabled = 1
                    settings\.flexform\.main\.optin.disabled = 1
                    #settings\.flexform\.main\.confirmation.disabled = 1
                    #settings\.flexform\.main\.pid.disabled = 1
                }

                receiver {
                    settings\.flexform\.receiver\.fe_group.disabled = 1
                }

                thx {
                    #settings\.flexform\.thx\.redirect.disabled = 1
                }
            }
        }
    }
}

# Entfernt nicht benötigte tt_powermail Eingabefelder für Backenduser -> in der Formularkonfiguration
TCEFORM {
    tx_powermail_domain_model_forms {
        css.disabled = 1
        starttime.disabled = 1
        endtime.disabled = 1
        sys_language_uid.disabled = 1
    }
    tx_powermail_domain_model_pages {
        css.disabled = 1
        starttime.disabled = 1
        endtime.disabled = 1
        sys_language_uid.disabled = 1
    }
    tx_powermail_domain_model_fields {
        css.disabled = 1
        create_from_typoscript.disabled = 1
        feuser_value.disabled = 1
        multiselect.disabled = 1
        auto_marker.disabled = 1
        own_marker_select.disabled = 1
        starttime.disabled = 1
        endtime.disabled = 1
        sys_language_uid.disabled = 1
        #prefill_value.disabled = 1
    }
}

# Konfiguration des tt_content Objekts
TCEFORM.tt_content {
    # Breite des RTE in Fullscreen-Ansicht
    bodytext.RTEfullScreenWidth = 100%

    # Headline Auswahl konfigurieren
    header_layout {
        # Neue Headlines zur Auswahl hinzufügen
        addItems {
            #6 = H1 Headline (Blau)
        }

        # Headlines umbenennen
        altLabels {
            1 = H2 Headline
            2 = H3 Headline
            3 = H4 Headline
            100 = Headline nicht ausgeben!
        }

        # Headlines aus der Auswahl entfernen
        removeItems = 4,5
    }


    # Content Element Rahmen Konfigurieren
    section_frame {
        # Rahmen hinzufügen (sorgt nur für Eintrag, wrap muss gesondert im TypoScript erstellt werden)
        addItems {
            100 = Custom Box
        }

        # Entfernen der Standardauswahl aus der Auswahlbox
        removeItems = 1,5,6,10,11,12,20,21,66
    }


    # Content Element Layout Konfigurieren
    layout {
        # Layout hinzufügen (sorgt nur für Eintrag, wrap muss gesondert im TypoScript erstellt werden)
        addItems {
            #100 = Custom Container
        }

        # Entfernen der Standardauswahl aus der Auswahlbox
        removeItems = 1,2,3,4,5,6,7
    }
}


# RTE Konfiguration
RTE {
    # Classes TextStyle
    classes >
    classes {
        hide {
            name = Verstecken
        }

        blue {
            name = blaue Schrift
        }

        grey {
            name = graue Schrift
        }

        highlight {
            name = Highlight (blau)
        }

        highlight2 {
            name = Highlight (grau)
        }

        date {
            name = Datum Kalender
        }

        tooltip {
            name = Tooltip
        }

        tooltipTrigger {
            name = Tooltip Button
        }

        priceTag {
            name = Preisschild
        }
    }

    #classesAnchor >
    classesAnchor {
        button-external {
            titleText = button
            class = button
            type = url
            image >
        }
        button-internal {
            titleText = button
            class = button
            type = page
            image >
        }
    }


    default {
        # RTE soll CSS verwenden
        useCSS = 0

        # Zuweisung der CSS-Datei
        contentCSS = fileadmin/template/assets/css/rte-formate.css

        # Markup options
        enableWordClean = 1
        removeTrailingBR = 1
        removeComments = 1
        removeTags = center, sdfield
        removeTagsAndContents = style,script

        # Buttons die gezeigt/versteckt werden
        showButtons = formatblock, textstyle, textstylelabel, blockstyle, blockstylelabel, bold, italic, underline, left, center, right, orderedlist, unorderedlist, unlink, link, image, line, removeformat, tablerestyle, findreplace, undo, redo, about, outdent, indent, chMode, table, toggleborders, tableproperties

        hideButtons = fontstyle, fontsize, strikethrough,lefttoright, righttoleft, textcolor, bgcolor, textindicator, emoticon, user, spellcheck, inserttag, editelement,  justifyfull, subscript, superscript, acronym, copy, cut, paste, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, showhelp, textcolor, insertcharacter, about

        # Sortierung der RTE Buttons
        toolbarOrder = formatblock, textstyle, blockstyle, bold, italic, underline, left, center, right, orderedlist, unorderedlist, outdent, indent, findreplace, undo, redo, image, link, unlink, removeformat, line, chMode, table, toggleborders, tableproperties

        # mögliche Buttons
        #blockstylelabel, blockstyle, textstylelabel, textstyle, fontstyle, fontsize, formatblock, bold, italic, underline, strikethrough, subscript, superscript, lefttoright, righttoleft, left, center, right, justifyfull, insertparagraphafter, insertparagraphbefore, orderedlist, unorderedlist, definitionlist, definitionitem, outdent, indent, textcolor, bgcolor, textindicator, emoticon, insertcharacter, line, link, image, table, user, acronym, findreplace, spellcheck, chMode, inserttag, removeformat, copy, cut, paste, undo, redo, showhelp, about, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge


        # Hält die RTE Icons gegroupt zusammen
        keepButtonGroupTogether = 1
        keepToggleBordersInToolbar = 1

        # blendet Statusbar in htmlarea aus
        showStatusBar =  0

        # Add styles Left, center and right alignment of text in paragraphs and cells.
        inlineStyle.text-alignment (
            p.align-left, h1.align-left, h2.align-left, h3.align-left, h4.align-left, h5.align-left, h6.align-left, td.align-left { text-align: left; }
            p.align-center, h1.align-center, h2.align-center, h3.align-center, h4.align-center, h5.align-center, h6.align-center, td.align-center { text-align: center; }
            p.align-right, h1.align-right, h2.align-right, h3.align-right, h4.align-right, h5.align-right, h6.align-right, td.align-right { text-align: right; }
        )

        # Use stylesheet file rather than the above mainStyleOverride and inlineStyle properties to style the contents (htmlArea RTE only)
        ignoreMainStyleOverride = 1

        # Tabellen Editierungs-Optionen (cellspacing/ cellpadding / border)
        disableSpacingFieldsetInTableOperations = 0
        disableAlignmentFieldsetInTableOperations = 0
        disableColorFieldsetInTableOperations = 0
        disableLayoutFieldsetInTableOperations = 0
        disableBordersFieldsetInTableOperations = 0

        # Tabellen Optionen in der RTE Toolbar als Button verstecken oder anzeigen
        hideTableOperationsInToolbar = 1

        # Zeigt alle CSS-Klassen die in rte_formate.css vorhanden sind
        buttons.textstyle.showTagFreeClasses = 1
        buttons.blockstyle.showTagFreeClasses = 1

        # Classes: Paragraph (These classes should also be in the list of allowedClasses)
        classesParagraph >
        classesParagraph := addToList(align-left, align-center, align-right, hide, blue, grey, highlight, highlight2, date, tooltip, tooltipTrigger, priceTag)

        # Classes: Table (These classes should also be in the list of allowedClasses)
        #classesTD >
        #classesTD := addToList()

        # Classes: Links (These classes should also be in the list of allowedClasses)
        classesAnchor := addToList(button, lightbox)

        # Classes: Links (These classes should also be in the list of allowedClasses)
        classesLinks >
        classesLinks < RTE.default.classesAnchor

        # Classes: Table (These classes should also be in the list of allowedClasses)
        classesTable := addToList(last, pricetable)

        # List all class selectors that are allowed on the way to the database
        buttons.blockstyle.tags.div.allowedClasses >
        buttons.blockstyle.tags.div.allowedClasses = last, lightbox, link-extern, link-extern-new-window, link-intern, link-intern-new-window, mail, button, align-left, align-center, align-right, author, blue, grey, highlight, highlight2, date, tooltip, priceTag, hide

        buttons.textstyle.tags.span.allowedClasses >
        buttons.textstyle.tags.span.allowedClasses = last, lightbox, link-extern, link-extern-new-window, link-intern, link-intern-new-window, mail, button, align-left, align-center, align-right, author, blue, grey, tooltipTrigger, hide

        # Einträge aus Dropdown "Blockformate" entfernen
        buttons.formatblock.removeItems = h1, h6, div, address, pre, blockquote, section, article, nav, footer, header, aside

        proc {
            # tags die erlaubt / verboten sind
            allowTags = table, tbody, tr, th, td, colgroup, col, h1, h2, h3, h4, h5, h6, div, p, br, span, ul, ol, li, blockquote, strong, em, b, i, sub, sup, a, img, hr, cite, abbr, acronym, object, param, embed, hgroup
            denyTags = font

            overrideMode = css_transform

            # br wird nicht zu p konvertiert
            dontConvBRtoParagraph = 1

            # tags sind erlaubt außerhalt von p, div
            allowTagsOutside = img, hr

            # erlaubte attribute in p, div tags
            keepPDIVattribs = align, class, id

            # List all class selectors that are allowed on the way to the database
            allowedClasses < RTE.default.allowedClasses

            # RTE Entry HTML Parser Einstellungen
            HTMLparser_rte = 1
            HTMLparser_rte {
                # Tags die erlaubt/verboten sind
                allowTags < RTE.default.proc.allowTags
                denyTags < RTE.default.proc.denyTags

                # Tags die untersagt sind
                removeTags = font

                # Entfernt html-kommentare
                removeComments = 1

                # Tags die nicht übereinstimmen werden nicht entfernt (protect / 1 / 0)
                keepNonMatchedTags = 0

            }

            # DB Entry HTML Parser Einstellungen
            entryHTMLparser_db = 1
            entryHTMLparser_db {

                # Tags die erlaubt/verboten sind
                allowTags < RTE.default.proc.allowTags
                denyTags < RTE.default.proc.denyTags

                # Clean Tags
                noAttrib = i, u, strike, sub, sup, em, quote, blockquote, cite, tt, br, center

                rmTagIfNoAttrib = span, div, font

                # htmlSpecialChars = 1

                # Align attribute werden erlaubt
                tags {
                    p.fixAttrib.align.unset >
                    p.allowedAttribs = align, class, id

                    div.fixAttrib.align.unset >

                    hr.allowedAttribs = class
                    col.allowedAttribs = width

                    # Img tags werden erlaubt
                    img >
                }
            }

            # RTE Exit HTML Parser Einstellungen
            exitHTMLparser_rte = 1
            exitHTMLparser_rte {
                allowTags < RTE.default.proc.allowTags
                tags {
                    strong.remap = b
                    em.remap = i
                }
            }

            # DB Exit HTML Parser Einstellungen
            exitHTMLparser_db = 1
            exitHTMLparser_db {
                allowTags < RTE.default.proc.allowTags
                tags {
                    b.remap = strong
                    i.remap = em
                }
            }
        }

        # Do not allow insertion of the following tags
        hideTags = font

        # Use same processing as on entry to database to clean content pasted into the editor
        enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db

        # FE RTE configuration (htmlArea RTE only)
        FE < RTE.default
        FE.userElements >
        FE.userLinks >
    }
}