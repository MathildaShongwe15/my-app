import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import loadingScreen from '../Home/LoadingPage';
import useFetchUser from '../Home/Menu';

const TopLoader = () => {
    const flatListRef = useRef(null);
    //const { isLoading, success } = useFetchUser();
    const [currentPage, setCurrentPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);

    return (
      <View>

      </View>
    );
  };
  export default memo(TopLoader);