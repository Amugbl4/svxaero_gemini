gemini.suite('feedback', function (suite) {
    suite
        .setUrl('/feedback')
        .before(function (actions, find) {
            //actions.sendFile(input[type=file], 'gemini-aero/1.png')
            var button = find('.i-close.i-close--w.js-cookies-message__close');
            console.log('моя кнопка', button)
            if (button) {
                actions.click(button);
            }
        })
        .setCaptureElements('.bx-core')
        .ignoreElements('.box-captcha')
        .capture('.bx-core', function (actions) {
            actions.wait(3000);
            actions.executeJS(function (window) {
                window.scrollTo(0, 6000);
            })
        });
});
