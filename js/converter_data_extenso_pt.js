function dataconverter(){
    var dia = ['domingo', 'segunda-feira', 'reça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    var mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    var data = document.getElementById('data').value;
    var data1 = new Date(data);
    var data2 = dia[data1.getDay()] + ', ' + data1.getDate() + ' de ' + mes[data1.getMonth()] + ' de ' +data1.getFullYear();
    document.getElementById('data_extenso').value = data2;
} 