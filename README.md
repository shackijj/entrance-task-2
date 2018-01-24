Задание 3
======

Задание выполнено с использованием:
1. React т.к меня есть опыт работы с данной технологей.
2. Typescript т.к. это значительно упрощает разработку больших приложений и делает их более надежными.
3. Apollo т.к. на сайте https://www.howtographql.com/ скзано, что она легче в освоении для новчика чем Relay.

При выполнении задания я старался следовать методологии TDD т.к. считаю что качество продукта гораздо важнее,
чем скорость его создания.

На доработку задания до prod версии, с учетом мобильной верстки мне потребуется еще 1 - 2 недели.

В этой ветке находиться все, что я успел до 24 января. Параллельно буду вести разработку в ветке entrance-task-3-dev.

Сервер я перенес из репозитория первого задания для простоты разработки.

Запуск:

```
npm install && cd server && npm install
````

Запускаем в одном терминале сервер:
```
cd server
npm run reset-db
node index.js
```

В другом терминале клиент:
```
npm start
```
