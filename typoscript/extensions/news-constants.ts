plugin.tx_news {
    
    custom {
        listPid = 7
        detailPid = 8
        backPid = 7
    }
    
	rss.channel {
		title = Dummy Title
		description =
		link = http://example.com
		language = de-gb
		copyright = TYPO3 News
		category =
		generator = TYPO3 EXT:news
	}
	
	opengraph {
		site_name =
		admins = 
		email =
		phone_number =
		fax_number =
		latitude =
		longitude =
		street-address =
		locality =
		region =
		postal-code =
		country-name =
	}
	
	view {
        # cat=plugin.tx_news/file; type=string; label=Path to template root (FE)
		templateRootPath = EXT:news/Resources/Private/Templates/
		# cat=plugin.tx_news/file; type=string; label=Path to template partials (FE)
		partialRootPath = EXT:news/Resources/Private/Partials/
		# cat=plugin.tx_news/file; type=string; label=Path to template layouts (FE)
		layoutRootPath = EXT:news/Resources/Private/Layouts/
	}

	settings {
		# cat=plugin.tx_news/file; type=string; label=Path to CSS file
		cssFile = EXT:news/Resources/Public/Css/news-basic.css
	}
}