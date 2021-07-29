$(document).ready(function() {
    const images = JSON.parse(localStorage.getItem("images")) || [];
    for (image of images) {
        const listItem = $(`<li><img src="${image}"></img></li>`);
        //to display images on the HTML
        $('#images').append(listItem);
    }


});


$(".btn").click(function(ev) {

    //saving the images liked to local storage in key heroimages
    const imageSrc = $(this).parent().children("img").attr("src");
    const localStorageImages = localStorage.getItem("heroimages");
    const images = JSON.parse(localStorageImages) || [];
    images.push(imageSrc);
    localStorage.setItem("heroimages", JSON.stringify(images));


});

$(".commentbutton").click(function() {

    //saving the comments left by user in key comments in local storage
    let textarea = $("#comments").val();
    let localStorageComments = localStorage.getItem("comments");
    let comments = JSON.parse(localStorageComments) || [];
    comments.push(textarea);
    localStorage.setItem("comments", JSON.stringify(comments));

});

// object to save the different inputs from user in one area
function contactUs(name, lastName, subject) {
    this.name = name;
    this.lastName = lastName;
    this.subject = subject;
}


$("#contactUsButton").click(function() {
    //saving the object with the inputs from user in local storage
    let contact = new contactUs($("#fname").val(), $("#lname").val(), $("#subject").val());
    let localStorageContact = localStorage.getItem("contacts");
    let contactInfo = JSON.parse(localStorageContact) || [];
    contactInfo.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contactInfo));
});