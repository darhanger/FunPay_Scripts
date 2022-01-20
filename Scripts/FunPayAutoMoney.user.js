// ==UserScript==
// @name         FunPay AutoMoney by DarhangeR
// @namespace    https://funpay.com/account/balance
// @version      0.2
// @description  Edit by https://funpay.com/users/113693/
// @author       DarhangeR
// @match        https://funpay.com/account/balance
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
document.getElementsByClassName("page-header page-header-no-hr")[0].innerHTML = "by DarhangeR";
   var balance = document.querySelector(".badge.badge-balance").textContent;
console.log(balance)

var elems = document.getElementsByClassName("btn btn-primary btn-wide withdraw");
  elems[0].click();

var balanceitog = balance;

document.querySelector(".form-control.modal-autofocus").value = balanceitog;
console.log(balanceitog)

var elems2 = document.getElementsByClassName("btn btn-primary btn-block margin-top");
  elems2[0].click();

function vivod() {
 var elems2 = document.getElementsByClassName("btn btn-primary btn-block margin-top");
  elems2[0].click();
}

setTimeout(vivod, 2000);
})();