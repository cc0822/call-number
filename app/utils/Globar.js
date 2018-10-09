import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';
import Toast from 'react-native-root-toast';
import http from './HttpUtil';
import {Color} from './CommonStyle';

//全局请求
global.http = http;
//全局打印
global.log = console.log;
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
//全局缓存
const storage = new Storage({
    //最大容量，默认值1000条数据循环存储
    size: 1000,
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,
})
global.storage = storage;
//通用样式
global.Color = Color;

