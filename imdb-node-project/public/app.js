//FEEDBACK:
// 1) NICE JOB AMMAR! Your database loads really slowly but it looks great. I like how you added a personal flair to it.
// I also like that you made the choice to move the back button on each individual movie page. I think it're more intuitive now actually.
// 2) For an extra personal challenge, try doing this with one of the movie database apis and making search results come from that!

$( document ).ready(function(){
    $('#go').click(function(){
        const search = $('#search').val();
        location = '/search/'+ search;
    });
});


