# [JSX](https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules)

## Usage

- `.eslintrc.json`

```json
{
    "extends": "@mgtitimoli/eslint-config-react/jsx"
}
```

## Rules settings

### [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

> Prevents the unnecessary specification of the value **true** for Boolean properties

#### configuration

```json
{
    "react/jsx-boolean-value": "error"
}
```

#### example

```javascript
// BAD
<MyComponent showTitle={ true }/>

// GOOD
<MyComponent showTitle/>
```

### [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

> Enforce multiline elements closing bracket location to be aligned with the opening tag

#### configuration

```json
{
    "react/jsx-closing-bracket-location": "error"
}
```

#### example

```javascript
// GOOD
<ComponentWithoutChildren
    prop1="value 1"
    prop2="value 2"
/>

<ComponentWithChildren
    prop1="value 1"
    prop2="value 2"
>
    Content
</ComponentWithChildren>
```

### [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

> Enforces spacing between curly braces and the value inside of them

#### configuration

```json
{
    "react/jsx-curly-spacing": "error"
}
```

#### example

```javascript
// BAD
<Hello name={userName}/>

<Hello name={ userName}/>

<Hello name={userName }/>

// GOOD
<Hello name={ userName }/>

<Hello name={ { firstname: "John", lastName : "Doe" } } />

<Hello name={ {
    firstname: "John",
    lastName : "Doe"
} } />
```

### [react/jsx-equals-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)

> Disallows spacing around equal signs used to specified attributes values

#### configuration

```json
{
    "react/jsx-equals-spacing": "error"
}
```

#### example

```javascript
// BAD
<Hello name = { userName }/>

<Hello name ={ userName }/>

<Hello name= { userName }/>

// GOOD
<Hello name={ userName }/>

<Hello name/>

<Hello { ...props }/>
```

### [react/jsx-handler-names](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)

> Enforces the following naming conventions for event related props and the given callbacks

- **Prop names**
> must start with **on**

- **Callback names**
> must start with **_handle** (since they should be *private* methods of the component which is handling the event)

#### configuration

```json
{
    "react/jsx-handler-names": [ "error", {
        "eventHandlerPrefix"    : "_handle",
        "eventHandlerPropPrefix": "on"
    } ]
}
```

#### example

```javascript
class Child extends Component {

    // ...

    static propTypes = {
        onChange: PropTypes.func.isRequired
    };

    // ...
}
```

```javascript
class Parent extends Component {

    // ...

    _handleChildChange(event) {

        // ...
    }

    render() {

        return (
            <Child onChange={ this._handleChildChange.bind(this) }/>
        );
    }
}
```

### [react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)

> Enforces nested elements indentation to 4 spaces  

#### configuration

```json
{
    "react/jsx-indent": "error"
}
```

#### example

```javascript
// GOOD
<section>
    <main>
        <p>First Paragraph</p>
        <p>Second Paragraph</p>
    </main>
    <footer>This is the footer</footer>
</section>
```

### [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)

> Enforces props indentation to 4 spaces for components that have to be specified in more than 1 line (components with more than 1 prop)

#### configuration

```json
{
    "react/jsx-indent-props": "error"
}
```

#### example

```javascript
// GOOD
<Hello
    firstName="John"
    lastName="Doe"
/>
```

### [react/jsx-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

> Prevents [dynamic chidren](http://facebook.github.io/react/docs/multiple-components.html#dynamic-children) (elements within arrays) to be rendered without having set the **key** attribute in all of them

#### configuration

```json
{
    "react/jsx-key": "error"
}
```

#### example

```javascript
// BAD
[
    <Item>{ data[0] }</Item>,
    <Item>{ data[1] }</Item>,
    <Item>{ data[2] }</Item>
]

data.map(value => <Item>{ value }</Item>)

// GOOD
[
    <Item key={ 0 }>{ data[0] }</Item>,
    <Item key={ 1 }>{ data[1] }</Item>,
    <Item key={ 2 }>{ data[2] }</Item>
]

data.map(
    (value, index) => <Item key={ index }>{ value }</Item>
)
```

### [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

> Enforce PascalCase (capitalized camel case) for user-defined components

#### configuration

```json
{
    "react/jsx-pascal-case": "error"
}
```

#### example

```javascript
// BAD
class My_Component extends Component {
    // ...
}

class MY_COMPONENT extends Component {
    // ...
}

// GOOD
class MyComponent extends Component {
    // ...
}
```

### [react/jsx-sort-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)

> Enforces props to be specified in alphabetical order

#### configuration

```json
{
    "react/jsx-sort-props": "error"
}
```

#### example

```javascript
// BAD
<MyComponent
    c="value C"
    a="value A"
    b="value B"
/>

// GOOD
<MyComponent
    a="value A"
    b="value B"
    c="value C"
/>
```

### [react/jsx-space-before-closing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)

> Disallows the spacing before the closing bracket of self-closing elements 

#### configuration

```json
{
    "react/jsx-space-before-closing": [ "error", "never" ]
}
```

#### example

```javascript
// BAD
<Hello />

<Hello firstName="John" />

// GOOD
<Hello/>

<Hello firstname="John"/>

<Hello
    firstName="John"
    lastName="Smith"
/>
```

### [react/jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)

> Enforces components with multiple props to be specified declaring only one prop per line

#### configuration

```json
{
    "react/jsx-max-props-per-line": "error"
}
```

#### example

```javascript
// BAD
<Hello { ...moreProps } firstName="John" lastName="Smith"/>

// GOOD
<Hello
    { ...moreProps }
    firstName="John"
    lastName="Smith"
/>
```
