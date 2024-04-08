
## Description:

The "Contact List" project is a web application that allows users to store, view, edit, and delete their contacts. It's a simple but powerful tool for managing contacts, providing a convenient way to organize information about people you communicate with.

# Learning Experience:

During the development of this project, I gained valuable experience working with React.js and Redux, as well as using CSS modules for creating the user interface. Additionally, I acquired practical skills in utilizing various libraries and components, such as Material-UI, Formik, and react-icons. Each stage of development allowed me to deepen my knowledge of managing the application state, handling asynchronous operations, and working with Redux Toolkit. Using Axios facilitated efficient communication between the frontend and backend, enabling interaction with the database for retrieving, adding, editing, and deleting contacts.

# Features:

- User login and registration forms. These features allow users to log in if they already have an account or create a new account if their data is not present in the system.
- Functionality to refresh the user upon page reload.
- Convenient navigation throughout the application, allowing users to easily move between different pages. React Router library is used to dynamically change page content without reloading the page.
Highlighting of the current page in the navigation menu. (The navigation menu highlights the current page by applying a specific class and styles to the active link.)
- Usage of PrivateRoute and RestrictedRoute. This protects pages that should only be accessible to authorized users and redirects already authorized users from pages that should only be accessible to unauthorized users.
- Convenient navigation and certain pages are hidden depending on the user's authorization status.
- Lazy import prevents loading all application components at once until they are needed by the user. - This reduces the size of the JavaScript code and speeds up the initialization of the application.
- Adding new contacts with name and phone number.
- Viewing a list of all contacts with the ability to edit and delete them.
- Editing existing contacts with the ability to change the name and phone number. (Saving upon pressing the Enter key, exiting the contact editing mode upon pressing the Esc key)
Search for contacts by name as well as by phone number with automatic updating of search results.
- Deleting contacts with confirmation in a modal window.


## Опис:
Проект "Список Контактів" - це веб-додаток, який дозволяє користувачам зберігати, переглядати, редагувати та видаляти свої контакти. Це простий, але потужний інструмент для керування контактами, який дозволяє зручно організовувати інформацію про людей, з якими ви спілкуєтеся.

# Навчальний досвід:
Під час розробки цього проекту я отримала безцінний досвід у роботі з React.js та Redux, а також з використанням модулів CSS для створення користувацького інтерфейсу. Крім того, я отримала практичні навички у використанні різних бібліотек та компонентів, таких як Material-UI, Formik та react-icons. Кожен етап розробки дозволив мені поглибити свої знання у керуванні станом додатка, роботі з асинхронними операціями та роботі з Redux Toolkit.
Використання Axios дозволило забезпечити ефективну комунікацію між фронтендом та бекендом, забезпечуючи можливість взаємодії з базою даних для отримання, додавання, редагування та видалення контактів.


# Фічі:

- Форми логіну та реєстрації користувачів. Ці функції дозволяють користувачам ввійти до системи, якщо вони вже мають обліковий запис, або створити новий обліковий запис, якщо їхні дані відсутні в системі.
- Функціонал для оновлення користувача у випадку перезавантаження сторінки. 
- У цьому проекті додано зручну навігацію, щоб користувачі могли легко переміщатися між різними сторінками додатку. Для цього використано бібліотеку React Router, яка дозволяє динамічно змінювати вміст сторінок без перезавантаження сторінки. 
- Щоб користувачі знали, на якій сторінці вони знаходяться, поточна сторінка вдиділяється в меню навігації. (Підсвічування поточної сторінки реалізовано шляхом додавання класу та стилів для активного посилання в меню навігації.)
- Використано PrivateRoute та RestrictedRoute. Це  захищає сторінки, які можуть бути доступні тільки авторизованим користувачам, та напроти, направляє вже авторизованих користувачів зі сторінок, які мають бути доступні тільки неавторизованим користувачам. 
- Зручно реалізована навігація і певні сторінки приховуються залежно від вторизації користувача.
- Lazy import дозволяє не завантажувати одразу всі компоненти додатку до тих пір, поки вони не будуть потрібні користувачу. Це дозволяє зменшити обсяг вихідного JavaScript коду та прискорити ініціалізацію додатку.
- Додавання нових контактів з іменем та номером телефону.
- Перегляд списку всіх контактів з можливістю редагування та видалення.
- Редагування існуючих контактів з можливістю зміни імені та номера телефону. (Збереження при натисканні кнопки Enter, вихід з режиму редагування контакту при натисканні кнопки Esc)
- Пошук контактів за іменем, а також за номером телефону з автоматичним оновленням результатів пошуку.
- Видалення контактів з підтвердженням в модальному вікні.
