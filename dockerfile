# Выбор базового образа
FROM node:16-alpine

# Установка рабочего каталога в контейнере
WORKDIR /app

COPY . .
# Копирование файлов проекта
COPY package.json package-lock.json ./

# Установка зависимостей
RUN npm install



# Сборка приложения, если необходимо (например для production сборки)
RUN npm run build

# Запуск приложения
CMD ["npm", "start"]

# Объявление порта на котором работает приложение
EXPOSE 3000
