// Реализовать функцию с тремя параметрами:
// function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения
// аргументов, operation — строка с названием операции.
// В зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch)

function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
        }
}
