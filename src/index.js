import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Post from './components/Post';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  scrollView: {
    margin: 15,
  }
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Caio Rodrigues',
        content: 'Lorem ipsum primis odio bibendum metus suscipit pulvinar, venenatis lacus sodales pulvinar rutrum viverra, justo turpis aliquet eros velit ut. leo hendrerit taciti eu aenean rhoncus habitasse dictum molestie, vestibulum at auctor suspendisse pellentesque duis suscipit semper hendrerit, libero litora diam quis pellentesque per pharetra.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Caio Rodrigues',
        content: 'Lorem ipsum primis odio bibendum metus suscipit pulvinar, venenatis lacus sodales pulvinar rutrum viverra, justo turpis aliquet eros velit ut. leo hendrerit taciti eu aenean rhoncus habitasse dictum molestie, vestibulum at auctor suspendisse pellentesque duis suscipit semper hendrerit, libero litora diam quis pellentesque per pharetra.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Caio Rodrigues',
        content: 'Lorem ipsum primis odio bibendum metus suscipit pulvinar, venenatis lacus sodales pulvinar rutrum viverra, justo turpis aliquet eros velit ut. leo hendrerit taciti eu aenean rhoncus habitasse dictum molestie, vestibulum at auctor suspendisse pellentesque duis suscipit semper hendrerit, libero litora diam quis pellentesque per pharetra.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Caio Rodrigues',
        content: 'Lorem ipsum primis odio bibendum metus suscipit pulvinar, venenatis lacus sodales pulvinar rutrum viverra, justo turpis aliquet eros velit ut. leo hendrerit taciti eu aenean rhoncus habitasse dictum molestie, vestibulum at auctor suspendisse pellentesque duis suscipit semper hendrerit, libero litora diam quis pellentesque per pharetra.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Caio Rodrigues',
        content: 'Lorem ipsum primis odio bibendum metus suscipit pulvinar, venenatis lacus sodales pulvinar rutrum viverra, justo turpis aliquet eros velit ut. leo hendrerit taciti eu aenean rhoncus habitasse dictum molestie, vestibulum at auctor suspendisse pellentesque duis suscipit semper hendrerit, libero litora diam quis pellentesque per pharetra.',
      },
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}

