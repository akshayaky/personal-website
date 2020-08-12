

window.onload= function() {readingTime()};

//calculates the time required to read an article based on the word count
function readingTime() {
    nodes = document.querySelectorAll(".blog-content > p");
    len = nodes.length
    wordLen = 0
    for (let i = 0; i < len; i++) {
        wordLen += nodes[i].innerHTML.split(" ").length;     
    }
    time = wordLen/200;
    if(time  > 1)
    document.querySelector("#reading-time").innerHTML = Math.floor(time) + " min read"; 
    console.log(wordLen, nodes[0].innerHTML);
}