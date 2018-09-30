import Toast from 'react-native-root-toast';
import storage from './StorageUtil';
import http from './HttpUtil';

//全局缓存
global.storage = storage;
//全局请求
global.http = http;
//全局Toast
global.toast = (content, type = 'success', position = 'center', duration = 3000) => {
    switch(type) {
        case 'warning': {
            type = 'warn';
            break
        }
        case 'danger': {
            type = 'error';
            break
        }
    }
    const positionMap = {
        top: Toast.positions.TOP,
        center: Toast.positions.CENTER,
        bottom: Toast.positions.BOTTOM
    };
    Toast.show(content, {
        position: positionMap[position]
    });
};