// ==UserScript==
// @name         fCSDNck 
// @namespace    https://github.com/tempestLXC
// @version      0.0.2
// @description  屏蔽百度搜索结果中 CSDN 相关搜索结果
// @author       tempestlxc
// @match        *://www.baidu.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    var CSDN='-(csdn)';
    var button = document.createElement("button"); 
    button.className = "btn self-btn bg s_btn";
    button.textContent = "fCSDNck";
    button.style.background = "#e33e33"; 

    button.addEventListener("click", clickBotton);

    function clickBotton(){
        var kw =document.getElementById('kw');
        if( !isEmpty(kw.value) && !kw.value.includes(CSDN) ){
            kw.value = kw.value + ' ' +CSDN;
        }
    }

    var like_comment = document.getElementById('s_btn_wr');
    like_comment.appendChild(button);

    function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
})();
