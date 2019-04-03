# React Native Custom Button
🕹 Super simple custom button that overrides default react native button style

# Installation
```bash
git clone https://github.com/ffrm/react-native-custom-button
cd react-native-custom-button
# Install dependencies
npm i
```

# Usage
```javascript
import { View } from 'react-native';
import { Button } from 'react-native-custom-button';

const customComponent = (props) => {
  return (
    <View>
      <Button style={customButtonStyle} />
    </View>
  );
}

const customButtonStyle = {
  backgroundColor: '#CCC'
}
```