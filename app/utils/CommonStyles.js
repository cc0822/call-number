import React from "react";

export const Color = {
    containerBgColor: '#f4f4f4', //app内容背景

    skyBlue: '#2a90ff',
    mainColor: '#f4f4f4',
    mainBackground: '#ffffff',
    disabledColor: '#b5b5b5',

    textRed: '#FF3300',

    textGreen: '#2E8B57',

    appBlue: '#3450af',
    lightBlue: '#3399FF',
    textBlue: '#1c4fb3',
    blackBlue: '#1f4cb3'
};


export default commonStyles = {
    container: {
        flex: 1,
        backgroundColor: Color.mainColor
    },
    skyBlueHeader: {
        headerTintColor: 'white',
        headerStyle: {
            elevation: 0, //header取消底部阴影效果
            backgroundColor: Color.skyBlue
        }
    },
    //卡片阴影
    cardShadow: {
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 0.5,
        borderRadius: 5
    },
    //身份证 资格证等
    idCardTransform: {
        height: 100,
        width: 160,
        borderRadius: 5
    }
};