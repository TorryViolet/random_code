/*jshint esversion: 6 */
var webdriver = require('selenium-webdriver'); 
var By = webdriver.By;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
var a = ['Андрей', 'Сергей', 'Максим', 'Анатолий', 'Дмитрий'];
var b = ['Глухарев', 'Дудцов', 'Пекарев', 'Смирнов', 'Тютчев'];

describe('Генерация данных пассажиров', () => {
        driver.get('http://kurufin.ru/html/Name_generator/random_name_rus.html');
        driver.findElement(By.xpath("//input[@name='generate']")).click();
        var l = driver.findElement(By.xpath("//input[@name='first']")).getText();
        var k = driver.findElement(By.xpath("//input[@name='last']")).getText();

    it('Рандомим пассажира', () => {
        a[a.length] = l;
        b[b.length] = k;
            var rand = Math.floor(Math.random()* a.length);
            var rand2 = Math.floor(Math.random()* b.length);
        console.log(a[rand]);
        console.log(b[rand2]);
    });   
});