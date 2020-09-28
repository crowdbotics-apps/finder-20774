import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings113812Navigator from '../features/Settings113812/navigator';
import Settings113804Navigator from '../features/Settings113804/navigator';
import UserProfile113802Navigator from '../features/UserProfile113802/navigator';
import UserProfile113730Navigator from '../features/UserProfile113730/navigator';
import Maps113711Navigator from '../features/Maps113711/navigator';
import Settings113689Navigator from '../features/Settings113689/navigator';
import Settings113674Navigator from '../features/Settings113674/navigator';
import NotificationList113673Navigator from '../features/NotificationList113673/navigator';
import Maps113672Navigator from '../features/Maps113672/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings113812: { screen: Settings113812Navigator },
Settings113804: { screen: Settings113804Navigator },
UserProfile113802: { screen: UserProfile113802Navigator },
UserProfile113730: { screen: UserProfile113730Navigator },
Maps113711: { screen: Maps113711Navigator },
Settings113689: { screen: Settings113689Navigator },
Settings113674: { screen: Settings113674Navigator },
NotificationList113673: { screen: NotificationList113673Navigator },
Maps113672: { screen: Maps113672Navigator },

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
