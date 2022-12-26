# [ZOOOV](https://zooov-skep.netlify.app/) | Pet Food Store

## 🐱‍💻 Tech stack
* HTML, CSS, SCSS
* JavaScript
* Gulp, Webpack
* BEM
* Swiper
* Animate On Scroll Library

# 📜 Template Description
## ⌨️ Commands
* ```npm i``` - скачать необходимые зависимости
* ```npm i --legacy-peer-deps``` - позволит продолжить установку при возникновении конфликтов зависимостей (версий пакетов)
* ```npm run dev``` - запуск сервера для разработки проекта
* ```npm run build``` - собрать проект с оптимизацией (без запуска сервера)
* ```npm run devbuild``` - собрать проект без создания webp картинок
* ```npm run deploy``` - собрать проект с оптимизацией и выгрузить результат на FTP. Конфигурация FTP находится в файле ```config/gulp-settings.js```
* ```npm run zip``` - запуск сборки проекта и создание zip архива с именем проекта (без запуска сервера)
* ```npm run sprite``` - запуск создания SVG спрайта. Для создания спрайтов изображения ```.svg``` должны находиться в папке ```src/svgicons```. Готовый спрайт появится в папке ```src/img/icons```. Изменения в папке ```src/svgicons``` не отслеживаются в dev режиме, при необходимости нужно запустить повторную сборку спрайта

## 📂 Files
* ```index.html``` - главная страница сайта
* ```html/*.htm``` - подключаемые части
* ```js/app.js``` - основной файл скриптов. Служит для подключения необходимого в проекте функционала и прочих настроек
* ```scss/style.scss``` - основной файл стилей. Содержит различные настройки и подключения других файлов

## 📌 Additional Info
### Используются псевдонимы путей к папкам
```@img``` = ```src/img```  
```@scss``` = ```src/scss```  
```@js``` = ```src/js```  

Плагин для VS Code - [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)  
Нажать в редакторе F1 -> открыть настройки Settings (JSON) -> добавить следующий код:
```json
"path-autocomplete.pathMappings": {
    "@img": "${folder}/src/img",
    "@scss": "${folder}/src/scss",
    "@js": "${folder}/src/js",
}
```

### При возникновении ошибок убедитесь, что:
* у вас установлен [Node.js](https://nodejs.org/en/) последней версии
* терминал открыт с правами администратора
* путь к проекту не содержит символов ```#``` или ```!```
* папки и файлы должны быть названы латиницей без пробелов
* тег ```img``` и его содержимое должны быть записаны в одну строку без переносов
* в атрибуте ```src``` должен быть указан путь к существующей картинке

### Прочие проблемы и их решения
* ошибка "unable to resolve dependency tree"
```
npm i --legacy-peer-deps
```
* ошибка node-sass
```
npm rebuild node-sass
// или
npm install sass gulp-sass --save-dev
```
* ошибка python
```
npm install --global windows-build-tools
```