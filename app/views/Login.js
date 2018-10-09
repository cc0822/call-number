import React, {Component} from "react";
import {StyleSheet, View, Text, Picker, TextInput, Image, Button, StatusBar} from "react-native";
import DeviceInfo from 'react-native-device-info';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorName: '',
            deptCode: '',
            doctorCode: '',
            beeperCode: '',
            password: '',
            doctorList: []
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
        DeviceInfo.getMACAddress().then(mac => {
            storage.save({
                key: 'macAddress',
                data: '38:E6:0A:85:DA:22'
            });
            this.setState({
                beeperCode: '38:E6:0A:85:DA:22'
            });
            http.get('config/userInfo/list', {beeperCode: '38:E6:0A:85:DA:22'}).then(res => {
                if (res.success) {
                    this.setState({
                        doctorList: res.data
                    })
                }
            });
        })
    }

    login() {
        const {deptCode, doctorCode, password, beeperCode} = this.state;
        const params = {deptCode, doctorCode, password, beeperCode};
        log("params", params)
        http.postJson('config/userInfo/login', params).then(res => {
            if (res.success) {
                storage.save({
                    key: 'user',
                    data: res.data
                });
                this.props.navigation.navigate('Home');
            }else {
                toast(res.message, "danger");
            }
        });
    }

    render() {
        const {doctorList} = this.state;
        const {loading} = this.props;
        return (
            <View style={styles.container}>
                {/*<StatusBar hidden={true} />*/}
                <Image source={require('../assets/images/bg.png')} style={styles.backgroundImg}/>
                <View style={styles.loginBox}>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginLeft}>
                            <Image source={require('../assets/images/login.png')} style={styles.backgroundImg}/>
                        </View>
                        <View style={styles.loginRight}>
                            <Text style={styles.title}>采血大厅排队叫号系统</Text>
                            <View style={styles.inputItem}>
                                <Image source={require('../assets/images/user.png')}
                                       style={styles.icon}/>
                                <Picker style={{flex:1, height:40}} prompt='请选择账号'
                                        selectedValue={this.state.doctorName}
                                        onValueChange={(item) =>
                                           this.setState({
                                               deptCode: item.deptCode,
                                               doctorCode: item.doctorCode,
                                               doctorName: item.doctorName
                                           })}>
                                    {doctorList.map((item, i) => {
                                        return (
                                            <Picker.Item label={item.doctorName} value={item}
                                                         key={i} />
                                        )
                                    })}
                                </Picker>
                            </View>
                            <View style={styles.inputItem}>
                                <Image source={require('../assets/images/psw.png')}
                                       style={styles.icon}/>
                                <TextInput  secureTextEntry placeholder={'请输入账户密码'}
                                            placeholderTextColor={'#A5A5A5'}
                                            style={styles.input}
                                            onChangeText={password => this.setState({password})}
                                            underlineColorAndroid='transparent'/>
                            </View>
                            <Button onPress={_ => this.login()} title="立即登录"　color="#0EA8FF"
                                    disabled={!this.state.doctorName || !this.state.password}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    backgroundImg: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        height:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    },
    loginBox: {
        position: 'absolute',
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        paddingHorizontal: 80,
        paddingVertical: 100
    },
    loginContainer:{
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#e8e8e8'
    },
    loginLeft: {
        flex: 1,
    },
    loginRight: {
        flex: 1,
        padding:60
    },
    title: {
        fontSize: 26,
        color: '#000',
        marginBottom:30
    },
    inputItem: {
        // display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        height: 45,
        // paddingVertical:10,
        marginBottom: 25,
        borderBottomWidth:1,
        borderBottomColor: '#d9d9d9'
    },
    icon:{
        width:14,
        marginRight:10
    },
    input: {
        flex: 1,
        // paddingLeft: 15,
        height: 40,
        fontSize: 14,
        color: '#333'
    },
    otherOption: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    }
});
