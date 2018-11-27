gemini.suite('how-to-get/to/bus', function (suite) {
    suite
        .setUrl('/how-to-get/to/bus')
        //.setCaptureElements('.i-close.i-close--w.js-cookies-message__close')
        .setCaptureElements('.i-close.i-close--w.js-alert-close')
        .before(function (actions, find) {
            // this.button = find('.i-close.i-close--w.js-cookies-message__close');
            this.button1 = find('.i-close.i-close--w.js-alert-close');
            // actions.click(this.button);
            actions.click(this.button1);
        })
        .setCaptureElements('.bx-core')
        .capture('.bx-core', function (actions) {
            actions.wait(3000);
            actions.executeJS(function (window) {
                window.scrollTo(0, 6000);
            })
        });
});
