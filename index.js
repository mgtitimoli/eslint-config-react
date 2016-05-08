module.exports = {
    "plugins": [ "react" ],
    "extends": [ "plugin:react/recommended" ].concat([
        "./general",
        "./jsx",
    ].map(require.resolve))
};
