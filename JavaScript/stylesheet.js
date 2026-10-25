const shareButton = document.querySelector(".sharebutton");
const shareContainer = document.querySelector(".socialLinkCtn");
var isclicked = false

shareButton.addEventListener("click", function () {

    isclicked = !isclicked;
    if (isclicked){
        console.log("button active")
        shareButton.classList.remove("sharebuttonbackground");
        shareContainer.classList.toggle("active")
        shareContainer.classList.remove("socialLinkCtn-deactive");
        shareContainer.classList.add("socialLinkCtn");
    }
    else{
        console.log("button deactive")
        //shareContainer.classList.toggle("deactive");
         shareButton.classList.add("sharebuttonbackground");
        shareContainer.classList.add("socialLinkCtn-deactive");
        shareContainer.classList.remove("socialLinkCtn");
    }
    
    

});
