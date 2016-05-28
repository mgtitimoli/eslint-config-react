# [GENERAL](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)

## Usage

- `.eslintrc.json`

```json
{
    "extends": "@mgtitimoli/eslint-config-react/general"
}
```

## Rules settings

### [react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)

> Disallows the declaration of more than one custom component in the same file 

#### configuration

```json
{
    "react/no-multi-comp": "error"
}
```

### [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

> Disallows the use of strings in refs (this has been [deprecated](https://facebook.github.io/react/docs/more-about-refs.html#the-ref-string-attribute)), enforcing the use of functions (to store the instance) in their place

#### configuration

```json
{
    "react/no-string-refs": "error"
}
```

#### example

```javascript
// BAD
import React, { Component } from "react";

class CustomInput extends Component {
    // ...

    render() {

        return (
            <input ref="input"/>
        );
    }
}

// GOOD
import React, { Component } from "react";

class CustomInput extends Component {
    // ...
    _input = null;

    _setInput(input) {

        this._input = input;
    }

    render() {

        return (
            <input ref={ this._setInput.bind(this) }/>
        );
    }
}
```

### [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

> Disallows the use of **React.createClass**, encouraging the declaration of components using the ES2015 alternative.

#### configuration

```json
{
    "react/prefer-es6-class": "error"
}
```

#### example

```javascript
// BAD
import React from "react";

const MyComponent = React.createClass({
    // ...
});

// GOOD
import React, { Component } from "react";

class MyComponent extends Component {
    // ...
}
```

### [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

> Warns when using **props** without having declared their types in **propTypes**

#### configuration

```json
{
    "react/prop-types": "warn"
}
```

#### example

```javascript
// BAD
import React, { Component } from "react";

class MyComponent extends Component {

    render() {

        return (
            <div className={ this.props.className }/>
        );
    }
}

// GOOD
import React, {
    Component,
    PropTypes
} from "react";

class MyComponent extends Component{

    static propTypes = {
        className: PropTypes.string
    };

    render() {

        return (
            <div className={ this.props.className }/>
        );
    }
}
```

### [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

> Ensures the presence of a **return** statement in **render** methods

#### configuration

```json
{
    "react/require-render-return": "error"
}
```

#### example

```javascript
// BAD
class MyComponent extends Component {

    render() {

        <div/>;
    }
}

// GOOD
class MyComponent extends Component {

    render() {

        return (
            <div/>
        );
    }
}
```

### [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

> Prevents the use of unnecessary closing tags for components without children

#### configuration

```json
{
    "react/self-closing-comp": "error"
}
```

#### example

```javascript
// BAD
class MyComponent extends Component {

    render() {

        return (
            <div></div>
        );
    }
}

// GOOD
class MyComponent extends Component {

    render() {

        return (
            <div/>
        );
    }
}
```

### [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

> Enforces the following component members ordering:

1. Static
2. Lifecycle
    - displayName
    - propTypes
    - contextTypes
    - childContextTypes
    - defaultProps
    - constructor
    - state
    - getChildContext
    - componentWillMount
    - componentDidMount
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - componentDidUpdate
    - componentWillUnmount 
3. General purpose
4. Handlers (start with *_handler*)
5. Rendering (start with *_render*)

#### configuration

```json
{
    "react/sort-comp": [ "error", {
        "order": [
            "static-methods",
            "lifecycle",
            "everything-else",
            "handlers",
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
    } ]
}
```

### [react/wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

> Enforces enclosing multiline components with parentheses

#### configuration

```json
{
    "react/wrap-multilines": "error"
}
```

#### example

```javascript
// BAD
const content = <div>
    <p>Some text</p>
</div>;

// GOOD
const content = (
    <div>
        <p>Some text</p>
    </div>
);
```

### [react/sort-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)

> Enforces prop types to be alphabetically sorted

#### configuration

```json
{
    "react/sort-prop-types": "error"
}
```

#### example

```javascript
// BAD
class MyComponent extends Component {

    static propTypes = {
        c: PropTypes.string,
        a: PropTypes.string,
        b: PropTypes.string
    }

    // ...
}

// GOOD
class MyComponent extends Component {

    static propTypes = {
        a: PropTypes.string,
        b: PropTypes.string,
        c: PropTypes.string
    }

    // ...
}
```
