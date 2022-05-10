import { Navigation } from '../../content/forward';

// Parse Nav data li's to two constatants
interface navObj {
    logo: any;
    items: any;
    footer: any;
  }
const parseNav: navObj[] = [];
const iterate = (obj: any) => {    
    Object.keys(obj).forEach((key) => {
        parseNav.push(obj[key]);
    });
};

iterate(Navigation.nav_elements);

const logo = parseNav[0].logo;
const list = parseNav[1].items;
const footerContent = parseNav[2].footer[0]

export {
    logo,
    list,
    footerContent
}