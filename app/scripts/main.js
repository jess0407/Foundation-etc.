$(function () {

 $(document).foundation();
 $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [100, 100]
    });





/*    var data = [];
    var dates = [];

    $.get('../data/booths_may_2014.json').done(function(response){

        data = response.data;
        console.log(response.meta);
        var pluck = function (array, key) {
           return $.map( array, function (obj) {
                return obj[key];
            } );
        };

        dates = $.map(data, function(obj) {
            var mo = moment(obj.timestamp);
            var f = mo.format('D');
            return {moment: mo, formatted: f};
         });

        formattedDates = pluck(dates, 'formatted');

        conversionTrans = pluck(data, 'conversion_transactions');
        conversionSales = pluck(data, 'conversion_sales');
        basketAverage = pluck(data, 'basket_average');
        idedBasketAverage = pluck(data, 'identified_basket_average');
        unidedBasketAverage = pluck(data, 'non_identified_basket_average');
        idedSales = pluck(data, 'identified_sales');
        idedTransactions = pluck(data, 'identified_transactions');
        unidedSales = pluck(data, 'unidentified_sales');
        unidedTransactions = pluck(data, 'unidentified_transactions');
        totalSales = pluck(data, 'total_sales');
        totalTransactions = pluck(data, 'total_transactions');


        console.log(data[0]);

        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Sales conversions and transactions in '+ dates[0].moment.format('MMM YYYY')
            },
            xAxis: {
                categories: formattedDates
            },
            yAxis: {
                title: {
                    text: 'Percentage of conversion (%)'
                }
            },
             tooltip: {
                headerFormat: '<span style="font-size:10px"></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true

            },
            series: [
                {
                name: 'Transaction Conversion Rate',
                data: conversionTrans
                },
                {
                name: 'Sales Conversion Rate',
                data: conversionSales
                }]
        });

    });*/
});
