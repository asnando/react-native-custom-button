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
        <UnderlinedButton title="UnderlinedButton" />
        <SquaredCardButton
          title="SquaredCardButton"
          buttonBorderColor={'#808080'}
          buttonTextColor={'#303030'}
          // buttonIcon="https://png.pngtree.com/element_our/sm/20180626/sm_5b321ca7a1ca4.png"
          buttonIcon="AntDesign/hearto"
          buttonIconColor="red"
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
