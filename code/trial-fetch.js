document.addEventListener("DOMContentLoaded", function() {
    
    let links = document.querySelectorAll('.HLLandingControl ul li a[id*="hypTitle"]');   

    let linksArr = Array.from(links);

    linksArr.map(link => {
        fetch(link).then(function(response){


            return response.text();

        }).then(function(html){

            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            console.log(doc);

            var img = doc.querySelector('.blogs-block img:first-of-type:not([id*="Avatar"])');

            var imgSrc = img.getAttribute('src');

            const imgLi = link.closest('li');

            $(imgLi).prepend('<deiv class="img-container loading"></div>');

            var imgLiCon = $(imgLi).find($(".img-container"));

            $(imgLiCon).css('background-image', 'url("' + imgSrc + '")');

            $(imgLiCon).removeClass('loading');

            $(imgLiCon).removeClass('no-ajax-image');

        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
               
    } )
  });

