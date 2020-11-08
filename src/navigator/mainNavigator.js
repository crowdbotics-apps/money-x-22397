import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen59169407Navigator from '../features/BlankScreen59169407/navigator';
import UserProfile169406Navigator from '../features/UserProfile169406/navigator';
import Maps169387Navigator from '../features/Maps169387/navigator';
import Settings169365Navigator from '../features/Settings169365/navigator';
import Settings169350Navigator from '../features/Settings169350/navigator';
import NotificationList169349Navigator from '../features/NotificationList169349/navigator';
import Maps169348Navigator from '../features/Maps169348/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen59169407: { screen: BlankScreen59169407Navigator },
UserProfile169406: { screen: UserProfile169406Navigator },
Maps169387: { screen: Maps169387Navigator },
Settings169365: { screen: Settings169365Navigator },
Settings169350: { screen: Settings169350Navigator },
NotificationList169349: { screen: NotificationList169349Navigator },
Maps169348: { screen: Maps169348Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
