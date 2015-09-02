var soap = require('soap');
var cliArgs = require('command-line-args');

var commandLineOptions = [];

function main() {
	
	// available CLI args
	var cli = cliArgs([
		{name: 'verbose', alias: 'v', type: Boolean, defaultOption: false},
		{name: 'wsdl', alias: 'w', type: String},
		{name: 'smart-test', alias: 'S', type: Boolean, defaultOption: false},
		{name: 'timeout', alias: 't', type: Number, defaultOption: 2000},
		{name: 'use-ssl', alias: 's', type: Boolean, defaultOption: false},
		{name: 'port', alias: 'p', type: Number, defaultOption: 80},
		{name: 'help', alias: 'h', type: Boolean, defaultOption: false}
	]);

	var usage = cli.getUsage({
		title: 'WSDLFuzzer',
		description: 'A WSDL Fuzzing tool written in NodeJS by Mantis and d0gpants - irc.darkscience.net:+6697 #treehouse',
		footer: 'Project home: [underline]{https://github.com/richard-clifford/WSDLFuzzer}'
	});

	// parse the given options
	commandLineOptions = cli.parse();
	
	if(commandLineOptions.hasOwnProperty('help')) {
		console.log(usage);
	}
}

main();
