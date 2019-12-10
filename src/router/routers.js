import Home from '../viewer/home/Home';
import DataServer from '../viewer/dataServer/DataServer';
import FunctionServer from '../viewer/functionServer/FunctionServer';
import MapView from '../viewer/mapView/MapView';
import SceneView from '../viewer/sceneView/SceneView';
import NewsCenter from '../viewer/newsCenter/NewsCenter';
import DownloadCenter from '../viewer/downloadCenter/DownloadCenter';
import CloudServer from '../viewer/cloudServer/CloudServer';
import ChartAnalyst from '../viewer/chartAnalyst/ChartAnalyst';
import BigdataAnalyst from '../viewer/bigdataAnalyst/BigdataAnalyst';
import RealtimeGIS from '../viewer/realtimeGIS/RealtimeGIS';
import PlatformUse from '../viewer/platformUse/PlatformUse';
import MyContent from '../viewer/myContent/MyContent';
import MyCollection from '../viewer/myCollection/MyCollection';
import MyPortalSetting from '../viewer/myPortalSetting/MyPortalSetting';

const routers = [{
    path: '/',
    component: Home,
    exact: true,
}, {
    path: '/dataserver',
    component: DataServer,
}, {
    path: '/functionserver',
    component: FunctionServer,
}, {
    path: '/mapview',
    component: MapView,
}, {
    path: '/sceneview',
    component: SceneView,
}, {
    path: '/newscenter',
    component: NewsCenter,
}, {
    path: '/downloadcenter',
    component: DownloadCenter,
}, {
    path: '/cloudserver',
    component: CloudServer,
}, {
    path: '/chartanalyst',
    component: ChartAnalyst,
}, {
    path: '/bigdataanalyst',
    component: BigdataAnalyst,
}, {
    path: '/realtimegis',
    component: RealtimeGIS,
}, {
    path: '/platformuse',
    component: PlatformUse,
}, {
    path: '/mycontent',
    component: MyContent,
}, {
    path: '/mycollection',
    component: MyCollection,
}, {
    path: '/myportalsetting',
    component: MyPortalSetting,
}];

export default routers;
