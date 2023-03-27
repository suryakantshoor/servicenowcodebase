function onSubmit() {
    //Type appropriate comment here, and begin script below
    var price = g_form.getValue('price');
    var currency = g_form.getValue('currency');
    var ga = new GlideAjax('CurrencyUtils'); //Scriptinclude/
    ga.addParam('sysparm_name', 'convertValue'); //Method
    ga.addParam('price', price); //Parameters
    ga.addParam('currency', currency);
    ga.getXMLAnswer(getResponse);

    function getResponse(response) {
        var res = JSON.parse(response);
        g_form.setValue('price', res);
        g_form.addInfoMessage(res);
    }

}
 
//[link to the script include](https://github.com/suryakantshoor/servicenowpdi/blob/2fc59e7a76b8199cec929286e359a13db2ae68a3/Client%20Scripts/currencyConversion.js)

