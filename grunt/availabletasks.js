'use strict';
module.exports = {
    tasks: {
        options: {
            groups: {
                "For non developers": [
                    'open-browser'
                ],
                "For developers": [
                    'dev',
                    'prod',
                    'analyze',
                    'deploy-github'
                ]
            },
            showTasks: ['user']
        }
    }
};