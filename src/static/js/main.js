$(document).ready(function(){

    // create our floating button
    $('.fixed-action-btn').floatingActionButton();

    // When one of the floating buttons is clicked, change the region according to the selected one
    $(".fixed-action-btn li").on('click', function() {
        $('.region-param').attr('id', this.id);
    });

    $("#summonerSearch").submit(function(event) {
        event.preventDefault();
        // Grabs the form
        $this = $(this);
        // Create our query string based on user selections
        let url = $this.attr('action') + '?summonerName=' + $('#summonerName').val() + '&region=' + $('.region-param').attr('id');
        // Go to the /summoner action with the query string created
        window.location.href = url;
    });

});