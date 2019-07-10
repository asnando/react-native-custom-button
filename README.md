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

## RoundedButton
```javascript
import { RoundedButton } from 'react-native-custom-button';
// ...
<RoundedButton title="Button" />
```

## RoundedOutlineButton
```javascript
import { RoundedOutlineButton } from 'react-native-custom-button';
// ...
<RoundedOutlineButton title="Button" />
```

## UnderlinedButton
```javascript
import { UnderlinedButton } from 'react-native-custom-button';
// ...
<UnderlinedButton title="Button" />
```

# Buttons options
| Prop | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | String | true | Button title
| buttonTintColor | String | false | Button background color
| buttonTextColor | String | false | Button text color
| buttonBorderColor | String | false | Border color to be used by some type of buttons
| onPress | Function | false | Callback for onPress event
| buttonStyle | Object | false | Custom button style object
| textStyle | Object | false | Custom text style object