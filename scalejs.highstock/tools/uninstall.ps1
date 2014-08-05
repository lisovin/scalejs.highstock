param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.highstock, highstock, lightTheme, darkTheme' |
	Remove-Shims 'highstock, lightTheme, darkTheme' |
	Remove-ScalejsExtension 'scalejs.highstock'