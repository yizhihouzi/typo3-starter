plugin.tx_news {

	/*
        Language configuration and translation
    */
	_LOCAL_LANG.de {
        more-link = mehr erfahren …
        back-link = zurück zur News-Übersicht
	}

    /*
        Main settings and configuration
    */
	settings {
    	
		cssFile = {$plugin.tx_news.settings.cssFile}

		# Displays a dummy image if the news have no media items
		displayDummyIfNoMedia = 0

		# Output format
		format = html

		# general settings
		overrideFlexformSettingsIfEmpty = cropMaxCharacters,dateField,timeRestriction,orderBy,orderDirection,backPid,listPid,startingpoint,recursive,list.paginate.itemsPerPage,list.paginate.templatePath

		includeSubCategories = 0
		
		detailPidDetermination = flexform, categories, default
		
		# set default pid's
		defaultDetailPid = {$plugin.tx_news.custom.detailPid}
		#listPid = {$plugin.tx_news.custom.listPid}
		#backPid = {$plugin.tx_news.custom.backPid}

        # Use additional code for google analytics tracking of the social functionalities.
		analytics {
			social {
				facebookLike = 0
				facebookShare = 0
				twitter = 0
			}
		}
		
		dateField = datetime

		cropMaxCharacters = 150
		orderBy = datetime
		orderDirection = desc
		topNewsFirst = 0
		orderByAllowed = sorting,author,uid,title,teaser,author,tstamp,crdate,datetime,categories.title

		facebookLocale = de_DE
		googlePlusLocale = de
		disqusLocale = de
		
		# clean up link
		link {
			skipControllerAndAction = 1
		}


		/*
            Detail view
        */
		detail {
			errorHandling = pageNotFoundHandler
			registerProperties = keywords,title
			showSocialShareButtons = 0
			
			# enable disqus comments
			disqusShortname =

			# media configuration
			media {
				image {
					maxWidth = 282
					maxHeight =

					# Get lightbox settings from css_styled_content
					lightbox {
						enabled = {$styles.content.imgtext.linkWrap.lightboxEnabled}
						class = {$styles.content.imgtext.linkWrap.lightboxCssClass}
						width = {$styles.content.imgtext.linkWrap.width}
						height = {$styles.content.imgtext.linkWrap.height}
						rel = gallery[myImageSet]
					}
				}

				video {
					width = 282
					height = 300
				}
			}
		}

		/*
            List view
        */
		list {
    		
    		
			# media configuration
			media {
				image {
					maxWidth = 100
					maxHeight = 100
				}
				dummyImage = typo3conf/ext/news/Resources/Public/Images/dummy-preview-image.png
			}

			# Paginate configuration.
			paginate {
				itemsPerPage = 10
				insertAbove = 0
				insertBelow = 1
				prevNextHeaderTags = 1
				maximumNumberOfLinks = 3
			}

			rss {
				channel {
					title = {$plugin.tx_news.rss.channel.title}
					description = {$plugin.tx_news.rss.channel.description}
					language = {$plugin.tx_news.rss.channel.language}
					copyright = {$plugin.tx_news.rss.channel.copyright}
					generator = {$plugin.tx_news.rss.channel.generator}
					link = {$plugin.tx_news.rss.channel.link}
				}
			}
		}

		# Opengraph implementation
		opengraph {
			site_name = {$plugin.tx_news.opengraph.site_name}
			type = article
			admins = {$plugin.tx_news.opengraph.admins}
			email = {$plugin.tx_news.opengraph.email}
			phone_number = {$plugin.tx_news.opengraph.phone_number}
			fax_number = {$plugin.tx_news.opengraph.fax_number}
			latitude = {$plugin.tx_news.opengraph.latitude}
			longitude = {$plugin.tx_news.opengraph.longitude}
			street-address = {$plugin.tx_news.opengraph.street-address}
			locality = {$plugin.tx_news.opengraph.locality}
			region = {$plugin.tx_news.opengraph.region}
			postal-code = {$plugin.tx_news.opengraph.postal-code}
			country-name = {$plugin.tx_news.opengraph.country-name}
		}
	}
}