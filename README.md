# React Native Custom Button
🕹 Super simple custom button that overrides default React Native button style

# Installation
```bash
yarn install https://github.com/ffrm/react-native-custom-button
```

# Usage
```javascript
import { View } from 'react-native';
import { Button } from 'react-native-custom-button';

const customButtonStyle = {
  backgroundColor: '#CCC'
};

const customComponent = (props) => {
  return (
    <View>
      <Button style={customButtonStyle} onPress={() => anyOnPressMethod()} />
    </View>
  );
}
```

# Types of buttons
```javascript
import {
  Button,
  TextButton,
  OutlineButton,
  FullWidthButton,
} from 'react-native-custom-button';
```