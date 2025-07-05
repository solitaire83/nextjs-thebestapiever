const CONFIG = {
    DOMAIN: "localhost",
    PORT: "3000",
    DB: "mongodb://tests:tests@address:port"
}

CONFIG.STORAGELINK = `http://${CONFIG.DOMAIN}:${CONFIG.PORT}/storage`;

export default CONFIG;