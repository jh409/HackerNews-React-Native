'use strict';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import api from "../../Network/api.js";
import Post from "../Post/index.ios.js";
import TabBar from "../../Components/TabBar";
import RefreshableListView from "../../Components/RefreshableListView";
import ActivityView from "react-native-activity-view";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStoryIDs: null,
      lastIndex: 0
    };
  }

  render() {
    return (
      <TabBar structure={[
        {
          title: 'Front Page',
          iconName: 'star',
          renderContent: () => {
            return (
            <View /> // This needs to do something
            );
          }
        }]}
        selectedTab={2}
        activeTintColor={'#ff8533'}
        iconSize={25}/>
    );
  }
}
