!(function(e) {
  function r(s) {
    if (i[s]) return i[s].exports;
    var o = (i[s] = { exports: {}, id: s, loaded: !1 });
    return e[s].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
  }
  var i = {};
  return (r.m = e), (r.c = i), (r.p = ""), r(0);
})({
  0: function(e, r, i) {
    try {
      (function() {
        "use strict";
        var e = i(376),
          r = e.loadVersionFile,
          s = i(89),
          o = (s.getQueryStringParams, i(133)),
          a = o.getUILibraryEnvironment,
          n = "4.0/ui.engine.js";
        if (a()) {
          var l = a(),
            t = l.awsUIBase,
            c = t + "/" + l.versionFile4;
          r(c, n, t + "/" + l.buildBase);
        } else {
          var c = "//ui.powerreviews.com/stable-4.0-version.json";
          r(c, n, null);
        }
      }.call(this));
    } finally {
    }
  },
  89: function(e, r, i) {
    try {
      (function() {
        "use strict";
        r.__esModule = !0;
        var i = function() {
          var e = {};
          if (window && window.location && window.location.search)
            for (
              var r = window.location.search.substring(1).split("&"),
                i = 0,
                s = r.length;
              i < s;
              ++i
            ) {
              var o = r[i].split("=");
              e[o[0]] = o[1];
            }
          return e;
        };
        (r.default = { getQueryStringParams: i }), (e.exports = r.default);
      }.call(this));
    } finally {
    }
  },
  133: function(e, r, i) {
    try {
      (function() {
        "use strict";
        r.__esModule = !0;
        var s = i(89),
          o = s.getQueryStringParams,
          a = i(233),
          n = a.local,
          l = a.develop,
          t = a.release,
          c = a.stable,
          v = { local: n, develop: l, release: t, stable: c },
          d = function(e, r) {
            if (v[r]) return v[r];
            var i = o()[e];
            return v[i];
          },
          u = function() {
            var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? null
                  : arguments[0],
              r = "pr_ui_library_base_url";
            return d(r, e);
          },
          w = function() {
            var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? null
                  : arguments[0],
              r = "pr_write_services_base_url";
            return d(r, e);
          },
          p = function() {
            var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? null
                  : arguments[0],
              r = "pr_read_services_base_url";
            return d(r, e);
          };
        (r.default = {
          getUILibraryEnvironment: u,
          getWriteServicesEnvironment: w,
          getReadServicesEnvironment: p
        }),
          (e.exports = r.default);
      }.call(this));
    } finally {
    }
  },
  233: function(e, r, i) {
    try {
      (function() {
        "use strict";
        e.exports = {
          cloudinaryUploadBase:
            "//api.cloudinary.com/v1_1/powerreviews/auto/upload",
          cloudinaryDownloadBase: "//res.cloudinary.com/powerreviews/image",
          local: {
            akamaiUIBase: "//localhost:3001",
            awsUIBase: "//localhost:3001",
            writeBase: "//devwriteservices.powerreviews.com",
            b2cReadBase: "//dev-origin-readservices-b2c-api.powerreviews.com",
            b2cReadOrigin: "//dev-origin-readservices-b2c-api.powerreviews.com",
            cloudinaryImagePreset: "dev_preset",
            cloudinaryVideoPreset: "dev_video_preset",
            trackingBase: "//ui.powerreviews.com",
            servicesBase: "//qaservices.powerreviews.com/JSController.do",
            versionFullJS: "local-fulljs-version.json",
            versionFile3: "local-3.0-version.json",
            versionFile4: "local-4.0-version.json",
            buildBase: ""
          },
          develop: {
            akamaiUIBase: "//akaui.powerreviews.com",
            awsUIBase: "//ui.powerreviews.com",
            writeBase: "//devwriteservices.powerreviews.com",
            b2cReadBase: "//dev-origin-readservices-b2c-api.powerreviews.com",
            b2cReadOrigin: "//dev-origin-readservices-b2c-api.powerreviews.com",
            cloudinaryImagePreset: "dev_preset",
            cloudinaryVideoPreset: "dev_video_preset",
            trackingBase: "//ui.powerreviews.com",
            servicesBase: "//qaservices.powerreviews.com/JSController.do",
            versionFullJS: "develop-fulljs-version.json",
            versionFile3: "develop-3.0-version.json",
            versionFile4: "develop-4.0-version.json",
            buildBase: "develop-builds"
          },
          release: {
            akamaiUIBase: "//akaui.powerreviews.com",
            awsUIBase: "//ui.powerreviews.com",
            writeBase: "//qawriteservices.powerreviews.com",
            b2cReadBase: "//qa-origin-readservices-b2c-api.powerreviews.com",
            b2cReadOrigin: "//qa-origin-readservices-b2c-api.powerreviews.com",
            cloudinaryImagePreset: "qa_preset",
            cloudinaryVideoPreset: "qa_video_preset",
            trackingBase: "//t-staging.powerreviews.com",
            servicesBase: "//qaservices.powerreviews.com/JSController.do",
            versionFullJS: "release-fulljs-version.json",
            versionFile3: "release-3.0-version.json",
            versionFile4: "release-4.0-version.json",
            buildBase: "release-builds"
          },
          stable: {
            akamaiUIBase: "//akaui.powerreviews.com",
            awsUIBase: "//ui.powerreviews.com",
            writeBase: "//writeservices.powerreviews.com",
            b2cReadBase: "//readservices-b2c.powerreviews.com",
            b2cReadOrigin: "//origin-readservices-b2c-api.powerreviews.com",
            cloudinaryImagePreset: "prod_preset",
            cloudinaryVideoPreset: "prod_video_preset",
            trackingBase: "//t.powerreviews.com",
            servicesBase: "//services.powerreviews.com/JSController.do",
            versionFullJS: "stable-fulljs-version.json",
            versionFile3: "stable-3.0-version.json",
            versionFile4: "stable-4.0-version.json",
            buildBase: "tag-builds"
          }
        };
      }.call(this));
    } finally {
    }
  },
  376: function(e, r, i) {
    try {
      (function() {
        "use strict";
        r.__esModule = !0;
        var i = function(e, r, i, o) {
            var a = new XMLHttpRequest(),
              n = { v: "" };
            (window.POWERREVIEWS = window.POWERREVIEWS || {}),
              (window.POWERREVIEWS.display = window.POWERREVIEWS.display || {}),
              (window.POWERREVIEWS.display.render = function(e) {
                window.POWERREVIEWS.display.renderQueue = e;
              });
            var l = e;
            (a.onreadystatechange = function() {
              4 === a.readyState &&
                200 === a.status &&
                ((POWERREVIEWS.display.fastUnpublishedReviews = []),
                a
                  .getAllResponseHeaders()
                  .indexOf("x-amz-meta-unpublished-reviews") > -1 &&
                  (POWERREVIEWS.display.fastUnpublishedReviews = a
                    .getResponseHeader("x-amz-meta-unpublished-reviews")
                    .split(",")
                    .map(function(e) {
                      return Number(e);
                    })),
                (n = o && !isNaN(o) ? { v: o } : JSON.parse(a.responseText)),
                (window.POWERREVIEWS.display.build = n.v),
                s(n, r, i));
            }),
              a.open("GET", l, !0),
              a.send();
          },
          s = function(e, r, i) {
            var s =
                (i || "//ui.powerreviews.com/tag-builds") +
                "/" +
                (e.v ? e.v : "") +
                "/" +
                r,
              o = document.createElement("script");
            (o.type = "text/javascript"),
              (o.src = s),
              document.body.appendChild(o);
          };
        (r.default = { loadVersionFile: i }), (e.exports = r.default);
      }.call(this));
    } finally {
    }
  }
});
