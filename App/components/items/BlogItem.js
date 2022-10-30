import {View, Text, StyleSheet, FlatList, Image} from "react-native";

import React, {useEffect, useState, useCallback, useMemo} from "react";

import {content_data} from "@/data";

import {colors, fonts, sizes} from "@/constants";

const BlogItem = ({data}) => {
  // first you should get dynamic item
  // you have the data props -> get the id and get the data based on this id
  // i make this static but you get the data from api
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 200);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>loading,,,</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={content_data}
        keyExtractor={item => item.ItemID}
        renderItem={({item, index}) => <Item data={item} />}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

function Item({data}) {
  return (
    <View style={styles.itemContainer}>
      <Image source={data.imgUrl} style={styles.itemImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingTop: sizes.padding,
  },
  contentContainer: {
    paddingHorizontal: sizes.padding,
  },
  itemContainer: {
    marginBottom: sizes.padding,
    maxHeight: 200,
    borderRadius: 10,
  },
  itemImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default BlogItem;
