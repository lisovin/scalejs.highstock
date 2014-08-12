define(function () {
	/**
	 * Eikos Partners theme for Highcharts JS
	 */

	var eikos = {
        loading: {
            style: {
                backgroundColor: 'rgb(37, 43, 52)',
                opacity: 1 
            },
            labelStyle: {
                color: '#FFFFFF'
            }
        },
        chart: {
            borderRadius: 0,
            backgroundColor: 'rgb(37, 43, 52)',
            plotBackgroundColor: 'rgb(37, 43, 52)',
            style: {
            	fontFamily: "'Segoe WP', 'Open Sans Light', Verdana, Arial, Helvetica, sans-serif"
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            borderRadius: 0
        },
        navigator: {
            series: {
                data: []
            },
            maskInside: true,
            maskFill: 'rgba(70, 130, 180, .3)'
        },
        scrollbar: {
            enabled: false
        },
        xAxis: {
			gridLineColor: '#707073',
			labels: {
				style: {
					color: '#E0E0E3'
				}
			},
			lineColor: '#707073',
			minorGridLineColor: '#505053',
			tickColor: '#707073',
			title: {
				style: {
					color: '#A0A0A3'

				}
			}
		},
		yAxis: {
			gridLineColor: '#707073',
			labels: {
				style: {
					color: '#E0E0E3'
				}
			},
			lineColor: '#707073',
			minorGridLineColor: '#505053',
			tickColor: '#707073',
			tickWidth: 1,
			title: {
				style: {
					color: '#A0A0A3'
				}
			}
		},
		legend: {
			enabled: true,
			itemStyle: {
				color: '#E0E0E3'
			},
			itemHoverStyle: {
				color: '#FFF'
			},
			itemHiddenStyle: {
				color: '#606063'
			}
		},
    };

	return eikos;
});
