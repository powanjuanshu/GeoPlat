/**
 * 跑马灯组件的主要配置文件
 * @type {{}}
 */
import img_01 from '../assets/image/carousel/logo_big.png';
import img_02 from '../assets/image/carousel/carousel0.png';
import img_03 from '../assets/image/carousel/carousel1.png';
import img_04 from '../assets/image/carousel/carousel2.png';

const carouselConfig = {
    carousel_view_one: {
        title: '易智瑞时空大数据共享服务平台',
        image: img_01,
        desc: '时空大数据共享服务平台着力于打造一个集地图、时空数据、服务、文档、工具等资源于一体的综合资源平台和共享交换平台。将平台所拥有的地理资源、服务及应用按不同类型、不同权限展示出来，用户可以在浏览器、移动终端访问该资源中心，获取、制作自己的专题资源并实现共享交换',
    },
    carousel_view_two: {
        title: '智能地图',
        image: img_02,
        desc: '智能制图赋予不仅限于空间数据更多的直观生命力，高于文字、报表的信息传递来表达行业应用的专题，通过基于数据特点的智能预设、诸多制图模板及其精细化调整的数据表达，使得发现、呈现数据中的信息更加简洁更具视觉冲击力',
    },
    carousel_view_three: {
        title: '应用中心',
        image: img_03,
        desc: '平台着力于打造一个集地图、时空数据、服务、文档、模板、程序等资源于一体的综合资源平台。将平台所拥有的地理资源、服务以及应用按不同类型、不同权限展示出来，用户可以在浏览器、移动终端访问该资源中心，获取、制作自己的专题资源并实现共享交换',
    },
    carousel_view_four: {
        title: '数据共享',
        image: img_04,
        desc: '平台提供了大数据的管理，随着技术的发展，时空信息已不再仅仅是标准的表结构数据，而是大量非结构化、半结构化的大数据，数据量也成倍增长，管理与共享时空信息大数据也是必须解决的问题。',
    },
};

export default carouselConfig;
