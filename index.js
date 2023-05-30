import {AppRegistry} from 'react-native';
import {initializePresentationLayer} from './app/presentation/PresentationLayer';
import {name as appName} from './app.json';
import {initializeDomainLayer} from './app/domain/DomainLayer';
import {initializeDataLayer} from './app/data/DataLayer';

initializeDataLayer();
const {store} = initializeDomainLayer();
const App = initializePresentationLayer(store);

AppRegistry.registerComponent(appName, () => App);
