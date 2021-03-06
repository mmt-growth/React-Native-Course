import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet } from 'react-native';

const ColourAdjuster = ({ colour, adjust }) => {
  return (
    <View style={styles.view}>
      <Button
        title={`More ${colour}`}
        color={colour.toLowerCase()}
        onPress={() => adjust(+1)}
      />
      <Button
        title={`Less ${colour}`}
        color={colour.toLowerCase()}
        onPress={() => adjust(-1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#c0c0c0',
    width: '90%',
    padding: 7,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 7,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

ColourAdjuster.propTypes = {
  colour: PropTypes.string.isRequired,
  adjust: PropTypes.func.isRequired,
};

export default ColourAdjuster;
