var $grid = $('.grid');

$grid.imagesLoaded( function(){
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: 375,
    gutter: 20,
    isFitWidth: true
  });
});