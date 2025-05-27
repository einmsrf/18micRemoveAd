// ==UserScript==
// @name         18Comic 去广告
// @namespace    http://18comic.vip/
// @version      1.0
// @description  移除页面中的广告div（partial-item）
// @author       ChatGPT
// @match        *://*.18comic.vip/*
// @run-at       document-end
// ==/UserScript==

let body = $response.body;

// 删除所有 class="partial-item" 的 div
body = body.replace(/<div[^>]*class=["']?partial-item["']?[^>]*>[\s\S]*?<\/div>/gi, '');

$done({ body });
