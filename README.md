# react-use-input

[![Greenkeeper badge](https://badges.greenkeeper.io/robcalcroft/react-use-input.svg)](https://greenkeeper.io/)

A hook :fishing_pole_and_fish: whose setter can be directly given to HTML inputs

This package is designed to be super simple and small; it won't add any bloat to your project. However, feel free to copy and paste the [code](https://raw.githubusercontent.com/robcalcroft/react-use-input/master/index.js) if you'd like to avoid another dependency :smile:

Other packages use object spread syntax to achieve a similar result, but this package doesn't because:
- This way is much easier to read
- You don't end up with bloat in your props for super simple use cases

## Install
```
yarn add react-use-input
```

## Use
By default, `useInput()` returns a tuple of the current value and a setter which will pick the `value` key out of an `Event` object.

```javascript
useInput(<initialValue (defaults to '') (optional)>, <valueKey (defaults to 'value') (optional)>)
```

**A simple example**

```javascript
import useInput from 'react-use-input';

function Component() {
  const [name, setName] = useInput();
  
  return <input value={name} onChange={setName} />;
}
```

**Checkbox type input with non default state**

```javascript
import useInput from 'react-use-input';

function Component() {
  const [selected, setSelected] = useInput(false, 'checked');
  
  return (
    <input type="checkbox" checked={selected} onChange={setSelected} />
  );
}
```

Feel free to raise an issue to discuss other use cases that aren't covered here
