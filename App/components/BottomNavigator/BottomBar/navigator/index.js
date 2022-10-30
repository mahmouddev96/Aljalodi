import React, { useEffect, useState } from 'react';
import { Dimensions, View, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { getPath, getPathUp } from './path';
import { styles } from './styles';

const defaultProps = {
  bgColor: 'white',
  borderTopLeftRight: false,
  strokeWidth: 0
};

const BottomBarComponent = (props) => {
  const {

    style,
    width = null,
    height = 80,
    circleWidth = 70,
    bgColor,
    initialRouteName,
    tabBar,
    renderCircle,
    borderTopLeftRight,
    strokeWidth,
    isVisible,
    setScreenName
  } = props;

  const [selectTab, setSelectTab] = useState  (initialRouteName);
  const [itemLeft, setItemLeft] = useState([]);
  const [itemRight, setItemRight] = useState([]);
  const [maxWidth, setMaxWidth] = useState  (width);
  const [maxHeight, setMaxHeight] = useState (Dimensions.get('window').height);
  const children = props?.children;

  useEffect(() => {
    const { width: w, height: h } = Dimensions.get('window');
    if (!width) {
      setMaxWidth(w);
    }
    setMaxHeight(h);
  }, [])



  useEffect(() => {
    const arrLeft = children.filter((item) => item.props.position === 'left');
    const arrRight = children.filter((item) => item.props.position === 'right');

    setItemLeft(arrLeft);
    setItemRight(arrRight);

    setRouteName(initialRouteName);
  }, []);

  const setRouteName = (name) => {
    setScreenName(name);
    setSelectTab(name);
  };

  const d = getPath(maxWidth, height, circleWidth >= 50 ? circleWidth : 50, borderTopLeftRight);
  if (d) {
    return (
      <View style={{ flex: 1}}>
        <View style={{ height: maxHeight, backgroundColor: 'white' }}>
          {children.map((route, index) => {
            const routeName = route.props.name;
            return <View key={index} style={[selectTab === routeName ? { flex: 1 } : { display: 'none' }]}>{route.props.component()}</View>
          })}
        </View>

        {isVisible && <View style={[styles.container, style]}>
          <Svg width={maxWidth} height={height + (0)}>
            <Path fill={bgColor} stroke="#DDDDDD"   />
          </Svg>
          <View style={[styles.main, { width: maxWidth }]}>
            <View style={[styles.rowLeft, { height: height }]}>
              {itemLeft.map((item, index) => {
                const routeName = item.props.name;

                return (
                  <View style={{ flex: 1 }} key={index}>
                    {tabBar({
                      routeName,
                      selectTab: selectTab,
                      navigation: (selectTab) => {
                        setRouteName(selectTab);
                      },
                    })}
                  </View>
                );
              })}
            </View>
          
            <View style={[styles.rowRight, { height: height }]}>
              {itemRight.map((item, index) => {
                const routeName = item.props.name;
                return (
                  <View style={{ flex: 1 }} key={index}>
                    {tabBar({
                      routeName,
                      selectTab: selectTab,
                      navigation: (selectTab) => {
                        setRouteName(selectTab);
                      },
                    })}
                  </View>
                );
              })}
            </View>
          </View>
          {Platform.OS === 'ios' && <View style={{ height: 30, backgroundColor: 'white', marginTop: -1}} />}
        </View>}
      </View>
    );
  }
  return null;
};

BottomBarComponent.defaultProps = defaultProps;

export default BottomBarComponent;
