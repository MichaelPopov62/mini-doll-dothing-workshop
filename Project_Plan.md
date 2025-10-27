# PROJECT_PLAN.md

## 1. Опис проєкту

Сайт м айстрині, яка виготовляє комплекти мініодягу для міні-ляльок. Користувачі можуть переглядати каталог виробів. Тільки авторизовані користувачі можуть робити замовлення або відправляти запит/повідомлення. Адмін може керувати товарами та замовленнями.

## 2. Ролі

* **Гість**: переглядає каталог і сторінки виробів.
* **Авторизований користувач**: може робити замовлення, ставити запитання, переглядати історію замовлень у кабінеті.
* **Адмін**: керує товарами, переглядає та змінює статуси замовлень і запитів.

## 3. Основні сторінки (Frontend)

*`/`  Головна (Landing)
* catalog` - Каталог виробів
* `/item/[id]` - Сторінка окремого виробу`/
* `/login` - Авторизація
* `/register`  Реєстрація
* `/dashboard` - Кабінет користувача (історія замовлень/запитів)
* `/admin` - Панель управління для адміна

## 4. Функціонал користувача

* Перегляд каталогу
* Перегляд картки виробу
* Авторизація / реєстрація
* Створення замовлення (тільки авторизовані)
* Перегляд історії замовлень

## 5. Функціонал адміна

* Додавання/редагування/видалення товарів
* Перегляд усіх замовлень
* Зміна статусу замовлення (`pending`, `in_progress`, `done`)

## 6. API Структура (REST Endpoints)

**Аутентифікація**

* `POST /auth/register`
* `POST /auth/login`

**Товари (Public)**

* `GET /products`
* `GET /products/:id`

**Замовлення (Тільки авторизований користувач)**

* `POST /orders`
* `GET /orders/my`

**Адмін (потрібна роль admin)**

* `POST /admin/products`
* `PUT /admin/products/:id`
* `DELETE /admin/products/:id`
* `GET /admin/orders`
* `PATCH /admin/orders/:id/status`

## 7. Моделі MongoDB (чернетка)

**User**

* email (String)
* password (String)
* name (String)
* role (`user` або `admin`)

**Product**

* name (String)
* description (String)
* price (Number)
* images (Array of String URLs)

**Order**

* userId (ObjectId -> User)
* productId (ObjectId -> Product)
* status (String: `pending`, `in_progress`, `done`)
* comment (String, optional)
* createdAt (Date)

## 8. Архітектура проєкту

```
/project
  /frontend (Next.js)
    /app or /pages
    /components
    /styles
  /backend (Node.js + Express)
    /routes
    /controllers
    /models
    /middlewares
```

## 9. Наступні дії

1. Ініціалізація фронтенду - Next.js + modul.css.
2. Створення каркасу сторінок (без логіки).
3. Створення backend структури з Express + MongoDB.
4. Авторизація (JWT).
5. Інтеграція API у фронтенд.
6. Додавання функціоналу замовлень.
7. Адмін-панель.
8. Деплой на Vercel (frontend) + Render (backend).

---

