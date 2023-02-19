$(window).on('load', function (){
    let links = $('.ft_col .link a');
    let popup = $('.ft_col .link .popup');
    for(let i = 0; i < links.length; i++){ //функционал для всплывающей информации
        $(links[i]).on('click', function (){
            $(popup[i]).toggleClass('show_popup');
        })
    }
})