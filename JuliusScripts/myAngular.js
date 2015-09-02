(function () {

    var app = angular.module("gemStore", []);

    app.controller("StoreController", function () {
        this.products = gems;
    });

    app.controller("PanelController", function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        }

        this.isSelected = function (checkTab) {
            this.tab === checkTab;
        }
    });

    //this next part is prac from sec.5.3 vid from codeschool.com
    app.controller("MyController", ['$http', function ($http) {
        var my = this;
        my.skills = []; //we do this because our page will render before the data is ready.
        $http.get('/Jdata/Jskills.json')
            .succeed(function (data) {
                my.skills = data;
            });
        }
    ]);





    
    var gems = [
        {
            name: "first gem", price: 2.25,
            images: ["Images/orderedList0.png", "Images/orderedList1.png"],
            reviews: [{ stars: 1, body: "1 star description", email: 'customer1@company.com' }, { stars: 5, body: "5 star description", email: 'aperson@nonpr.org'}]
        },

        {
            name: "second gem", price: 12.25,
            images: ["Images/orderedList0.png", "Images/orderedList1.png"],
            reviews: [{ stars: 1, body: "1 star description", email: 'customer1@company.com' }, { stars: 5, body: "5 star description", email: 'aperson@nonpr.org'}]
        },

        {
            name: "third gem", price: 20.25,
            images: ["Images/orderedList0.png", "Images/orderedList1.png"],
            reviews: [{ stars: 1, body: "1 star description", email: 'customer1@company.com' }, { stars: 5, body: "5 star description", email: 'aperson@nonpr.org'}]
        }
    ];

})();
