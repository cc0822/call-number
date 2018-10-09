import {StackNavigator} from "react-navigation";
import {Home} from "../views/Home";
import {Login} from "../views/Login";

const MainRoutes = StackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                title: ' ', // 这里不给值
                header: false, // 不显示导航栏
                gesturesEnabled: false,
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                title: ' ', // 这里不给值
                header: false, // 不显示导航栏
                gesturesEnabled: false
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default AppRouter = MainRoutes;
