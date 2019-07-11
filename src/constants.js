import PropTypes from 'prop-types';

export const buttonHeight = 48;
export const buttonFontSize = 20;
export const buttonBorderRadius = 4;
export const buttonDefaultColor = '#2196F3';
export const buttonDefaultBorderColor = '#2196F3';
export const buttonDefaultFontColor = 'white';
export const buttonDefaultWidth = 256;

export const buttonPropTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBorderColor: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object,
};

export const buttonDefaultProps = {
  buttonTintColor: null,
  buttonTextColor: null,
  buttonBorderColor: null,
  onPress: null,
  buttonStyle: {},
  textStyle: {},
};
