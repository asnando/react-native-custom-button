import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import {
  buttonIconSize,
} from '../constants';

const resolveIconVector = (name, props = {}) => {
  const iconSource = name.split('/')[0];
  const iconName = name.split('/').pop();
  const iconProps = {
    name: iconName,
    size: props.buttonIconSize || buttonIconSize,
    color: props.buttonIconColor,
  };
  switch (iconSource) {
    case 'AntDesign':
      return <IconAntDesign {...iconProps} />;
    case 'Entypo':
      return <IconEntypo {...iconProps} />;
    case 'EvilIcons':
      return <IconEvilIcons {...iconProps} />;
    case 'Feather':
      return <IconFeather {...iconProps} />;
    case 'FontAwesome':
      return <IconFontAwesome {...iconProps} />;
    case 'Fontisto':
      return <IconFontisto {...iconProps} />;
    case 'Foundation':
      return <IconFoundation {...iconProps} />;
    case 'Ionicons':
      return <IconIonicons {...iconProps} />;
    case 'MaterialCommunityIcons':
      return <IconMaterialCommunityIcons {...iconProps} />;
    case 'MaterialIcons':
      return <IconMaterialIcons {...iconProps} />;
    case 'SimpleLineIcons':
      return <IconSimpleLineIcons {...iconProps} />;
    case 'Octicons':
      return <IconOcticons {...iconProps} />;
    case 'Zocial':
      return <IconZocial {...iconProps} />;
    default:
      return null;
  }
};

export default resolveIconVector;
