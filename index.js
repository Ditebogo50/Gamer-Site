$(document).ready(function() {
    //drop down menu that appears on hover
    $(".socialLinks").hover(
        function() {
            $(".hideSocial").finish().slideDown('medium');
        },
        function() {
            $(".hideSocial").finish().slideUp('medium');
        });

    //hide and show function when the button is clicked
    $(".hideButton").click(function() {
        $(".testimonial").hide();
    });
    $(".showButton").click(function() {
        $(".testimonial").show();
    });

    //Chained effect on the title with sliding effects
    $(".subhead").on("click", function() {
        $(this).slideUp().slideDown().animate({ opacity: 0.5 });
    });

    //animation effect on the about page for users with difficulty reading 
    $(".animationH1").click(function() {
        $(".about").css("border", "0px solid pink").css("font-size", "12px").animate({ borderWidth: "10px" }).animate({ fontSize: "46px" });
    });



});


//saving any image clicked in local storage to acces later for display in HTML
$("img").click(function(event) {
    const imageSrc = event.target.src;
    const images = JSON.parse(localStorage.getItem("images")) || [];
    images.push(imageSrc);
    localStorage.setItem("images", JSON.stringify(images));
    alert(images.length)

})