requirejs.config({
  // input correct way here ( for ex. bitrix/templates/site-template/node_modules/ )
  baseUrl: 'node_modules/',
  shim: {
    'slick': ['jquery'],
    'scroll': ['jquery'],
    'styler': ['jquery']
  },
  paths: {
    'jquery': 'jquery/dist/jquery.min',
    'slick': 'slick-carousel/slick/slick.min',
    'fancybox': 'jquery-fancybox/source/js/jquery.fancybox.pack',
    'scroll': 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min',
    'styler': 'jquery.formstyler/jquery.formstyler.min'
  }
});
