// ==UserScript==
// @name         FunPay AutoUP by DarhangeR
// @namespace    https://funpay.com/lots/
// @version      0.2
// @description  Edit by https://funpay.com/users/113693/
// @author       DarhangeR
// @match        https://funpay.com/lots/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
document.getElementsByClassName("page-header page-header-no-hr")[0].innerHTML = "by DarhangeR";
    var elems = document.getElementsByClassName("btn btn-default btn-block js-lot-raise");
           elems[0].click();

function foo () {location.reload();

}

setTimeout(foo, 300000);
    var elems2 = document.getElementsByClassName("tc-item warning");
  elems2[0].click();
    function vivod() {
 var elems3 = document.getElementsByClassName("btn btn-primary btn-block js-btn-save");
  elems3[0].click();
}

setTimeout(vivod, 2000);

})();