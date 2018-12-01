module.exports = {
    rootUrl: 'http://svx.aero/',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    sessionsPerBrowser: 5,
    sets:
    {
        all: { files: ['gemini'] },
        board: { files: ['gemini/feedback.js'] }
    },
    browsers:
    {
        ChromeFullHD:
        {
            windowSize: '1920x1080',
            desiredCapabilities:
            {
                browserName: 'chrome',
                resolution: '1920x1080',
                acceptSslCerts: true
            }
        }
    },
    system:
    {
        plugins:
        {
            'html-reporter/gemini': { enabled: true, path: 'gemini-reports', defaultView: 'all' },
            'json-reporter/gemini': { enabled: true, path: 'reports/report.json' }
        }
    },
    compositeImage: true
};