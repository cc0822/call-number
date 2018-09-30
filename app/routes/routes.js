import {StackNavigator} from "react-navigation";
import {Color} from "../assets/Color";
import {Home} from "../screen/Home";
import {Login} from "../screen/Login";

const MainRoutes = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: "首页"
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                headerTitle: "登录"
            }
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                elevation: 0, //header取消底部阴影效果
                backgroundColor: Color.mainColor,
            },
            headerTitleStyle: {
                alignSelf: 'center'
            },
            gesturesEnabled: true //支持手势返回
        }
    }
)

export default AppRouter = MainRoutes;
