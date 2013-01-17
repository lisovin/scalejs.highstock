param($installPath, $toolsPath, $package, $project)

$project | 
	Add-Paths "{
		'jQuery'			: 'Scripts/jQuery-1.9.0',
		'scalejs.highstock' : 'Scripts/scalejs.highstock-$($package.Version)',
		'highstock'			: 'Scripts/highstock.src',
		'knockout'			: 'Scripts/knockout-2.2.1',
		'knockout.mapping'	: 'Scripts/knockout.mapping-latest'
	}" |
	Add-Shims "{
		'jQuery'			: {
			exports : 'jQuery'
		},
		'highstock'			: {
			deps	: ['jQuery'],
			exports : 'Highcharts'
		}
	}" |
	Add-ScalejsExtension 'scalejs.highstock'
    
