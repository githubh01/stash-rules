// Pure, synchronous hostname matching. No network, filesystem or state writes.
const predicates = {
"GeoSite_private_regex": [/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/],
"GeoSite_openai_regex": [/^chatgpt-async-webps-prod-\S+-\d+\.webpubsub\.azure\.com$/],
"GeoSite_category-speedtest_regex": [/^speed\.(coe|open)\.ad\.[a-z]{2,6}\.prod\.hosts\.ooklaserver\.net$/],
"GeoSite_google_regex": [/^r+[0-9]+(---|\.)sn-(2x3|ni5|j5o)\w{5}\.xn--ngstr-lra8j\.com$/, /^r+[0-9]+(---|\.)sn-(2x3|ni5|j5o)\w{5}\.googlevideo\.com$/],
"GeoSite_netflix_regex": [/(^|\.)apiproxy-device-prod-nlb-.+\.amazonaws\.com$/, /(^|\.)apiproxy-website-nlb-prod-.+\.amazonaws\.com$/, /(^|\.)dualstack\.apiproxy-.+\.amazonaws\.com$/, /(^|\.)dualstack\.ichnaea-web-.+\.amazonaws\.com$/],
"GeoSite_disney_regex": [/^hses[1-7]?\.akamaized\.net$/],
"GeoSite_category-games_regex": [/^epicgames-download\d\.akamaized\.net$/, /^.+-mihayo\.akamaized\.net$/, /^cdn\d-epicgames-\d+\.file\.myqcloud\.com$/, /^epicgames-download\d-\d+\.file\.myqcloud\.com$/],
"GeoSite_category-entertainment_regex": [/^[0-9]+vod-adaptive\.akamaized\.net$/, /^ewcdn[0-9]+\.nowe\.com$/],
"GeoSite_cn_regex": [/.+\.awsdns-cn-[0-9][0-9]\.(biz|com|net|top)$/, /.+\.awsdns-cn-[0-9][a-e0-9]\.cn$/, /^(.+\.)*zh\.okaapps\.com$/],
};
const h = String($request.hostname || "").toLowerCase().replace(/\.$/, "");
const tests = predicates[String($argument)] || [];
$done({matched: tests.some(p => p.test(h))});
