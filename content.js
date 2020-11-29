// Minimum and maximum lengths of "chunks" that can be emboldened
// i.e. alternating chunks of text of word count between min and max
// are emboldened or un-emboldened.
let min = 3;
let max = 5;
// Fix max to work with the Math.random() shenanigans
max -= (min - 1);

let genCount = function(){
    return Math.floor(Math.random() * max) + min;
};
let activated = false;


chrome.runtime.onMessage.addListener(receiveFunc);
function receiveFunc(){
    let url = location.href.toLowerCase();
    let components = url.split(".");
    let main = components[1];
    console.log(main);

    let openTag;
    let closeTag;
    let searchTags = ["p", "span", "li"];
    // Different sites use different tags for text containerisation and emboldening
    switch(main){
        case "reddit":
            openTag = "<strong class=\"_12FoOEddL7j_RgMQN0SNeU\">";
            closeTag = "</strong>";
            break;
        case "bbc":
            openTag = "<b class=\"css-14iz86j-BoldText e5tfeyi0\">";
            break;
        case "theguardian":
            openTag = "<strong>";
            closeTag = "</strong>";
            searchTags.push("p.css-38z03z");
            break;
        default:
            openTag = "<b>";
            closeTag = "</b>";
            break;
    }

    if(!activated){
        activated = true;
        searchTags.forEach(tag => {
            $(tag).each(function () {

                let p = $(this);
                let paragraph = p.text().split(" ");

                let newHTML = "<p>";
                let count = genCount();
                let bolding = true;
                paragraph.forEach(word => {
                    if (count === 0) {
                        count = genCount();
                        newHTML += bolding ? openTag : closeTag;
                        bolding = !bolding;
                    }
                    newHTML += word + " ";
                    count -= 1;
                });
                newHTML += bolding ? "<p>" : closeTag + "</p>";
                $(this).html(newHTML);
            });
        });
    }
}