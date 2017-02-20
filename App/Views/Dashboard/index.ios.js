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
          title: 'Ask HN',
          iconName: 'comment',
          renderContent: () => {
            return (
            <View /> // This is the place we'll put something which says how to display
            );
          }
        },
        {
          title: 'Show HN',
          iconName: 'eye',
          renderContent: () => {
            return (
            <View /> // This is the place we'll put something which says how to display
            );
          }
        },
        {
          title: 'Front Page',
          iconName: 'star',
          renderContent: () => {
            return (
              <RefreshableListView renderRow={(row) => this.renderListViewRow(row, 'Top Story') }
                onRefresh={(page, callback) => console.log("Do nothing yet") }
                backgroundColor={'#F6F6EF'}
                style={styles.listview}/>
             );
           }
         },
        {
          title: 'New',
          iconName: 'level-up',
          renderContent: () => {
            return (
            <View /> // This is the place we'll put something which says how to display
            );
          }
        },
        {
          title: 'Front Page',
          iconName: 'star',
          renderContent: () => {
            return (
            <View /> // This is the place we'll put something which says how to display
            );
          }
        }]}
        selectedTab={2}
        activeTintColor={'#ff8533'}
        iconSize={25}/>
    );
  }

  renderListViewRow(row, pushNavBarTitle) {
   return (
     <TouchableHighlight
       underlayColor={'#f3f3f2'}>
       <View style={styles.rowContainer}>
         <Text style={styles.rowCount}>
           {row.count}
         </Text>
         <View style={styles.rowDetailsContainer}>
           <Text style={styles.rowTitle}>
             {row.title}
           </Text>
           <Text style={styles.rowDetailsLine}>
             Posted by {row.by} | {row.score} Points | {row.descendants} Comments
           </Text>
           <View style={styles.separator}/>
         </View>
       </View>
     </TouchableHighlight>
   );
  }
}

const styles = StyleSheet.create({
 rowContainer: {
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
 },
 rowCount: {
   fontSize: 20,
   textAlign: 'right',
   color: 'gray',
   margin: 10,
   marginLeft: 15,
 },
 rowDetailsContainer: {
   flex: 1,
 },
 rowTitle: {
   fontSize: 15,
   textAlign: 'left',
   marginTop: 10,
   marginBottom: 4,
   marginRight: 10,
   color: '#FF6600'
 },
 rowDetailsLine: {
   fontSize: 12,
   marginBottom: 10,
   color: 'gray',
 },
 listview: {
   marginBottom: 49
 },
 separator: {
   height: 1,
   backgroundColor: '#CCCCCC'
 }
});
