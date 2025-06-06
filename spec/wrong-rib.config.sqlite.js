/* eslint-disable quotes */
module.exports = {
    "outDir": "./spec/.tmp/sqlite",
    "parsers": [
        "@themost/rib#SnakeCaseNameConverter",
        "@themost/rib#SingularNameConverter",
        "@themost/rib#StartCaseNameConverter",
        "@themost/rib#IdConverter"
    ],
    "rootNamespace": "https://themost.io/schemas",
    "exclude": [
        "migrations"
    ],
    "adapterTypes": [
        {
            "invariantName": "sqlite",
            "type": "@themost/sqlite1"
        }
    ],
    "adapters": [
        {
            "name": "source",
            "invariantName": "sqlite",
            "default": true,
            "options": {
                "database": "./spec/.tmp/db/Chinook_Sqlite.sqlite"
            }
        }
    ]
}