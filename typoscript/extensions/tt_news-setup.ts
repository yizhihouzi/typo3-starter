/*
    Plugin: tt_news Konfiguration
*/
plugin.tt_news = USER
plugin.tt_news {


	# template file
	templateFile = {$filepath.extensiontemplates}tt_news.html

	# maximum number of news all lists but latest
	limit = 6

	# maximum number of news in "latest"
	latestLimit = 6

	# page where the "back to list" link in single view links to
	backPid = {$news.backID}

	# page for the Single view
	singlePid = {$news.singleID}

	# page(s) where the news articles are stored -> "Starting point"
	pid_list = {$news.dataID}

	# page id for the archive link in "LATEST" template
	archiveTypoLink.parameter = {$news.archiveID}


	_LOCAL_LANG.de {
		latestHeader = Aktuelles
		textFiles = Anhang:
		more = Weiterlesen
		goToArchive = zum Archiv
		backToList = Zurück zu Aktuelles
		textRelated = In Verbindung stehende Informationen:
		textLinks = Links:
		noNewsToListMsg =
		catmenuHeader = Wählen Sie ein Thema aus dieser Liste
		pi_list_browseresults_next = ›
		pi_list_browseresults_prev = ‹
		pi_list_browseresults_last <
		pi_list_browseresults_first <
	}

}


plugin.tt_news.displayLatest {

	# Crop Subheader
	subheader_stdWrap.crop = 70 | ... | 1


	# Crop Image
	image >
	image.stdWrap.cObject = IMAGE
	image.stdWrap.cObject.file = GIFBUILDER
	image.stdWrap.cObject.file {
		XY = 150,150
		10 = IMAGE
		10 {
			offset = 0,0
			file {
				import=uploads/pics/
				import.data = field:image
				import.listNum = 0
				import.override.field = image
				maxW = 150
				maxH = 150
				width = 150c
				height = 150c-0
			}
		}
	}
}

plugin.tt_news.displayList {

	# Crop Subheader
	subheader_stdWrap.crop = 600 | ... | 1

    imageWrapIfAny = <figure class="newsImages">|</figure>
    caption_stdWrap.dataWrap = <figcaption>|</figcaption>

	# Crop Image
	image >
	image.stdWrap.cObject = IMAGE
	image.stdWrap.cObject.file = GIFBUILDER
	image.stdWrap.cObject.file {
		XY = 600,250
		10 = IMAGE
		10 {
			offset = 0,0
			file {
				import=uploads/pics/
				import.data = field:image
				import.listNum = 0
				import.override.field = image
				maxW = 600
				maxH = 250
				width = 600c
				height = 250c-0
			}
		}
	}
}

plugin.tt_news.displaySingle {
    subheader_stdWrap.wrap = <p><strong>|</strong></p>

    imageWrapIfAny = <figure class="newsImages">|</figure>
    caption_stdWrap.dataWrap = <figcaption>|</figcaption>

    image.imageLinkWrap {
        JSwindow = 0
        directImageLink = 1
        linkParams.ATagParams {
            dataWrap = class="lightbox" rel="lightbox{field:uid}"
        }
    }

    # Crop Image
	image >
	image.stdWrap.cObject = IMAGE
	image.stdWrap.cObject.file = GIFBUILDER
	image.stdWrap.cObject.file {
		XY = 600,250
		10 = IMAGE
		10 {
			offset = 0,0
			file {
				import=uploads/pics/
				import.data = field:image
				import.listNum = 0
				import.override.field = image
				maxW = 600
				maxH = 250
				width = 600c
				height = 250c-0
			}
		}
	}

    nextLink_stdWrap.wrap = |
    prevLinkLabel_stdWrap.wrap = |
    nextLinkLabel_stdWrap.wrap = |
    showTitleAsPrevNextLink = 0
}

/**
 * Cat menu
 */
plugin.tt_news {
    displayCatMenu {
        mode = nestedWraps

        catmenu_stdWrap.wrap = <nav id="catNav><ul>|</ul></nav>

        catmenuHeader_stdWrap.wrap = <li class="hidden">|</li>

        catmenuItem_NO_stdWrap.wrap = <li>|</li>
        catmenuItem_ACT_stdWrap.wrap = <li class="act">|</li>
        catmenuLevel1_stdWrap.wrap = |
        catmenuLevel2_stdWrap.wrap = |
        catmenuLevel3_stdWrap.wrap = |
        catmenuLevel4_stdWrap.wrap = |
    }
}



plugin.tt_news {
    usePiBasePagebrowser = 1
    pageBrowser {
        maxPages = 999
        showResultCount = 0
        showPBrowserText = 1
        dontLinkActivePage = 1
        tableParams =

        showFirstLast = 0
        pagefloat = center
        showRange = 0

        disabledLinkWrap = <span>|</span>
        inactiveLinkWrap = |
        activeLinkWrap = <span class="active">|</span>
        LinksWrap = |
        showResultsWrap = |
        showResultsNumbersWrap = <em>|</em>
        browseBoxWrap = |
        browseLinksWrap = |
    }
}