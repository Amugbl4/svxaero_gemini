gemini.suite('nav', function (suite) {
    suite
        .setUrl('/')
        .before(function (actions, find) {
            var menu = find('.hdr-link.hdr-link--nav.js-nav-btn')
            actions.wait(3000);
            actions.click(menu);   
            var button = find('.i-close.i-close--w.js-cookies-message__close');
            console.log('моя кнопка', !!button);
            if (button) {
                actions.click(button);
            }
        })
        .setCaptureElements('.nav')
        .capture('.nav', function (actions) {
            actions.executeJS(function (window) {
                window.scrollTo(0, 7000);
            })
        });
});