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
  SquaredCardButton,
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
        <TextButton title="Another button with long long text" />
        <UnderlinedButton title="UnderlinedButton" />
        <SquaredCardButton
          title="SquaredCardButton"
          buttonBorderColor="rgb(32,150,243)"
          buttonTextColor="white"
          buttonTintColor="rgb(32,150,243)"
          buttonIcon="AntDesign/hearto"
          buttonIconColor="white"
          buttonTextStyle={{ textAlign: 'left' }}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
