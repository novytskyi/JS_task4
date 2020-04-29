'use strict'

let money, time;

function start() {
//isNaN вернет true если значение не цифра
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
            q2 = +prompt("Во сколько обойдется?","");
//проверяем на строку(при prompt не обязательно), на отмену пользователем, чтобы не пусто, на длину
        if ( typeof(q1) === 'string' && typeof(q1) != null && typeof(q2) != null 
            && q1 != '' && q2 != '' && q1.length < 10) {
            appData.expenses[q1] = q2;
        } else {
            i--;
        }
    }
}
chooseExpences();

function choseOptExpences() {
    for (let i = 1; i < 4; i++) {
        let q3 = prompt("Статья необязательных расходов " + i + "?");
        if (q3 != null && q3 != "") {
            appData.optionalExpenses[i] = q3;
        } else {
            i--;
        }
    }
}
choseOptExpences();

function detectDayBudget() {
    //toFixed превращает число в строку
    appData.budgetPerDay = (appData.budget / 30).toFixed(2);
    alert("Your daily buget is " + appData.budgetPerDay + " EUR");
}
detectDayBudget();

function detectLevel() {
    if ( appData.budgetPerDay < 50 ) {
        console.log("Это минималка");
    } else if (appData.budgetPerDay > 50 && appData.budgetPerDay < 150 ) {
        console.log("Средний уровень достатка");
    } else if ( appData.budgetPerDay > 150 ) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?",""),
            percent = +prompt("Под какой процент?","");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome + " EUR");
    }    
}
checkSavings();

console.log(appData);