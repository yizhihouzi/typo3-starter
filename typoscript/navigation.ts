/*
    Dekleration und Konfiguration der Hauptnavigation
*/
lib.mainNavigation = HMENU
lib.mainNavigation {
    special = directory
    special.value = {$config.rootID}
    excludeUidList = {$config.navExcludeList}

    1 = TMENU
    1 {
        begin = 1
        expAll = 1
        NO.entryLevel = 1
        NO.allWrap.insertData = 1
        NO.ATagBeforeWrap = 1
        NO.stdWrap.htmlSpecialChars = 1
        NO.before.dataWrap = <li class="uid{field:uid}">|
           NO.wrapItemAndSub = |</li>

        CUR = 1
        CUR.before.dataWrap = <li class="active uid{field:uid}">|
           CUR.wrapItemAndSub = |</li>
        CUR.ATagParams = href=#
        CUR.ATagBeforeWrap = 1


        ACT = 1
        ACT.before.dataWrap = <li class="subactive uid{field:uid}">|
           ACT.wrapItemAndSub = |</li>
        ACT.ATagBeforeWrap = 1
    }

    2 = TMENU
    2 {
        wrap = <ul>|</ul>
        NO.entryLevel = 2
        NO.allWrap.insertData = 1
        NO.ATagBeforeWrap = 1
        NO.stdWrap.htmlSpecialChars = 1
        NO.before.dataWrap = <li class="uid{field:uid}">|
           NO.wrapItemAndSub = |</li>

        ACT = 1
        ACT.ATagParams = href=#
        ACT.before.dataWrap = <li class="active uid{field:uid}">|
           ACT.wrapItemAndSub = |</li>

        CUR = 1
        CUR.ATagParams = href=#
        CUR.before.dataWrap = <li class="active uid{field:uid}">|
           CUR.wrapItemAndSub = |</li>
    }
}


/*
    Dekleration und Konfiguration der Service Navigation
*/
lib.serviceNavigation = HMENU
lib.serviceNavigation {
    special = directory
    special.value = {$config.serviceNavigationPID}

    1 = TMENU
    1 {
        begin = 1
        expAll = 1
        NO.entryLevel = 1
        NO.allWrap.insertData = 1
        NO.ATagBeforeWrap = 1
        NO.stdWrap.htmlSpecialChars = 1
        NO.wrapItemAndSub = <li>|</li>|*|<li>|</li>|*|<li class="last">|</li>

        CUR = 1
        CUR.wrapItemAndSub = <li class="active">|</li>|*|<li class="active">|</li>|*|<li class="active last">|</li>
        CUR.ATagParams = href=#
        CUR.ATagBeforeWrap = 1

        ACT = 1
        ACT.wrapItemAndSub = <li class="active">|</li>|*|<li class="active">|</li>|*|<li class="active last">|</li>
        ACT.ATagBeforeWrap = 1
    }
}