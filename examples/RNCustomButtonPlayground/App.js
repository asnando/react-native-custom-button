import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {
  Button,
  FullWidthButton,
  OutlineButton,
  RoundedButton,
  RoundedOutlineButton,
  TextButton,
  UnderlinedButton,
} from 'react-native-custom-button';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Button title="Button" />
        <FullWidthButton title="FullWidthButton" />
        <OutlineButton title="OutlineButton" />
        <RoundedButton title="RoundedButton" />
        <RoundedOutlineButton title="RoundedOutlineButton" />
        <TextButton title="TextButton" />
        <UnderlinedButton title="UnderlinedButton" />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
