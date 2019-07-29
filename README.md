# React Native Custom Button
🕹 Super simple custom button that overrides default React Native button style

# Installation
```bash
yarn install react-native-custom-button
```

# Dependencies
Before start using this lib we need to add ```react-native-vector-icons``` dependency:
```bash
yarn add react-native-vector-icons
react-native link react-native-vector-icons
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

## SquaredCardButton
```javascript
import { SquaredCardButton } from 'react-native-custom-button';
// ...
<SquaredCardButton title="Button" />
```

# Buttons options
| Prop | Type | Required | Description | Support |
| ---- | ---- | -------- | ----------- | ------- |
| title | String | true | Button title | * |
| buttonTintColor | String | false | Button background color | * |
| buttonTextColor | String | false | Button text color | * |
| buttonBorderColor | String | false | Border color to be used by some type of buttons | * |
| onPress | Function | false | Callback for onPress event | * |
| buttonStyle | Object | false | Custom button style object | * |
| buttonTextStyle | Object | false | Custom text style object | * |
| buttonIcon | String/URL/Image | false | Icon image to render ```(.svg not supported)```. Support icons from <b>react-native-vector-icons</b>. Use this prop in the following format: ```iconSource/iconName``` | SquaredCardButton |
| buttonIconSize | Number | false | Icon size | SquaredCardButton |
| buttonIconColor | Color | false | Color to be used in icon when using the react-native-vector-icons | SquaredCardButton |


# Example
Access the example app on ```examples/RNCustomButtonPlayground``` and:

```bash
npm install
npm run start
npm run ios
# or
npm run android
```

![Simulator Screen Shot - iPhone X - 2019-07-29 at 13 01 19](https://user-images.githubusercontent.com/13858601/62063330-07f94980-b201-11e9-9acb-4072a13aea04.png)
