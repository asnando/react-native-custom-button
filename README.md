# React Native Custom Button
🕹 Super simple custom button that overrides default React Native button style

# Installation
```bash
yarn install react-native-custom-button
```

# Types of buttons

## Button
```javascript
import { Button } from 'react-native-custom-button';
// ...
<Button title="Button" />
```

## TextButton
```javascript
import { TextButton } from 'react-native-custom-button';
// ...
<TextButton title="Button" />
```

## OutlineButton
```javascript
import { OutlineButton } from 'react-native-custom-button';
// ...
<OutlineButton title="Button" />
```

## FullWidthButton
```javascript
import { FullWidthButton } from 'react-native-custom-button';
// ...
<FullWidthButton title="Button" />
```

# Buttons options
| Prop | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | String | true | Button title
| buttonTintColor | String | false | Button background color
| buttonTextColor | String | false | Button text color
| onPress | Function | false | Callback for onPress event