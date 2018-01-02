import Handlebar from 'handlebar'
export default {
    register: (name, callback) => {
        Handlebars.registerHelper(name, callback);
    }
}