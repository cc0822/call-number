import React, {Component} from "react";
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import cfg from '../config/index';

const btnData = cfg.callBtnData;

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            macAddress: null
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
        storage.load({
            key: 'user',
        }).then(res => {
            log("res", res)
        }).catch(err => {
            log(err)
        });
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image source={require('../assets/images/logo.png')}/>
                    <Text style={styles.title}>采血大厅排队叫号系统</Text>
                </View>
                <View style={styles.personInfo}>
                    <Text style={styles.name}>当前登录：张翼德</Text>
                    <TouchableOpacity  onPress={_ => this.logout()}  activeOpacity={0.2} focusedOpacity={0.5}>
                        <View style={styles.logout}>
                            <Image source={require('../assets/images/logout.png')}
                                   style={{tintColor:'#0EA8FF', marginRight: 8}} />
                            <Text style={{color:'#0EA8FF'}}>注销</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderBtnGroup() {
        return (
            <View style={styles.section}>
                {btnData.map((item, i) => {
                    return (
                        <TouchableOpacity  onPress={_ => this.clickEvent(item.clicked)}
                                           activeOpacity={0.2} focusedOpacity={0.5} key={i}>
                            <View style={styles.btnGroup}>
                                <View style={[styles.btn, {backgroundColor: Color[item.btnBg]}]}>
                                    <Image source={item.imgUrl}/>
                                </View>
                                <Text style={{color:'#333', fontSize:16, fontWeight: 'bold'}}>{item.btnText}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    renderPatientInfo() {
        return (
            <View style={styles.patientInfo}>
                <View style={styles.patientList}>

                </View>
                <View style={styles.patientDetail}>

                </View>
            </View>
        )
    }

    logout() {}

    clickEvent(event) {

    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderBtnGroup()}
                {this.renderPatientInfo()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(244,244,244,1)'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        marginBottom:10,
        paddingTop:20,
        paddingBottom: 16,
        paddingHorizontal: 15
    },
    logo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginLeft: 8
    },
    personInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        color: '#333333',
        marginRight: 20
    },
    logout: {
        paddingHorizontal:14,
        paddingVertical: 9,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0EA8FF',
        borderRadius: 3
    },
    section: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingVertical: 10
    },
    btnGroup: {
        alignItems: 'center'
    },
    btn: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6
    },
    patientInfo: {
        flex:6,
        flexDirection: 'row'
    },
    patientList: {
        flex: 3,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    patientDetail: {
        flex:2,
        backgroundColor: '#fff',
    }
});
