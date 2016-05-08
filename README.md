# @mgtitimoli / eslint-config-react

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) to be used on projects that use [React](https://github.com/facebook/react)

## Installation

```
$ npm install --save-dev \
eslint \
eslint-plugin-react \
@mgtitimoli/eslint-config-react
```

> :scream: **What?!** Why I also need to install all these packages?!

I completely understand your feeling, so let me briefly enumerate the reasons of why they are required:

- [eslint](https://github.com/eslint/eslint)

I guess you won't be here if you did not know [ESLint](http://eslint.org), but just in case, taken for their page:

> **ESLint** is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, its goal is to provide a pluggable linting utility for JavaScript.

- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

This is the _THE GUY_ :sunglasses: in this config; all of the rules specified here are from this **excellent plugin**

## Usage

### General

**ESLint** allows being configured using a widely amount of [flavours](http://eslint.org/docs/user-guide/configuring#configuration-file-formats), but I personally find the followings very practical:

- Place all the settings under an **eslintConfig** entry in your `package.json`:

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "extends": "@mgtitimoli/eslint-config-react"
    }
}
```

- Create an `.eslintrc.json` to hold all the configuration:

```json
{
    "extends": "@mgtitimoli/eslint-config-react"
}
```

### Custom

This configuration, at the same time, extends the following configurations:

- Provided by **eslint-plugin-react**
    + [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react#recommended-configuration), that enables the following rules:
        + [display-name](docs/rules/display-name.md)
        + [jsx-no-duplicate-props](docs/rules/jsx-no-duplicate-props.md)
        + [jsx-no-undef](docs/rules/jsx-no-undef.md)
        + [jsx-uses-react](docs/rules/jsx-uses-react.md)
        + [jsx-uses-vars](docs/rules/jsx-uses-vars.md)
        + [no-danger](docs/rules/no-danger.md)
        + [no-deprecated](docs/rules/no-deprecated.md)
        + [no-did-mount-set-state](docs/rules/no-did-mount-set-state.md) with `allow-in-func` option
        + [no-did-update-set-state](docs/rules/no-did-update-set-state.md) with `allow-in-func` option
        + [no-direct-mutation-state](docs/rules/no-direct-mutation-state.md)
        + [no-is-mounted](docs/rules/no-is-mounted.md)
        + [no-unknown-property](docs/rules/no-unknown-property.md)
        + [prop-types](docs/rules/prop-types.md)
        + [react-in-jsx-scope](docs/rules/react-in-jsx-scope.md)
- Provided by us
    + [@mgtitimoli/eslint-config/general](./general)
    + [@mgtitimoli/eslint-config/jsx](./jsx)

You can pick just the one(s) that you need, specifying them as follows:

- For example, if you would want to use only **jsx** configuration, then your `.eslintrc.json` should contain:

```json
{
    "extends": "@mgtitimoli/eslint-config/jsx"
}
```

## Other configurations 

You might also be interested in the following configurations:

- [@mgtitimoli/eslint-config](https://github.com/mgtitimoli/eslint-config): Native rules
- [@mgtitimoli/eslint-config-babel](https://github.com/mgtitimoli/eslint-config-babel):

## License

[Unlicense](http://unlicense.org)

