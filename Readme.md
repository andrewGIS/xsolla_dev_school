# xsolla_summer2021
   Тестовое задание к летней школе Xsolla Summer School Backend 2021

## Реализация.
   NodeJS(Express) и MongoDB через библиотеку Mongoose.

## Установка
1. Скачать и развернуть репозиторий.
2. Установить необходимые зависимости:
    `$ npm istall`
3. В терминале введите команду для запуска сервера:
    `$ npm run serve`

## Использование
### Модель товара:
   Товар определяется уникальным идентификатором(_id) и обязательно должен иметь SKU, имя, тип, стоимость.  
Пример:
  ```
  {
    "sku": "G11C22P5",
    "type": "game",
    "name": "Stalker 2",
    "price": "55"
  }
  ```
### Методы API для управления товарами(CRUD): 
  * #### Создание товара (CREATE)
    Для создания товара необходимо передать объект товара в формате JSON в теле запроса.
    - Тип запроса: POST
    - URL: `http://localhost:3000/api/products`  
    - В body запроса необходмио передать  создаваемый объект JSON:  
    ```
    {
      "sku": "G11C22P5",
      "type": "game",
      "name": "Stalker 2",
      "price": "55"
    }
    ```
    В ответ сервер вернет уникальный идентификатор товара
    
  * #### Получение товара по SKU или уникальному идентификатору или списка товаров (READ)  
    Для получения товара по SKU необходимо передать соответствующий get-параметр sku.
    - Тип запроса: GET
    - URL: `http://localhost:3000/api/products?sku=G11C21P5`  
    В ответ сервер вернет объект товара:
     ```
    {
      "_id": "60e6e30e0b3f9952357096f8",
      "sku": "G11C21P5",
      "type": "game",
      "name": "The Last of us",
      "price": 57,
      "__v": 0
    }
    ```
    Для получения товара по уникальному идентификатору необходимо передать сам уникальный идентификатор.
    - Тип запроса: GET
    - URL: `http://localhost:3000/api/products/60eed470aa7711da2e229137`  
    В ответ сервер вернет объект товара
  * #### Изменение товара по SKU или уникальному идентификатору (UPDATE)  
    Для изменения товара по SKU или уникальному идентификатор необходимо передать измененный объект товара в теле запроса.
    - Тип запроса: PUT
    - URL: `http://localhost:5000/api/products` 
    - В body запроса необходмио передать создаваемый объект JSON:  
     ```
    {
      "_id": "60e6e30e0b3f9952357096f8",
      "sku": "G11C25P5",
      "type": "game",
      "name": "The Last of us",
      "price": 55,
      "__v": 0
    }
    ```
    В ответ сервер вернет обновленный объект товара.
  * #### Удаление товара по SKU или уникальному идентификатору (DELETE)  
    Для удаления товара по SKU необходимо передать sku в строке запроса.
    - Тип запроса: DELETE
    - URL: `http://localhost:5000/api/products?sku=G5C3P5` 
    В ответ сервер вернет null.
    Для удаления товара по уникальному идентификатору необходимо передать уникальный идентификатор в строке запроса.
    - Тип запроса: DELETE
    - URL: `http://localhost:5000/api/products/60f006edcac6edea0962318e` 
    В ответ сервер вернет null.