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
        }, 1000);

    })
})


var kalinka = angular.module('kalinka', []);


/**
 * Données du menu
 *
 * @param menu
 *            contient une liste de contenu du menu
 */
kalinka.controller('MenuController', function menuController($scope, $http) {

    $http({
        method: 'GET',
        url: "ajax/infos.json"

    }).then(function successCallback(response) {

        var menu = response.data.menu;

        $scope.menu = menu;

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});


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


/**
 * Contient les projets
 *
 * @param projets
 *
 * Contient nom, date, lieu, ecole, keys, image, description
 *
 */
kalinka.controller('TimelineController', function TimelineController($scope, $http) {

    $http({
        method: 'GET',
        url: "ajax/infos.json"

    }).then(function successCallback(response) {

        var projets = [response.data.projets];
        var projetsTab = [];

        for (var i = 0; i < projets[0].length; i++) {
            projetsTab.push(projets[0][i]);
        }

        $scope.projets = projetsTab;

        $scope.projets.openPopin = function (projet) {
            url = projet.popin;

            $http({
                method: 'GET',
                url: url

            }).then(function successCallback(response) {

                console.log(response.data);

                $('body').addClass('no-scroll');

                $('.Popin').html(response.data);
                $('.Popin').addClass('visible');

                setTimeout(function () {
                    $('.Popin').addClass('animated fadeInDown');
                }, 300);

                $('.Popin .close').on('click', function () {
                    $('.Popin').removeClass('fadeInDown').addClass('fadeOutUp');
                    $('body').removeClass('no-scroll');

                    setTimeout(function () {
                        $('.Popin').removeClass('animated fadeOutUp');
                        $('.Popin').empty();
                        $('.Popin').removeClass('visible');
                    }, 300);


                })

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        }

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
