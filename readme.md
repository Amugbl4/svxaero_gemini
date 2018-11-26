# Gemini starter

Пожелания и проблемы писать в [Issue Tracker](https://bitbucket.org/uplabteam/gemini/issues). 


## Что потребуется установить в систему

1. Java Development Kit (JDK) версии 8.
Страница загрузки - https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

2. Python версии 2.7.
Страница загрузки https://www.python.org/downloads/

3. Node.js версии не ниже 8.
Страница загрузки - https://nodejs.org/en/download/

4. `npm install --global gemini selenium-standalone`


## Пользователям Windows 

1. Установить .NET Framework 2 - https://www.microsoft.com/ru-ru/download/details.aspx?id=1639

2. После установки JDK и Python добавить их пути до директорий содержащих исполняемые файлы в переменную окружения PATH
(если это не сделано автоматически - при установке может быть опция выбора).

3. Установить Visual Studio Build Tools командой `npm install --global --production windows-build-tools `


Может возникнуть проблема с модулем `wd`, тогда потребуется его переустановка:

1. `npm uninstall wd`

2. `npm install -D wd`

*Также проблема с отображением изображений*, пока официально не решена (https://github.com/gemini-testing/html-reporter/issues/27).

Решается след. образом: файл `node_modules/html-reporter/lib/server-utils.js`

Строка 42:

```js
return urlJoin.apply(null, components.map(osPathToUrl));
```

Заменить на:
```js 
const urlJoin = (...args) =>
    args
        .map((value, index) => (index ? _.trim : _.trimEnd)(value, '/'))
        .join('/');
        
const osPathToUrl = (osPath) => osPath.replace(/\\/g, '/');

return urlJoin.apply(null, components.map(osPathToUrl));
```


## Конфигурация

В файле `.gemini.js` согласно [документации](https://gemini-testing.github.io/).


## Тест-кейсы

Писать в папке gemini.


## Тестирование без GUI

1. Запустить сервер selenium `npm run selenium:start`

2. Если у вас нет эталонных изображений, и вы готовы взять за эталон текущую вёрстку - `npm gemini:update` 
(оригинальная команда `gemini update`) 

3. В новом окне выполнить команду `npm test` (оригинальная команда `gemini test`). Запуск без эталонных изображений
вернет неуспешный результат тестирования.


## Запуск GUI

Выполните команду `npm start`.
После выполнения этой команды произойдут следующие действия:

- установит npm-модули
- установит драйверы selenium
- запустит сервер selenium
- откроет веб-страницу по адресу http://localhost:8000/

Последние 2 команды работаю параллельно.

Для остановки выполнить `Ctrl + C`


## Отчёты

После запуска тестирования создаются html-отчёты в папке `out/gemini-reports`


## Ссылки

- [Документация gemini](https://gemini-testing.github.io/)
- [Проект gemini](https://github.com/gemini-testing/gemini)
- [Проект gemini-gui](https://github.com/gemini-testing/gemini-gui)
- [Домашняя страница gemini](https://tech.yandex.ru/gemini/)
- [Видео: Доклад на OdessaJS](https://www.youtube.com/watch?v=k0RDoEBqeU8)
- [Видео: Я.Субботник по фронтенду](https://www.youtube.com/watch?v=lfashGLaPpg)
- [Статья: Как мы тестируем CSS-регрессии с Gemini. Доклад на BEMup в Яндексе](https://habrahabr.ru/company/yandex/blog/238323/)
- [Поддерживаемые устройства эмуляции Chrome](https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome/mobile_device_list.cc)


## Что нужно знать автору тестов?

- [Основы JavaScript](https://learn.javascript.ru/) - написание тест-кейсов
- [JSON](https://ru.wikipedia.org/wiki/JSON) - конфигурация gemini, package.json
- [Yaml](https://ru.wikipedia.org/wiki/YAML) - конфигурация gemini
- [Основы HTML](https://webref.ru/course/html-tutorial) - понимание того, как строится веб-страница
- [CSS-селекторы](https://learn.javascript.ru/css-selectors) - для тест-кейсов
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) - поможет составить селектор
- Документацию Gemini 😀
