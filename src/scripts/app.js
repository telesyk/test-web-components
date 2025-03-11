import { HomePage } from './home-page.js'

const homePage = new HomePage()

document.getElementById('app').appendChild(homePage)
/*
 * There should be some router
 * that checks the url and render
 * proper page to the #app
 * switch(url) {
 *  case '/':
 *    HomPage;
 *  case '/about':
 *    AboutPage;
 *  default:
 *    ErrorPage;
 * }
 */
