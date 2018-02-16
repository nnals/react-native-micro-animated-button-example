import React, { Component } from 'react';
import { Platform, Text, View, Switch, ScrollView } from 'react-native';

import Button from 'react-native-micro-animated-button';

const colors =
  Platform.OS === 'ios'
    ? {
        blue: '#007aff',
        gray: '#d8d8d8',
        green: '#4cd964',
        red: '#ff3b30',
        white: '#ffffff'
      }
    : {
        blue: '#4285f4',
        gray: '#d8d8d8',
        green: '#0f9d58',
        red: '#db4437',
        white: '#ffffff'
      };

class Example0 extends Component {
  state = {
    simulateError: false
  }
  render() {
    const { simulateError } = this.state;
    return (
      <View style={[styles.center, { marginBottom: 10 } ]}>
        <Button
          successColor={colors.green}
          errorColor={colors.red}
          errorIconName="warning"
          label="Test"
          onPress={() => {
              if (simulateError) {
                this.b1.error();
              } else {
                this.b1.success();
              }
            }
          }
          ref={ref => (this.b1 = ref)}
          successIconName="check"
        />
        <View style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ marginRight: 10 }}>
            simulate error
          </Text>
          <Switch
            value={simulateError}
            onValueChange={value => {
              this.setState({ simulateError: value });
            }}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button
            label="load"
            onPress={() => this.b1.load()}
            static
            maxWidth={80}
            style={{ marginRight: 10 }}
          />
          <Button
            label="reset"
            onPress={() => this.b1.reset()}
            static
            maxWidth={80}
          />
        </View>
      </View>
    )
  }
}

const Example1 = () => (
  <View style={styles.center}>
    <Button
      foregroundColor={colors.green}
      label="Submit"
      onPress={() => this.b1.success()}
      ref={ref => (this.b1 = ref)}
      successIconName="check"
    />

    <Button
      foregroundColor={colors.blue}
      label="Retweet"
      onPress={() => this.b2.success()}
      ref={ref => (this.b2 = ref)}
      successIconName="retweet"
    />

    <Button
      foregroundColor={colors.red}
      label="Favorite"
      onPress={() => this.b3.success()}
      ref={ref => (this.b3 = ref)}
      successIconName="heart"
    />
  </View>
);

const Example2 = () => (
  <View style={styles.center}>
    <Button
      errorColor={colors.red}
      errorIconName="thumbs-down"
      foregroundColor={colors.blue}
      label="Am I even?"
      onPress={() =>
        new Date().getSeconds() % 2 === 0 ? this.b4.success() : this.b4.error()
      }
      ref={ref => (this.b4 = ref)}
      successColor={colors.green}
      successIconName="thumbs-up"
      shouldExpandOnFinish
    />

    <Button
      errorColor={colors.red}
      errorIconName="thumbs-down"
      foregroundColor={colors.blue}
      label="Am I even?"
      onPress={() =>
        new Date().getSeconds() % 2 === 0 ? this.b5.success() : this.b5.error()
      }
      ref={ref => (this.b5 = ref)}
      successColor={colors.green}
      successIconName="thumbs-up"
      shouldExpandOnFinish
    />
  </View>
);

const Example3 = () => (
  <View style={styles.center}>
    <Button
      backgroundColor={colors.blue}
      errorColor={colors.red}
      errorIconName="warning"
      foregroundColor={colors.white}
      label="Simulate an error"
      onPress={() => this.b6.error()}
      ref={ref => (this.b6 = ref)}
      shakeOnError
      style={styles.noRadius}
    />

    <Button
      backgroundColor={colors.blue}
      foregroundColor={colors.white}
      label="Smile at me"
      onPress={() => this.b7.success()}
      ref={ref => (this.b7 = ref)}
      scaleOnSuccess
      style={styles.noRadius}
      successColor={colors.green}
      successIconName="smile-o"
    />
  </View>
);

const Example4 = () => (
  <View style={styles.center}>
    <Button disabled label="Disabled Button" style={styles.noRadius} />

    <Button
      activeOpacity={0.5}
      backgroundColor={colors.blue}
      foregroundColor={colors.white}
      label="Static Button"
      onPress={() => null}
      static
      style={styles.noRadius}
    />
  </View>
);

class Example5 extends Component {
  state = { clicked: false };

  render() {
    return (
      <View style={styles.row}>
        <Button
          activeOpacity={0.5}
          foregroundColor={colors.blue}
          labelIcon="cloud-download"
          noFill
          onPress={() =>
            this.setState({ clicked: true }, () => this.b8.success())
          }
          onSecondaryPress={() =>
            this.setState({ clicked: false }, () => this.b8.reset())
          }
          ref={ref => (this.b8 = ref)}
          style={styles.noRadius}
          successColor={colors.blue}
          successIconColor={colors.blue}
          successIconName="remove"
        />

        {this.state.clicked && (
          <Text style={styles.rightText}>I just got downloaded</Text>
        )}
      </View>
    );
  }
}

const Examples = () => (
  <View style={styles.landing}>
    {/* <Example0 /> */}
    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
    <Example5 />
  </View>
);

const styles = {
  center: { alignItems: 'center' },
  landing: { flex: 1, justifyContent: 'center', paddingTop: 30 },
  noRadius: { borderRadius: 0 },
  rightText: { color: colors.blue, marginLeft: 10 },
  row: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }
};

export default Examples;