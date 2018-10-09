import React from 'react';
import {NetInfo} from "react-native"
import cfg from '../config/index';

function beforeRequest(method, params, headers) {
    if (method === 'POST' || method === 'PUT') {
        let body = JSON.stringify(params);
        if(headers['Content-Type'] === 'multipart/form-data') {
            body = params;
        }
        params = {body: body};
    }
    //认证header添加
    const user = storage.cache.user ? storage.cache.user.rawData : {};
    let authHeaders = user ? {
        "X-Auth-Token": user['userToken'],
        "X-User-Id": user['userId']
    } : {};
    return {params, authHeaders};
}

async function request(method, url, oldParams = {}, headers = {}) {
    const isConnected = await NetInfo.isConnected.fetch();
    let allowLoading = true;
    const server = cfg.server;
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
        let {params, authHeaders} = beforeRequest(method, oldParams, headers);

        log('请求参数:', method, url, params, authHeaders);

        fetch(url, {
            method: method,
            headers: {
                ...authHeaders,
                ...headers
            },
            ...params
        }).then((response) => {
            log('请求成功结果转换前', response);
            if(response.ok) {
                return response.json();
            }else {
                throw "status:" + response.status;
            }
        }).then((response) => {
            log('请求成功结果', response);
            if (!response.success && response.message === '用户未登录') {
                toast('登录已过期,请重新登录', 'danger');
                return;
            }
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
        return request('GET', url, {
            "Content-Type": "application/json;charset=UTF-8",
        });
    },
    postJson(url, params, headers) {
        return request('POST', url, params, {
            ...headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    },
    putJson(url, params, headers) {
        return request('PUT', url, params,{
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
