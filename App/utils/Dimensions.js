import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

export const { height, width } = Dimensions.get('window');
export let SelectedNumber=null;

export const setSelectedNumberAction=(number)=>
{
    SelectedNumber=number;
}
export const getSelectedNumberAction=()=>
{
    return SelectedNumber
}

export const vh = (value) => {
    if (value > 100) return height;
    return (value * height) / 100;
};

export const vw = (value) => {
    if (value > 100) return width;
    return (value * width) / 100;
};

export const getWidthPixelFromPercentage = (value) => {
    return (width * value) / 100;
}

export const getHeightPixelFromPercentage = (value) => {
    return (height * value) / 100;
}

export const isiPhoneX = (Platform.OS === 'ios')
    && ((height === 812 && width === 375)
        || (height === 896 && width === 414) || (height === 844 && width === 390)
        || (height === 926 && width === 428) || (height === 896 && width === 414)
    );

export const statusBarHeight = (() => {
    if (Platform.OS === 'android') {
        return StatusBar.currentHeight || 20;
    }
    if (isiPhoneX) {
        return 40;
    }

    return 20;
})();

export const AppMetrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  SelectedNumber:SelectedNumber

};
export const counterPixel = (value) => PixelRatio.getFontScale() * value;

export const chinHeight = (() => (isiPhoneX ? 30 : 0))();

export const headerHeight = (Platform.OS == "android"
    ? vh(6.74)
    : isiPhoneX
        ? vh(6.74) + chinHeight
        : vh(9.5))
