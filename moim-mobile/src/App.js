import React from 'react';
import AppLoading from "./components/AppLoading";
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import {cacheAssets,cacheFonts} from "./helpers/AssetsCaching";

import Profile from './drawer/profile';
import Lists from './drawer/lists';
import Home from './drawer/home';

const MainRoot = createAppContainer(createDrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home
    },
    Profile: {
      path: '/profile',
      screen: Profile,
    },
    Lists: {
      path: '/lists',
      screen: Lists,
    }
  },
  {
    initialRouteName: 'Home',
  }
));

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheAssets([
      require("../assets/images/bg_screen1.jpg"),
      require("../assets/images/bg_screen2.jpg"),
      require("../assets/images/bg_screen3.jpg"),
      require("../assets/images/bg_screen4.jpg"),
      require("../assets/images/user-cool.png"),
      require("../assets/images/user-hp.png"),
      require("../assets/images/user-student.png"),
      require("../assets/images/avatar1.jpg"),
    ]);

    const fontAssets = cacheFonts({
      "FontAwesome": require("@expo/vector-icons/fonts/FontAwesome.ttf"),
      "Ionicons": require("@expo/vector-icons/fonts/Ionicons.ttf"),
      "Entypo": require("@expo/vector-icons/fonts/Entypo.ttf"),
      "SimpleLineIcons": require("@expo/vector-icons/fonts/SimpleLineIcons.ttf"),
      "MaterialIcons": require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
      "MaterialCommunityIcons": require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
    });

    await Promise.all([imageAssets, fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return <MainRoot />;
  }
}