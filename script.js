function Temperature(celcius) {
    this.celcius = celcius;
    this.getFahrenheit = function () {
        return (9 * this.celcius)/ 5 + 32;
    }
    this.getKenlvin = function () {
        return this.celcius + 273;
    }
}
var celcius = new Temperature(25);
document.write('F:' + celcius.getFahrenheit() + '<br/>');
document.write('K: ' + celcius.getKenlvin());