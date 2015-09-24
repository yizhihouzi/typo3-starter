/*
    Default constants for template
*/
config {
    adminPanel = 0
    debug = 0
    absRefPrefix = /

    # Tracking
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
    Setting quick path to template files
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
    News constants
*/
# news {
#     # ID back/archive
#     backID = 
#     archiveID = 
# 
#     # ID single view
#     singleID = 
# 
#     # ID tt_news Sys-folder
#     dataID = 
# 
#     # RSS Title/Description
#     rssTitle = 
#     rssDescription = Bleiben Sie auf dem Laufenden
# }


/*
    Native lightbox
*/
styles.content.imgtext.linkWrap {
	lightboxEnabled = 1
	lightboxRelAttribute = gallery{field:uid}
	lightboxCssClass = fancybox
}

# prevents up scaling small images in lightbox
tt_content.image.20.1.imageLinkWrap.height =
tt_content.image.20.1.imageLinkWrap.width =


/*
    Include external constants files
*/
# <INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/typoscript/extensions/tt_news-constants.ts">