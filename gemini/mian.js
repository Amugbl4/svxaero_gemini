gemini.suite('body', function (suite) {
    suite
        .setUrl('/sinara.frontend/dist/locomotive.html')
        .setCaptureElements('body')
        .capture('plain', function (actions) {
            actions.wait(3000);
            actions.executeJS(function (window) {
                window.scrollTo(0, 5377);
            })
        });
});
