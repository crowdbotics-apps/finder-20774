import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera3113919Navigator from '../features/Camera3113919/navigator';
import EmailAuth4113918Navigator from '../features/EmailAuth4113918/navigator';
import ArticleList113878Navigator from '../features/ArticleList113878/navigator';
import ArticleList113877Navigator from '../features/ArticleList113877/navigator';
import ArticleList113876Navigator from '../features/ArticleList113876/navigator';
import BlankScreen54113856Navigator from '../features/BlankScreen54113856/navigator';
import UserProfile113842Navigator from '../features/UserProfile113842/navigator';
import Tutorial113841Navigator from '../features/Tutorial113841/navigator';
import NotificationList113813Navigator from '../features/NotificationList113813/navigator';
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
Camera3113919: { screen: Camera3113919Navigator },
EmailAuth4113918: { screen: EmailAuth4113918Navigator },
ArticleList113878: { screen: ArticleList113878Navigator },
ArticleList113877: { screen: ArticleList113877Navigator },
ArticleList113876: { screen: ArticleList113876Navigator },
BlankScreen54113856: { screen: BlankScreen54113856Navigator },
UserProfile113842: { screen: UserProfile113842Navigator },
Tutorial113841: { screen: Tutorial113841Navigator },
NotificationList113813: { screen: NotificationList113813Navigator },
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
