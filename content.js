var elements = document.getElementsByTagName('*');

function replaceWord(word1, word2) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;

                var replacedText = text.replace(word1, word2);


                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

replaceWord("Donald", "Mr. Crazy");
replaceWord("Trump", "Wallman");
replaceWord("businesses", "money-mayhem-machines");
replaceWord("Republicans", "Snake People");
replaceWord("economics", "dank memes");
replaceWord("Mexico", "Wallman's home country");
replaceWord("Mike", "British");
replaceWord("ISIS", "International Space Igloo Stationiers");
replaceWord("violent", "stinky");
replaceWord("violence", "love and peace");
replaceWord("lawyer", "dragon");
replaceWord("Russia", "Disneyland");
replaceWord("Americans", "Pokemon");