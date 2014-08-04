﻿/*global define,console*/
define([
    'scalejs!core',
    'knockout',
    'highstock'
], function (
    core,
    ko,
    highstock
) {
    'use strict';

    // aliases
    var unwrap = ko.utils.unwrapObservable,
        isObservable = ko.isObservable,
        //compare = ko.utils.compareArrays,
        arrayMap = ko.utils.arrayMap,
        forEach = ko.utils.arrayForEach,
        merge = core.object.merge,
        arrayCopy = core.array.copy;

    function updatePoints(oldPointsLength, newPoints, chartSeries) {
        // assume there's no deletes, points can only be added to the end of series
        var newPointsLength = newPoints.length,
            points = newPoints.slice(oldPointsLength, newPoints.length);
        forEach(points, function (p) {
            chartSeries.addPoint(p, true, true);
        });
        //chartSeries.redraw();
        return newPointsLength;
    }

    function subscribeToSeries(s, chartSeries) {
        var pointsLength = unwrap(s.observableData).length;

        s.subscription = s.observableData.subscribe(function (newPoints) {
            pointsLength = updatePoints(pointsLength, newPoints, chartSeries);
        });

        return s.subscription;
    }

    function makeSerie(s) {
        return merge(s, {
            id: s.id || s.name || new Date().getTime(),
            observableData: isObservable(s.data) ? s.data : undefined,
            data: arrayCopy(unwrap(s.data))
        });
    }

    function createOptions(options, element) {
        var series = arrayMap(unwrap(options.series), makeSerie);

        return merge(options, {
            chart: {
                renderTo: element
            },
            series: series
        });
    }

    function subscribeSeries(series, chart) {
        var disposables = [];

        forEach(series, function (s) {
            var chartSeries = chart.get(s.id);

            if (s.observableData) {
                disposables.push(subscribeToSeries(s, chartSeries));
            }
        });

        return disposables;
    }

    function createChart(options, element) {
        var series,
            chart,
            subs;

        options = createOptions(options, element);
        series = options.series;
        chart = new highstock.StockChart(options);
        subs = subscribeSeries(series, chart);

        return {
            dispose: function () {
                forEach(subs, function (s) {
                    s.dispose();
                });

                chart.destroy();
            },
            chart: chart //reference to chart
        };
    }
    /*jslint unparam: true*/
    function init(
        element,
        valueAccessor,
        allBindingsAccessor
    ) {
        var b = allBindingsAccessor(),
            disposable = createChart(b.highstock, element);

        //attach chart reference to valueAccessor
        if (valueAccessor.chart && ko.isObservable(valueAccessor.chart)) {
            valueAccessor.chart(disposable.chart);
        }

        if (isObservable(b.highstock.series)) {
            b.highstock.series.subscribe(function (newSeries) {
                disposable.dispose();
                disposable = createChart(merge(b.highstock, { series: newSeries }), element);
            });
        }

    }
    /*jslint unparam: false*/

    return {
        init : init
    };
});

