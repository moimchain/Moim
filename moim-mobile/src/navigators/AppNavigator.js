import { createStackNavigator } from "react-navigation";
import HomeContainer from "../containers/HomeContainer";
import ListContainer from "../containers/ListContainer";
import ProfileContainer from "../containers/ProfileContainer";

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: HomeContainer,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "Keon",
                headerStyle: {height:80}
              })
        },
        List: {
            screen: ListContainer
        },
        Profile: {
            screen: ProfileContainer
        }
    }
);

export default AppNavigator;
