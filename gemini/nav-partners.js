gemini.suite('nav-partners', function (suite) {
    suite
        .setUrl('/')
        .before(function (actions, find) {
            var menu = find('.hdr-link.hdr-link--nav.js-nav-btn');
            actions.wait(3000);
            actions.click(menu);
            var partner = find('.hdr-link.hdr-link-tab.js-tab__btn.hdr-link--b');
            actions.wait(3000);
            actions.click(partner);
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