## Проект на оснве GitHub Api 

Данный проект позволяет искать репозитории по вхождению слова в название, фильтровать список репозитроиев по лицензии, список отсортирован по количеству звезд.
В проекте настроена серверная пагинация,
Есть лоадер отображающий процесс загрузки данных.

### Проект крутиться на github Pages
https://asershov.github.io/WorkWithGitApi/

### Полный код проекта можно посмотеть в ПР develop в master
https://github.com/ASErshov/WorkWithGitApi/pull/8

## Если вы решили запустить проект у себя на машинке 
Для установки необходимых зависимостей используйте 
### `yarn install`
Для запуска приложения в режиме разроботки
### `yarn start`

### Основные технологии

- TypeScript
- React
- Redux
- Redux-Saga
- Jest и Enzyme для тестов
- Запросы выполняются при помощи axios
- Для удобства работы со стейтом используется Redux Toolkit
- Асинхронное взаимодействие с сервером - [Sagas](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- Компоненты [MaterialUi](https://material-ui.com/ru/getting-started/usage/)

### Архитектура приложения

- так как нет статических элементов вроде картинок или svg, то отсутсвует папака assets но ее всегда можно добавить)
- все компоненты, которые предполагают переиспользование в дальнейшем, при масштабировании проекта, вынесены в папку components
- глобальные компоненты или же страницы приложения храняться в папке features, подкомпоненты использующиеся только для данного сегмента приложения в features/ComponentName/Сomponents соответсвенно
- для удобства масштабирования и работы с кодом используется подход ducks по этому в каждой папки внутри feature есть папка duck с не обходимыми файла для управления стейтом данной страницы
- общий стор формируется в папке store
