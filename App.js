import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation"
import BusinessListScreen from "./BusinessListScreen"
import PersonalListScreen from "./PersonalListScreen"

const RootStack = createStackNavigator({
  Business: BusinessListScreen
})

const TabStack = createBottomTabNavigator({
  Business: RootStack,
  Personal: PersonalListScreen
})

const DrawerStack = createDrawerNavigator({
  Business: RootStack,
  Personal: PersonalListScreen
})

export default createAppContainer(DrawerStack)
