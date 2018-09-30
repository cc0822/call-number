import React from 'react';
import {NetInfo} from "react-native"

async function request(method, url, params = {}, headers = {}) {
    const isConnected = await NetInfo.isConnected.fetch()

    let allowLoading = true;
    if (typeof(url) === 'object') {
        if(url['hideLoading']) {
            allowLoading = false;
        }
        if(url['customUrl']) {
            url = url.url;
        }else {
            url = server + url.url;
        }
    }else {
        url = server + url;
    }

    return new Promise((resolve, reject) => {
        // allowLoading &&
        fetch(url, {method, headers, params}).then((response) => {
            log('请求成功结果转换前', response);
            if(response.ok) {
                return response.json();
            }else {
                throw "status:" + response.status;
            }
        }).then((response) => {
            log('请求成功结果', response);
            resolve(response);
        }).catch((err) => {
            let tipText = '请求异常:';
            if(!isConnected) {
                tipText = "当前网络不可用，请检查你的网络设置";
                toast(tipText, 'danger');
            }else {
                reject(tipText + err);
                toast(tipText + err, 'danger')
            }
        })
    })
}

const http = {
    get(url, params) {
        if(params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if(typeof(url) === 'object') {
                if(url.url.search(/\?/) === -1) {
                    url.url += '?' + paramsArray.join('&')
                }else {
                    url.url += '&' + paramsArray.join('&')
                }
            }else {
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                }else {
                    url += '&' + paramsArray.join('&')
                }
            }
        }
        return request('GET', url);
    },
    postJson(url, params, headers) {
        let body = JSON.stringify(params);
        params = {body: body};
        return request('POST', url, params, {
            ...headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    },
    putJson(url, params, headers) {
        let body = JSON.stringify(params);
        params = {body: body};
        return request('PUT', url, params, {
            ...headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    },
    delete(url) {
        return request('Delete', url);
    }
}

export default http;
