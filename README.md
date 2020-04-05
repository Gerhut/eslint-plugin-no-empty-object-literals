# eslint-plugin-no-empty-object-literals

ESLint plugin for disabling empty object literals (`{}`).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-empty-object-literals`:

```
$ npm install eslint-plugin-no-empty-object-literals --save-dev
```


## Usage

Add `no-empty-object-literals` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-empty-object-literals"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-empty-object-literals/rule": 2
    }
}
```

## Supported Rules

`no-empty-object-literals/rule`: Disable empty object literals (`{}`).
