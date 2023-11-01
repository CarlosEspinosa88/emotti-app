import React from "react";
import { Button, useTheme } from 'react-native-paper';

function PrimaryButton({ 
  icon,
  mode,
  title,
  textColor,
  dark = false,
  uppercase = false,
  disabled = false,
  loading = false,
  accessibilityLabel = 'button',
  accessibilityHint = 'hint_button',
  onPress = () => {}, 
  style = {},
  testID
}) {
  const theme = useTheme()

  return (
    <Button 
      testID={testID}
      dark={dark}
      mode={mode}
      icon={icon}
      style={style}
      loading={loading}
      disabled={disabled}
      uppercase={uppercase}
      textColor={textColor}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      buttonColor={theme.colors.primary}
      rippleColor={theme.colors.ripple}
      onPress={onPress}
    >
    {title}
  </Button>
  )
}

export default PrimaryButton;
