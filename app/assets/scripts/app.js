var load = function () {


    var $svg = $('.load svg').drawsvg({
        "duration": 2000,
        callback: function () {

            var letters = $('.load .title');
            letters.addClass('visible');
            letters.textillate({
                in: {effect: 'fadeInRight'},
                callback: function () {
                    $('.load').addClass('animated fadeOut');

                    setTimeout(function () {
                        $('.Home').addClass('animated fadeIn');
                        $('.Home .Home-center').addClass('animated fadeInUp');
                        $('.load').remove()
                    }, 500);
                }
            });
        }
    });

    $svg.drawsvg('animate');


}


$(document).ready(function () {
    load();


    $('.goNext').on('click', function (e) {
        var m1 = $('#about')[0].offsetTop;

        $('.Home').removeClass('fadeInUp').addClass('fadeOutUp');

        setTimeout(function () {
            $('body').addClass('color-white');
            $('.Home').remove();
            $('.Menu').addClass('visible animated fadeInDown');

            var $svg = $('.Menu svg').drawsvg({
                "duration": 800,
                callback: function () {

                    var letters = $('.Menu .title');
                    letters.addClass('visible');
                    letters.textillate({
                        in: {effect: 'fadeInRight'},
                    });

                    $('.button-01').css('opacity','1');
                }
            });

            $svg.drawsvg('animate');

        }, 1000);

    })
})


var kalinka = angular.module('kalinka', []);


/**
 * Données de la home
 *
 * @param home
 *            contient : title, subtitle, image profil, background, contrat
 */
kalinka.controller('HomeController', function HomeController($scope, $http) {

    $http({
        method: 'GET',
        url: "ajax/infos.json"

    }).then(function successCallback(response) {

        var home = {
            title: response.data.home.title,
            subtitle: response.data.home.subtitle,
            avatar: response.data.home.img,
            background: response.data.home.back01,
            contrat: response.data.home.contrat
        };

        $scope.home = home;


    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });


});


/*
 * Données du about
 *
 * @param menu
 *            contient une liste de contenu du menu
 */
kalinka.controller('AboutController', function aboutController($scope, $http) {

    $http({
        method: 'GET',
        url: "ajax/infos.json"

    }).then(function successCallback(response) {

        var abouts = [response.data.About];

        var aboutTab = [];

        for (var i = 0; i < abouts[0].length; i++) {
            aboutTab.push(abouts[0][i]);
        }

        $scope.abouts = aboutTab;


    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    
});
