module.exports = {
    dbUrl: "mongodb://admin:admin@ds135537.mlab.com:35537/bees",
    jwtSecret: "secret",
    port: process.env.PORT || 3000,
    "db": {
        'database': 'rmrwambj',
        'username': 'rmrwambj',
        'password': 'TeRvzaAsYwKFAQcDSszThV6PLpwFZ3Ni',
        'host': 'elmer.db.elephantsql.com',
        'port': '5432',
        'dialect': 'postgres',
        'dialectOptions': {
            'timeout': 2000
        },
        'define': {
            'underscored': true,
            'freezeTableName': true,
            'timestamps': false
        },
        'pool': {
            'max': 5,
            'min': 0,
            'idle': 10000
        },
        'benchmark': true,
        'logging': false,
        'operatorAliases': false
    }
};