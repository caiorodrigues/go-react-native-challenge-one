import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',

  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
    borderBottomColor: '#666',
  },
  content: {
    fontSize: 12,
    color: '#999',
  },
});

const Post = ({ post }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.subtitle}>{post.author}</Text>
    <Text style={styles.content}>{post.content}</Text>
  </View>
);

export default Post;
