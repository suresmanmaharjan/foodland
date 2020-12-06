(function($) {
    "use strict";
    $(document).ready(function() {
        // $(window).on('scroll', function () {
        //     var windowpos = $(window).scrollTop();
        //     if (windowpos >= pos.top) {
        //         s.addClass("menu-onscroll");
        //     } else {
        //         s.removeClass("menu-onscroll");
        //     }
        // });

        if ( $( '#lgx-menu').length ) {
            var dataAttr = $('#lgx-grid-wrapper').data();
            var $grid = $('#lgx-grid-wrapper').isotope({
                // options
                itemSelector: '.lgx-grid-item',
                layoutMode: 'masonry'//fitRows, vertical
            });

            $(window).on("load", function() {
                    // show all items
                    // $grid.isotope({filter: '*'});
                    $grid.isotope({filter: '.lunch'});
                }
            );

            // Filter items on button click
            $('#lgx-filter').on('click', 'a.lgx-filter-item', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({filter: filterValue});
            });

            $('#lgx-filter').on('click', 'a.lgx-filter-item', function (e) {
                e.preventDefault();
                var link = $(this);

                $("#lgx-filter").find(".active").removeClass("active");
                link.parent().addClass("active");
                return false;
            });
        }

        if ($(window).width() < 991) {
            $('#lgx-grid-wrapper').removeClass('lgx-list-wrapper');
        }


        if ($(window).width() < 787) {
            $('#navbar').removeClass('lgx-collapse');
        }

    });
})(jQuery);
