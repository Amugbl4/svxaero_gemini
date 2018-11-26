gemini.suite('body', function (suite) {
    suite
        .setUrl('/')
        .setCaptureElements('body')
        .capture('plain', function (actions) {
            actions.wait(3000);
            actions.executeJS(function (window) {
                window.scrollTo(0, 5377);
            })
        });
});
