const rssobj = require('./config/rss').rssobj;
const rsshub = require('rsshub');
const path = require('path');
const fs = require('fs');

rsshub.init();

var handlerXml = async (vcfg) => {
    const data = await rsshub.request(`/bilibili/user/dynamic/${vcfg.uid}`);
    fs.writeFileSync(path.resolve(__dirname, './json', `${vcfg.uid}.json`), JSON.stringify(data), (err) => {
        if (err) {
            throw err;
        }
    });
}

rssobj.map((v, k) => {
    handlerXml(v);
})