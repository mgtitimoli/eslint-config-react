module.exports = {
    "rules": {
        "react/no-multi-comp"        : "error",
        "react/no-string-refs"       : "error",
        "react/prefer-es6-class"     : "error",
        "react/prop-types"           : "error",
        "react/require-render-return": "error",
        "react/self-closing-comp"    : "error",
        "react/sort-comp"            : [ "error", {
            "order": [
                "static-methods",
                "lifecycle",
                "handlers",
                "everything-else",
                "rendering"
            ],
            "groups": {
                "handlers": [
                    "/^_handle.+$/"
                ],
                "rendering": [
                    "/^_render.+$/",
                    "render"
                ]
            }
        } ],
        "react/sort-prop-types": "error",
        "react/wrap-multilines": "error"
    }
};
