$(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();

    function shuffleImg() {
        let images = $("#sortable img");
        let parent = $("#sortable");

        images.sort(function () {
            return Math.random() - 0.5;
        })

        parent.empty();
        images.each(function () {
            parent.append($(this));
        });

    }

    function checkOrder() {
        let images = $("#sortable img");
        let correctOrder = ["arc1", "arc2", "arc3", "arc4", "arc5", "arc6"];
        let isCorrect = true;

        images.each(function (index) {
            let imgSrc = $(this).attr("src");
            if (!imgSrc.includes(correctOrder[index])) {
                isCorrect = false;
            }
        });

        let messageDiv = $("#message");
        if (isCorrect) {
            messageDiv.text("Vous avez gagné !").removeClass("error").addClass("success").fadeIn();
        }   else {
                messageDiv.text("Ce n'est pas bon !").removeClass("success").addClass("error").fadeIn();
        }

        setTimeout(function () {
            messageDiv.fadeOut();
        }, 3000);
    }



    $("#shuffle").click(function () {
        shuffleImg();
    });

    $("#confirm").click(function () {
        checkOrder();
    })
});



