define(["jquery"], function ($) {
    "use strict";

    return class {
        constructor(user) {
            this.user = user;
        }

        get() {
            const self = this;
            const url = "http://www.worldcommunitygrid.org/getDynamicImage.do" +
                        "?memberName=" + self.user + "&stat=1&rankOn=true" +
                        "&language=fr_FR";
            return $.get(url).then(function (data) {
                return {
                    "title": "<strong>" +
                             /\t([^\t&]+)&#160;Points/.exec(data)[1] +
                             "</strong> points (#<em>" +
                             /\(Rang :&#160;&#35;([^(]+)\)/.exec(data)[1] +
                             "</em>)",
                    "desc": null,
                    "link": "https://secure.worldcommunitygrid.org/stat/" +
                            "viewMemberInfo.do?userName=" + self.user
                };
            });
        } // get()
    };
});
