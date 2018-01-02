import 'babel-polyfill'

import MainApp from 'example/MainApp.js'

function aaa() {
    return new Promise(async (resolve, reject) => {
        try {
            await MainApp.clean();
            await MainApp.initialize();
            await MainApp.addData("key1", "value1");
            const data = await MainApp.getData("key1");
            console.log(`Get key: ${data.key}, value: ${data.value}`);

            resolve();
        } catch (e) {
            reject(e);
        }
    })
};

aaa().then(() => {
    console.log("Successful");
})
.catch((e) => {
    console.error("Error", e);
})
