module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-boolean-value"           : "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-curly-spacing"           : [ "error", "always" ],
        "react/jsx-equals-spacing"          : "error",
        "react/jsx-handler-names"           : [ "error", {
            "eventHandlerPrefix"    : "_handle",
            "eventHandlerPropPrefix": "on"
        } ],
        "react/jsx-indent"              : "error",
        "react/jsx-indent-props"        : "error",
        "react/jsx-key"                 : "error",
        "react/jsx-pascal-case"         : "error",
        "react/jsx-sort-props"          : "error",
        "react/jsx-space-before-closing": [ "error", "never" ],
        "react/jsx-max-props-per-line"  : "error"
    }
};
