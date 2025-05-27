let body = $response.body;

// 移除包含 class="div-bf-pv" 的 div
body = body.replace(/<div[^>]*class="[^"]*div-bf-pv[^"]*"[^>]*>[\s\S]*?(?=<\/div>)<\/div>/gi, '');

// 移除包含 class="hidden-lg" 的 div
body = body.replace(/<div[^>]*class="[^"]*hidden-lg[^"]*"[^>]*>[\s\S]*?(?=<\/div>)<\/div>/gi, '');

$done({ body });
