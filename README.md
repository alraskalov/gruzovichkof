# Грузовичкоф

Ссылка на проект: **[Грузовичкоф](https://)**

## 🧰 Системные требования

- Node.js 12.22.0 или новее
- Поддерживаются macOS, Windows (включая WSI) и Linux

## 👨🏻‍💻 Развертывание проекта

1. Локально клонировать репозиторий `git clone https://github.com/alraskalov/gruzovichkof.git`
2. `npm i` (установить пакеты)
3. `npm run dev` (запуск Next.js в режиме разработки)
4. `npm run build` (сборка проекта для развертывания)
5. `npm run start` (запуск производственного сервера Next.js)

## ↔️ Директории

- `./components` — папка с компонентами
- `./src` — папка с файлами, которые необходимы для совместной работы `Next.js` и `MUI`
- `./utils` — папка с константами
- `./pages` — корневая папка проекта

## 🧥 JSS MUI

Я использовал последнюю версию `MUI` для решения второй задачи.
Начиная с `5 версии`, `@mui/styles` — это устаревшее решение для `MUI`, поскольку он не совместим с `React.StrictMode` или `React 18` и больше не использует `JSS` в качестве решения для стилей по умолчанию.
Соответственно, я не смогу воспользоваться хуком `withStyles` или `makeStyles`.
Поэтому для выполнения задания, я воспользовался `styled()`, чтобы создать свой стилизованный компонент на основе тега `h1`.
