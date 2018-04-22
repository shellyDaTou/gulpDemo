(function () {
    "use strict";

    angular
        .module('kayApp')
        .directive('mainContent', mainContent)
        .directive('elemMaxHeight', elemMaxHeight);

    mainContent.$inject = [];
    function mainContent(){
        return{
            restrict: 'AE',
            link: function(scope,element,attrs){
                function setPageHeight(){
                    var windowHeight = $(window).height();
                    var setMinHeight = windowHeight - 70 - 124; //可用高度 = 窗口高度windowHeight-头部高度70像素-底部高度124像素
                    angular.element(element).css({'min-height':setMinHeight})
                }
                setPageHeight();
                $(window).resize(function(){
                    setPageHeight();
                });
            }
        }
    }

    elemMaxHeight.$inject = [];
    function elemMaxHeight(){
        return{
            restrict:'AE',
            link: function(scope,element,attrs){
                var availableHeight;//赋高变量
                var eleOffTopHeight = angular.element(element).offset().top;//元素距离页面顶部高度
                var bodyHeight =  document.body.scrollHeight;//整个文本高度
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;//窗口高度

                //判断页面是否有滚动条
                function hasScrollbar(){
                    return bodyHeight > windowHeight;
                }

                //给元素赋最大高度
                function elemMaxHeight(){
                    if(hasScrollbar()){
                        if(eleOffTopHeight < windowHeight){
                            availableHeight = windowHeight - eleOffTopHeight;
                            angular.element(element).css({'max-height':availableHeight,'overflow-y':'auto'});
                        }else{
                            angular.element(element).css({'max-height': 500 + 'px','overflow-y':'auto'});
                        }
                    }else{
                        availableHeight = windowHeight - eleOffTopHeight;
                        angular.element(element).css({'max-height':availableHeight,'overflow-y':'auto'});
                    }
                }

                elemMaxHeight();
                $(window).resize(function(){
                    elemMaxHeight();
                });

            }
        }
    }

})();