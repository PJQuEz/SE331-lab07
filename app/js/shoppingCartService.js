/**
 * Created by พีรพัฒน์ on 28/3/2559.
 */
'use strict'
var shoppingCartServices = angular.module('shoppingCartServices', ['ngResource']);
shoppingCartServices.factory('shoppingCartService', function ($resource) {
    return $resource('/shoppingcart/:id', {id: '@_id'}, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }
    });

})
