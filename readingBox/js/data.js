(function($,window){
    
})(zepto,window)


// $(document).ready(function() {
//     //设置基准响应比率；
//     var _height = parseInt(document.documentElement.clientHeight);
//     var _width = parseInt($(document.body).css("width"));
//     var _sheight = parseInt(window.screen.height);
//     var _swidth = parseInt(window.screen.width);
//     $(window).bind("orientationchange", function() {
//         page_reor();
//     });
//     function page_reor() {
//         if (window.orientation == -90 || window.orientation == 90) {
//             if (_width < _height) {
//                 _new_width = _width * _sheight / _swidth;
//                 _new_height = _swidth;
//             } else {
//                 //alert('b');
//                 _new_width = _width;
//                 _new_height = _height;
//             }
//         } else {
//             if (_width > _height) {
//                 //alert('c');
//                 if (_swidth > _sheight) {
//                     _new_width = _width * _sheight / _swidth;
//                     _new_height = _height * _swidth / _sheight;
//                 } else {
//                     _new_width = _width * _swidth / _sheight;
//                     _new_height = _height * _sheight / _swidth;
//                 }
//             } else {
//                 //alert(_swidth+'d'+_sheight);
//                 _new_height = _height;
//                 _new_width = _width;
//             }
//         }
//         $("body").css({
//             "font-size": 32 * _new_height / 1136 + "px"
//         });
//     }
//     $("body").css({
//         "font-size": 32 * _height / 1136 + "px"
//     });
// })