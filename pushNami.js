/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
(function(document, window) {
    var subid = "";
    if (window.location.hash.indexOf("?") !== -1) {
        var s = window.location.hash;
        var hashParams = s.substr(s.indexOf("?") + 1, s.length - (s.indexOf("?") + 1)).split("&");
        var params = {};
        hashParams.forEach(e => {
            var kv = e.split("=");
            params[kv[0]] = kv[1];
        });
        if (params.hasOwnProperty("a") && params.hasOwnProperty("s1")) {
            subid = params["a"] + "_" + params["s1"];
        }
    }
    console.info("subid", subid);
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.pushnami.com/scripts/v1/pushnami-adv/62a7807cf9e9090013c65cc7";
    script.onload = function() {
        Pushnami
            .update({
                "subid": subid,
                "optinurl": window.location.hostname
            })
            .prompt();
    };
    document.head.appendChild(script);
})(document, window);