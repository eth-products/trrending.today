"use strict";

var shopApp = angular.module("shopApp", ["ui.router", "ngNotify"]);
"use strict";

shopApp.run(["$rootScope", "ngNotify", function ($rootScope, ngNotify) {
  ngNotify.config({
    theme: 'pure',
    position: 'bottom',
    duration: 3000,
    type: 'success',
    sticky: false,
    button: true,
    html: false
  });
  $rootScope.items = [{
    "type": "cup",
    "typeId": 0,
    "name": "Белая кружка с надписью, 'Навальный'",
    "src": "images/cards/1.png",
    "price": 799,
    "id": 0
  }, {
    "type": "cover passport",
    "typeId": 1,
    "price": 1299,
    "name": "Фирменная обложка на паспорт",
    "src": "images/cards/3.png",
    "id": 1
  }, {
    "type": "cover phone",
    "typeId": 2,
    "price": 1299,
    "name": "Чехол для мобильного с текстом в красном круге 'Навальный'",
    "src": "images/cards/25.png",
    "id": 2
  }, {
    "type": "t-shirt",
    "typeId": 3,
    "price": 1399,
    "name": "Футболка с надписью, 'Навальный 2018'",
    "src": "images/cards/10.png",
    "id": 3
  }, {
    "type": "t-shirt",
    "typeId": 3,
    "price": 1399,
    "name": "Футболка с надписью в круге, 'Навальный'",
    "src": "images/cards/7.png",
    "id": 4
  }, {
    "type": "t-shirt",
    "typeId": 3,
    "price": 1399,
    "name": "Футболка с изображением, 'Навального'",
    "src": "images/cards/9.png",
    "id": 5
  }, {
    "type": "t-shirt",
    "typeId": 3,
    "price": 1399,
    "name": "Синяя Футболка с надписью в круге, 'Навальный'",
    "src": "images/cards/11.png",
    "id": 6
  }, {
    "type": "t-shirt",
    "typeId": 3,
    "price": 1399,
    "name": "Синяя Футболка с надписью, 'Навальный 2018'",
    "src": "images/cards/12.png",
    "id": 7
  }, {
    "type": "t-shirt",
    "typeId": 3,
    "price": 1399,
    "name": "Белая Футболка с изображением, 'Навального'",
    "src": "images/cards/13.png",
    "id": 8
  }, {
    "type": "t-shirt",
    "typeId": 3,
    "price": 1399,
    "name": "Белая Футболка с текстом на всю высоту майки",
    "src": "images/cards/14.png",
    "id": 9
  }, {
    "type": "jacket",
    "typeId": 4,
    "price": 2990,
    "name": "Фирменная черная толстовка с капюшоном, с текстом 'навальный 2018'",
    "src": "images/cards/15.png",
    "id": 10
  }, {
    "type": "blouse",
    "typeId": 5,
    "price": 2799,
    "name": "Свитшот фирменный, с красным кругом 'Навальный'",
    "src": "images/cards/20.png",
    "id": 11
  }, {
    "type": "blouse",
    "typeId": 5,
    "price": 2799,
    "name": "Свитшот фирменный, с текстом 'Навальный'",
    "src": "images/cards/21.png",
    "id": 12
  }, {
    "type": "jacket",
    "typeId": 4,
    "price": 2990,
    "name": "Фирменная черная толстовка с капюшоном, с текстом в красном круге 'навальный'",
    "src": "images/cards/22.png",
    "id": 13
  }, {
    "type": "cover phone",
    "typeId": 2,
    "price": 1299,
    "name": "Чехол для мобильного с текстом 'Навальный 2018'",
    "src": "images/cards/23.png",
    "id": 14
  }, {
    "type": "cover phone",
    "typeId": 2,
    "price": 1299,
    "name": "Чехол для мобильного с изображением 'Навальный 2018'",
    "src": "images/cards/24.png",
    "id": 15
  }, {
    "type": "cup",
    "typeId": 0,
    "price": 799,
    "name": "Керамическая кружка с изображением Навального",
    "src": "images/cards/26.png",
    "id": 16
  }, {
    "type": "cup",
    "typeId": 0,
    "price": 799,
    "name": "Керамическая кружка с текстом и красным кругом",
    "src": "images/cards/27.png",
    "id": 17
  }, {
    "type": "cup",
    "typeId": 0,
    "price": 799,
    "name": "Керамическая кружка с текстом 'Навальный 2018'",
    "src": "images/cards/27-1.png",
    "id": 18
  }, {
    "type": "jacket",
    "typeId": 4,
    "price": 2990,
    "name": "Фирменная белая толстовка с изображением Навального",
    "src": "images/cards/28.png",
    "id": 19
  }, {
    "type": "jacket",
    "typeId": 4,
    "price": 2990,
    "name": "Фирменная белая толстовка с текстом Навальный 2018",
    "src": "images/cards/29.png",
    "id": 20
  }, {
    "type": "lighter",
    "typeId": 6,
    "price": 1700,
    "name": "Зажигалка, с текстом в красном круге",
    "src": "images/cards/30.png",
    "id": 21
  }, {
    "type": "lighter",
    "typeId": 6,
    "price": 1700,
    "name": "Зажигалка, с изображением Навального",
    "src": "images/cards/31.png",
    "id": 22
  }, {
    "type": "lighter",
    "typeId": 6,
    "price": 1700,
    "name": "Зажигалка, с текстом Навальный 2018",
    "src": "images/cards/32.png",
    "id": 23
  }, {
    "type": "cap",
    "typeId": 7,
    "price": 990,
    "name": "Кепка с текстом Навальный в круге",
    "src": "images/cards/33.png",
    "id": 24
  }, {
    "type": "cap",
    "typeId": 7,
    "price": 990,
    "name": "Кепка с текстом 'Навальный 2018'",
    "src": "images/cards/34.png",
    "id": 25
  }, {
    "type": "cap",
    "typeId": 7,
    "price": 990,
    "name": "Кепка с изображением 'Навальный 2018'",
    "src": "images/cards/35.png",
    "id": 26
  }, {
    "type": "cover passport",
    "typeId": 1,
    "price": 1299,
    "name": "Фирменная обложка на паспорт с текстом Навальный",
    "src": "images/cards/37.png",
    "id": 27
  }, {
    "type": "cover passport",
    "typeId": 1,
    "price": 1299,
    "name": "Фирменная обложка на паспорт с текстом Навальный",
    "src": "images/cards/36.png",
    "id": 28
  }, {
    "type": "cover passport",
    "typeId": 1,
    "price": 1299,
    "name": "Фирменная обложка на паспорт с изображением Навального",
    "src": "images/cards/38.png",
    "id": 29
  }, {
    "type": "cover number car",
    "typeId": 8,
    "price": 1300,
    "name": "Обложка на номер машины с Навальным",
    "src": "images/cards/39.png",
    "id": 30
  }, {
    "type": "clock",
    "typeId": 9,
    "price": 2099,
    "name": "Часы настенные с изображением Навального",
    "src": "images/cards/40.png",
    "id": 31
  }, {
    "type": "clock",
    "typeId": 9,
    "price": 2099,
    "name": "Часы настенные с текстом 'Навальный'",
    "src": "images/cards/41.png",
    "id": 32
  }, {
    "type": "umbrella",
    "typeId": 10,
    "price": 1450,
    "name": "Зонт с текстом Навальный",
    "src": "images/cards/42.png",
    "id": 33
  }, {
    "type": "umbrella",
    "typeId": 10,
    "price": 1450,
    "name": "Зонт с текстом Навальный",
    "src": "images/cards/43.png",
    "id": 34
  }];
  $rootScope.sizes = ["XS: 42", "S: 44", "M: 46", "L: 48", "XL: 50", "XXL: 52", "XXXL: 54"];
  $rootScope.phoneAvailableCover = ["iPhone X", "iPhone 8 PLUS", "iPhone 8", "iPhone 6", "iPhone 6 PLUS", "iPhone 7", "iPhone 7 PLUS", "iPhone 5", "5S", "iPhone 4", "4S", "iPhone 5C", "iPad mini", "iPad 2/3/4", "iPad Air", "Galaxy A3 (2015)", "Galaxy A3 (2016)", "Galaxy A3 (2017)", "Galaxy А5 (2016)", "Galaxy А5 (2015)", "Galaxy A7 (2015)", "Galaxy A7 (2016)", "Galaxy A7 (2017)", "Galaxy S5", "Galaxy S6", "Galaxy S7", "Galaxy S7 Edge", "Galaxy А5 (2017)", "Galaxy S8 Plus", "Galaxy S9 Plus", "A7/A700", "Galaxy A8 plus/A7 (2018)", "Galaxy A8(2018)/A5 (2018)/A530", "Galaxy S8", "Galaxy Note 5 Edge", "Galaxy Max G7200", "Galaxy А5/A500", "Galaxy Note 6/Note 7", "Galaxy S6 Edge Plus", "Galaxy S9", "Galaxy S7560/S7562/S7582", "Galaxy Ace 3 S7272/S7273", "Galaxy Grand Prime G530/G5308W/G530F/G530H", "Sm-G3518 Galaxy Core LTE", "Galaxy Win GT-I8550", "Galaxy S3 mini", "Galaxy Core I8260", "Galaxy Sm-G7106 Grand 2", "Galaxy Ace Style LTE Sm-G357FZ", "Galaxy J7/J700", "Galaxy J2 Pro (2018)", "Galaxy J330/J3 Pro", "Galaxy J510/J5", "Galaxy J7 Pro", "Galaxy J530/J5 Pro", "Galaxy J120/J1 (2016)", "Galaxy J100F/J100H/J100M/J1", "Galaxy Core Prime", "ONE M8", "310 DUAL Sim", "M8 mini", "M9 Plus", "M9", "610", "816", "ONE M7", "Xperia Z1", "Xperia Z", "Xperia C5 Ultra Dual", "Xperia X", "Xperia C3", "Xperia Z1 Mini", "Xperia Z2", "Xperia Z1|L39h", "Xperia M2", "Xperia C|S39h", "Xperia XA2", "Xperia XA1", "Xperia E4", "929/930", "Lumia 620", "3", "5", "6", "Lumia 520", "Lumia 530", "X Dual SIM", "Lumia 925", "Lumia 625", "Lumia 950", "Lumia 830", "Lumia 730", "XL", "X2", "Mi 4S", "Mi 5", "Mi 5S", "Mi 5C", "Mi 5X|Mi A1", "RedMI Pro", "Mi 6", "Mi MAX", "Note 5A", "RedMI Note3|RedMI Note 2 Pro", "RedMI Note 4|RedMI Note 4x", "RedMI 3", "RedMI 3S|RedMI 3 Pro", "RedMI 4", "RedMI 4A", "RedMI 4X", "RedMI 5A", "RedMI 5 Plus", "Note 3/Note 2 Pro", "Zenfone MAX", "Zenfone 2 Laser/ZE550KL", "Zenfone 2", "Zenfone 4 A400CXG", "Zenfone 5", "Zenfone 6", "ZE520KL", "Zenfone ZB500KL", "Zenfone GO 5.5 ZB551KL", "Zenfone 5 Lite", "G2", "K7", "K10 (2017)", "G3", "LG G3S Dual", "G4", "Vibe X2", "A859", "S650", "S660", "A2010", "A369i", "U10", "U20", "M3|M3s mini", "M5", "M2 mini", "MX2", "MX6", "M3 Max", "M5 Note", "5A", "6X", "8", "Google Nexus 6", "Nubia Z9 mini/NX511J", "Blade L3"];
  $rootScope.categories = {
    "0": "Кружки",
    "1": "Обложки на паспорт",
    "2": "Чехлы для телефонов",
    "3": "Футболки",
    "4": "Толстовки",
    "5": "Свитшот",
    "6": "Зажигалки",
    "7": "Кепки",
    "8": "Авто",
    "9": "Часы",
    "10": "Зонты"
  };
  $rootScope.cart = JSON.parse(localStorage.getItem('cart shop')) || [];
  $rootScope.$broadcast("update cart");
}]);
"use strict";

shopApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider.state('cart', {
    url: '/cart',
    controller: 'CartCtrl',
    templateUrl: 'templates/cart/view.html'
  }).state('main', {
    url: '/',
    controller: 'MainCtrl',
    templateUrl: 'templates/main/view.html'
  });
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/");
}]);
"use strict";

shopApp.controller("CartCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
  $scope.totalPrice = 111;
  $scope.list = $rootScope.cart;
  $rootScope.$on("update cart", function () {
    $scope.list = $rootScope.cart;
  });

  $scope.buy = function () {};
}]);
"use strict";

shopApp.controller("MainCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
  $scope.allItems = angular.copy($rootScope.items);
  loadItemsByType(-1);
  $scope.filtersList = _.map($rootScope.categories, function (catItem, idx) {
    return {
      active: false,
      name: catItem,
      id: idx
    };
  });
  $scope.filtersList.unshift({
    active: true,
    name: "Все",
    id: -1
  });

  $scope.loadGoodsByFilter = function (item) {
    if (item.active) return false;
    clearActiveFilters();
    item.active = true;
    loadItemsByType(item.id);
  };

  function clearActiveFilters() {
    _.each($scope.filtersList, function (item, idx) {
      $scope.filtersList[idx].active = false;
    });
  }

  function loadItemsByType(typeId) {
    if (typeId === -1) {
      $scope.items = _.sortBy($scope.allItems, 'typeId');
      return false;
    }

    $scope.items = _.filter($scope.allItems, function (item) {
      return item.typeId == typeId;
    });
  }
}]);
"use strict";

shopApp.filter('sum', [function () {
  /**
   * element: property of object in `arr` can be undefined
   */
  return function (arr, element) {
    return element ? _.sumBy(arr, element) : _.sumBy(arr);
  };
}]);
"use strict";

shopApp.filter("trustHtml", ["$sce", function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
}]);
"use strict";

shopApp.component("cardComponent", {
  templateUrl: "templates/card/view.html",
  bindings: {
    data: "="
  },
  controller: ["$rootScope", "ngNotify", function ($rootScope, ngNotify) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.sizes = $ctrl.data.typeId === 2 ? $rootScope.phoneAvailableCover : $rootScope.sizes;
      $ctrl.currentSize = _.first($ctrl.sizes);
    };

    $ctrl.updateSize = function () {};

    $ctrl.addItemToCart = function () {
      var newItem = angular.copy($ctrl.data);

      if ($ctrl.data.added) {
        $rootScope.cart = _.filter($rootScope.cart, function (cart) {
          return cart.unicId !== newItem.unicId;
        });
        ngNotify.set('Вы успешно удалили товар из корзины', 'warning');
      } else {
        newItem.added = true;
        newItem.size = $ctrl.currentSize;
        newItem.unicId = _.random(0, 10000000000);
        $rootScope.cart.push(newItem);
        ngNotify.set('Товар успешно добавлен в корзину', 'success');
      }

      $rootScope.$emit("update cart");
    };
  }]
});
"use strict";

shopApp.component('headerComponent', {
  controllerAs: '$ctrl',
  templateUrl: 'templates/header/view.html',
  controller: ["$rootScope", function ($rootScope) {
    var $ctrl = this;
    $ctrl.goods = $rootScope.cart;
    $rootScope.$on("update cart", function () {
      localStorage.setItem('cart shop', JSON.stringify($rootScope.cart));
      $ctrl.goods = $rootScope.cart;
    });
  }]
});
"use strict";

shopApp.component("bannerComponent", {
  templateUrl: "templates/banner/view.html",
  controller: [function () {
    var $ctrl = this;
    $ctrl.path = 'images/banners/banner-';
  }]
});