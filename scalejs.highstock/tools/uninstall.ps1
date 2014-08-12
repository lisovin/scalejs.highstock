param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.highstock, highstock, lightTheme, darkTheme, EikosTheme' |
	Remove-Shims 'highstock, lightTheme, darkTheme, EikosTheme' |
	Remove-ScalejsExtension 'scalejs.highstock'