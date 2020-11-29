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

    let openTag = "<b>";
    let closeTag = "</b>";
    // Different sites use different tags for emboldening
    switch(main){
        case "reddit":
            openTag = "<strong class=\"_12FoOEddL7j_RgMQN0SNeU\">"
            closeTag = "</strong>"
    }

    if(!activated){
        activated = true;

        $("p").each(function () {

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


        $("span").each(function () {

            let p = $(this);
            let paragraph = p.text().split(" ");
            if (paragraph.length < 5) return;
            let newHTML = "<span>";
            let count = Math.floor(Math.random() * 5) + 3;  // Random number between 3 and 7
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
            newHTML += bolding ? "<span>" : closeTag + "</span>";
            $(this).html(newHTML);
        });
    }
}