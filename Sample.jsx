import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPostsApiRequest} from './redux/Actions/Action';

const Sample = () => {
  const posts = useSelector(state => state.posts);
  console.log(posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApiRequest());
  }, []);
  return (
    <View>
      <Text>{JSON.stringify(posts)}</Text>
    </View>
  );
};

export default Sample;
