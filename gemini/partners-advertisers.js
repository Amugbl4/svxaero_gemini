gemini.suite('partners/advertisers', function (suite) {
    suite
        .setUrl('/partners/advertisers/')
        .before(function (actions, find) {
            var button = find('.i-close.i-close--w.js-cookies-message__close');
            console.log('моя кнопка', !!button)
            if (button) {
                actions.click(button);
            }
        })
        .setCaptureElements('.bx-core')
        .capture('.bx-core', function (actions) {
            actions.wait(3000);
            actions.executeJS(function (window) {
                window.scrollTo(0, 7000);
            })
        });
});