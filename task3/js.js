let strongItem = document.getElementsByTagName("strong");

function itemRed() {
    for (let i = 0; i < strongItem.length; i++) {
        strongItem[i].classList.add("myStyle");
    }
}
function classic() {
    for (let i = 0; i < strongItem.length; i++) {
        strongItem[i].classList.remove("myStyle");
    }
}