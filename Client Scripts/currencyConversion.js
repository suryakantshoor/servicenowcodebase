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
                             
