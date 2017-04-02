/*
Huge credit to "Make America Kittens Again"
*/

var blacklist = ["trump"];

chrome.storage.local.get({
    blockPence: false,
    blockFarage: false,
    blockLePen: false,
    blockWilders: false,
    blockBannon: false
}, function (items) {
    if (items.blockPence) {
        blacklist.push("mike pence");
    };
    if (items.blockFarage) {
        blacklist.push("isis");
    };
    if (items.blockLePen) {
        blacklist.push("xenophobia");
    };
    if (items.blockWilders) {
        blacklist.push("hate");
    };
    if (items.blockBannon) {
        blacklist.push("nsfw");
    };

    document.addEventListener('DOMContentLoaded', meme(memeList), false);

});

var memeList = {
    "kitten": [
        { "file": "1.jpg", "Credit": "Crsan", "URL": "http://i.imgur.com/UIB2UE4.png", "type": "0" },
        { "file": "2.jpg", "Credit": "Abcrumley", "URL": "https://s-media-cache-ak0.pinimg.com/236x/11/b4/20/11b420fbf1595be3056ad6355277933c.jpg", "type": "0" },
        { "file": "3.jpg", "Credit": "Woodchild2010", "URL": "https://s-media-cache-ak0.pinimg.com/originals/35/dd/a7/35dda730657b0adc60be17ae856e9a0a.jpg", "type": "0" },
        { "file": "4.jpg", "Credit": "Vancouverfilmschool", "URL": "http://i3.cpcache.com/product/376541894/javascript_coffee_mug.jpg?side=Back&color=White&height=460&width=460&qv=90", "type": "0" },
        { "file": "5.jpg", "Credit": "Jameswragg", "URL": "http://lh6.ggpht.com/-tqTOdp-mP6w/UZEWXAEE0JI/AAAAAAAAAv0/dwDaFn8rtq8/s1600-h/lol_programming%25255B3%25255D.jpg", "type": "0" },
        { "file": "6.jpg", "Credit": "Eva101", "URL": "https://s-media-cache-ak0.pinimg.com/236x/e6/bf/0c/e6bf0cf566a8279c2b3c8c4ae7188a7a.jpg", "type": "0" },
        { "file": "7.jpg", "Credit": "Pinguino", "URL": "https://s-media-cache-ak0.pinimg.com/236x/8c/9a/cd/8c9acddb7725865128cc4eda3e289ca8.jpg", "type": "0" },
        { "file": "8.jpg", "Credit": "Daisyree Bakker", "URL": "https://s-media-cache-ak0.pinimg.com/236x/67/d3/79/67d37913081dfcdf0a1c002f3745b278.jpg", "type": "0" },
        { "file": "9.jpg", "Credit": "VictoriaPeckham", "URL": "http://www.flickr.com/photos/victoriapeckham/4000992556/", "type": "0" },
        { "file": "10.jpg", "Credit": "Jameswragg", "URL": "http://lh6.ggpht.com/-tqTOdp-mP6w/UZEWXAEE0JI/AAAAAAAAAv0/dwDaFn8rtq8/s1600-h/lol_programming%25255B3%25255D.jpg", "type": "0" },
        { "file": "11.jpg", "Credit": "Eva101", "URL": "https://s-media-cache-ak0.pinimg.com/236x/e6/bf/0c/e6bf0cf566a8279c2b3c8c4ae7188a7a.jpg", "type": "0" },
        { "file": "12.jpg", "Credit": "Pinguino", "URL": "https://s-media-cache-ak0.pinimg.com/236x/8c/9a/cd/8c9acddb7725865128cc4eda3e289ca8.jpg", "type": "0" },
        { "file": "13.jpg", "Credit": "Daisyree Bakker", "URL": "https://s-media-cache-ak0.pinimg.com/236x/67/d3/79/67d37913081dfcdf0a1c002f3745b278.jpg", "type": "0" },
        { "file": "14.jpg", "Credit": "VictoriaPeckham", "URL": "http://www.flickr.com/photos/victoriapeckham/4000992556/", "type": "0" }
    ]
};

function meme(memeList) {

    // called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with kittens
    var pagepics = document.getElementsByTagName("img"), i = 0, img;
    while (img = pagepics[i++]) {

        if (img.hasAttribute('replaced')) {
            // already replaced	
        }
        else {
            // not yet replaced
            var alttext = String(img.alt).toLowerCase();
            var imgsrc = String(img.src).toLowerCase();

            if (img.parentElement.nodeName != 'BODY') {
                // check parent innerHTML for blackilist
                var parenttag = img.parentElement.innerHTML.toLowerCase();
            }
            else {
                // prevent parse of entire doc
                var parenttag = '';
            };

            var imgwidth = img.clientWidth;
            var imgheight = img.clientHeight;

            blacklist.forEach(function (blist) {
                if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1) || (parenttag.indexOf(blist) != -1)) {

                    // append old src
                    img.setAttribute("replaced", img.src);

                    // remove srcsets, forcing browser to the kitten - eg, BBC News
                    if (img.hasAttribute('srcset')) {
                        img.removeAttribute('srcset');
                    };
                    // remove source srcsets if children of same parent <picture> element - eg, the Guardian
                    if (img.parentElement.nodeName == 'PICTURE') {
                        var theparent = img.parentNode;
                        for (var child = theparent.firstChild; child !== null; child = child.nextSibling) {
                            if (child.nodeName == "SOURCE") {
                                child.removeAttribute('src');
                                child.removeAttribute('srcset');
                            };
                        };

                    };
                    // knock out lazyloader data URLs so it doesn't overwrite kittens
                    if (img.hasAttribute('data-src')) {
                        img.removeAttribute('data-src');
                    };
                    if (img.hasAttribute('data-hi-res-src')) {
                        img.removeAttribute('data-hi-res-src');
                    };
                    if (img.hasAttribute('data-low-res-src')) {
                        img.removeAttribute('data-low-res-src');
                    };

                    // main replacement here
                    var randk = Math.floor(Math.random() * 13) + 1

                    img.src = 'https://raw.githubusercontent.com/Steven-19/Memeify/master/Programming%20Memes/' + memeList.kitten[randk].file + '';
                    img.width = imgwidth;
                    img.height = imgheight;

                    memeReplacements++;
                };
            });
        };
    }
};

// function to replace memed-images with the original SRCs

function undomeme() {

    var pagepics = document.getElementsByTagName("img"), i = 0, img;
    while (img = pagepics[i++]) {
        if (img.hasAttribute('replaced')) {
            img.src = img.getAttribute('replaced');
            img.removeAttribute('replaced');
        };
    };

}

// listener for context menu click invoking the above

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "undoMayMays") {
        undomeme();
    };
});