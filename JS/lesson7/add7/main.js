//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
//{

class User {
    constructor(id, name, username, email, street, suite, city, zipcode,
                lat, lng, phone, website, nameComp, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.addressInfo = {street : street, suite : suite, city : city, zipcode : zipcode, geo: {lat : lat, lng : lng}};
        this.phone = phone;
        this.website = website;
        this.companyInfo = {nameComp : nameComp, catchPhrase : catchPhrase, bs : bs};
    }
}



let users = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net','harness real-time e-markets');
console.log(users);
//    phone: '1-770-736-8031 x56442',
//    website: 'hildegard.org',
//    company: {
//    name: 'Romaguera-Crona',
//    catchPhrase: 'Multi-layered client-server neural-net',
//    bs: 'harness real-time e-markets'
//}
//}
//
//
//-  Створити функцію конструктор / клас  який описує об'єкт тегу
//Поля :
//    -назва тегу ()
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru
//
//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
//-select
//Приклад результуючого об'єкту
//{
//    titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//    attrs: [
//    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//    {/*some props and values*/},
//    {/*...*/},
//    {/*...*/},
//]
//
//}