param($installPath, $toolsPath, $package, $project)

$project | 
	Add-Paths "{
		'scalejs.highstock' : 'Scripts/scalejs.highstock-$($package.Version)',
		'highstock'			: 'Scripts/highstock.src',
		'lightTheme'		: 'Scripts/highstockThemes/light',
		'darkTheme'			: 'Scripts/highstockThemes/dark',
        'EikosTheme'        : 'Scripts/highstockThemes/eikos'
	}" |
	Add-Shims "{
		'highstock'			: {
			deps	: ['jQuery'],
			exports : 'Highcharts'
		},
		'lightTheme'             : {
			deps	: ['highstock'],
			exports : 'lightTheme'
		},
		'darkTheme'             : {
			deps	: ['highstock'],
			exports : 'darkTheme'
		},
        'EikosTheme'            : {
            deps    : ['highstock'],
            exports : 'EikosTheme'
        }
	}" |
	Add-ScalejsExtension 'scalejs.highstock'
    
