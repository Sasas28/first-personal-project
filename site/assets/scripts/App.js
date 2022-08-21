import '../styles/style.css' //App js file will render the style onto index.html file.
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu()

if (module.hot) {
    module.hot.accept()
} //if true, hot module will be enable and will automatically render changes.