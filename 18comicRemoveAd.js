// ==UserScript==
// @name         18Comic 去广告
// @namespace    http://18comic.vip/
// @version      1.0
// @description  移除页面中的广告div（partial-item）
// @author       ChatGPT
// @match        *://*.18comic.vip/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 函数：移除广告 div
    function removeAdDivs() {
        // 移除 class 为 div-bf-pv 的元素
        const adDivs1 = document.getElementsByClassName('div-bf-pv');
        while (adDivs1.length > 0) {
            adDivs1[0].parentNode.removeChild(adDivs1[0]);
        }

        // 移除 class 为 hidden-lg 的元素
        const adDivs2 = document.getElementsByClassName('hidden-lg');
        while (adDivs2.length > 0) {
            adDivs2[0].parentNode.removeChild(adDivs2[0]);
        }
    }

    // 初次加载时尝试移除
    removeAdDivs();

    // 使用 MutationObserver 监控 DOM 变化
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function() {
            removeAdDivs();
        });
    });

    // 配置 MutationObserver 监控整个文档的子节点变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 在页面卸载时断开观察者
    window.addEventListener('unload', function() {
        observer.disconnect();
    });
})();
