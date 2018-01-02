class MainApp {
    initialize() {
        return new Promise(async (resolve, reject) => {
            try {
                const req = indexedDB.open("exampledb", 1);
                req.onsuccess = event => {
                    this.db = event.target.result;
                    resolve(this);
                }
                req.onfailed = reject;
                req.onupgradeneeded = this.onUpgrade;
            } catch (e) {
                reject(e);
            }
        });
    }

    onUpgrade(event) {
        const db = event.target.result;

        // create
        if (event.oldVersion == 0) {
            const exampleStore = db.createObjectStore("example", { keyPath: "key" });
            console.log("Created")
        }
        // upgrade
        else {
            // upgrade processing ...
        }
    }

    addData(key, value) {
        return new Promise((resolve, reject) => {
            try {
                const tran = this.db.transaction("example", "readwrite");
                const exampleStore = tran.objectStore("example");
                exampleStore.put({key: key, value: value});
                console.log(`Added key: ${key}, value: ${value}`);
                tran.onerror = reject;
                tran.oncomplete = resolve;
            } catch (e) {
                reject(e);
            }
        })
    }

    getData(key) {
        return new Promise((resolve, reject) => {
            try {
                const tran = this.db.transaction("example", "readonly");
                const exampleStore = tran.objectStore("example");
                const req = exampleStore.get(key);
                req.onerror = reject;
                req.onsuccess = () => {
                    resolve(req.result);
                }
            } catch (e) {
                reject(e);
            }
        })
    }

    clean() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.deleteDatabase("exampledb");
            console.log("Cleaned")
            req.onerror = reject;
            req.onsuccess = resolve;
        });
    }
}

export default new MainApp()
