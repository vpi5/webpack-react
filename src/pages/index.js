
const files = require.context('.', true, /\.js$/);

const pages = [];

files.keys().forEach(key => {

    let i = key.replace(/(\.\/|\.js)/g, '');

    if(i !== 'index'){

        let comp = files(key).default;

        let path = i.indexOf('/index') !== -1 ? i.split('/index')[0] : i;

        pages.push({
            path,
            comp
        });

    }

});

export default pages
