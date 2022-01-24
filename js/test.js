$ ( '.layer_type .sub_depth0 li'). on ({
    'mouseover': function () {
        $ (this) .find ( '> ul'). stop (true, true) .fadeIn ( 'fast');
        $ (this) .find ( '> a'). addClass ( 'active');
        //console.log('open ');
    },
    'mouseleave': function () {
        $ (this) .find ( '> ul'). stop (true, true) .fadeOut ( 'fast');
        $ (this) .find ( '> a'). removeClass ( 'active');
        //console.log('hide ');
    }
});
