const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
	{
		serverUrl: 'http://localhost:9000',
		options: {
			'sonar.sources': '.',
			'sonar.tests': '.',
			'sonar.inclusions': '**', // Entry point of your code
			'sonar.coverage.exclusions': '**/sonar-project.js',
			'sonar.test.inclusions': '**/*.spec.js,**/*.spec.jsx,**/*.test.js,**/*.test.jsx',
			'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
			'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml',
		},
	},
	() => {}
);
