gemini.suite('board-arr', function (suite) {
    suite
        .setUrl('/board/?type=arr')
        .before(function (actions, find) {
            //var buttonarr = find('.btn.btn--white')
            //console.log('кнопка поиска', !!buttonarr)
            //actions.mouseMove(buttonarr)
            //actions.click(buttonarr);
            actions.wait(3000);
            var button = find('.i-close.i-close--w.js-cookies-message__close');
            console.log('моя кнопка', !!button);
            if (button) {
                actions.click(button);
            }
        })
        .setCaptureElements('.bx-core')
        .capture('.bx-core', function (actions) {
            actions.executeJS(function (window) {
                window.scrollTo(0, 7000);
            })
        });
});