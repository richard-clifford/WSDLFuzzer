var cliColors = require('colors');


function main() {
    var cliArgs = require('command-line-args');
    
    // available CLI args
    var cli = cliArgs([
        {name: 'verbose', alias: 'v', type: Boolean, defaultOption: false},
        {name: 'port', alias: 'P', type: Number, defaultOption: false},
        {name: 'timeout', alias: 't', type: Number, defaultOption: 0},
        {name: 'use-ssl', alias: 's', type: Boolean, defaultOption: false},
        {name: 'help', alias: 'h', type: Boolean, defaultOption: false}
    ]);
 	
 	// parse the given options
    commandLineOptions = cli.parse();
    
    var usage = cli.getUsage({
        title: 'Beacon Server',
        description: 'Beacon Communications Receiver',
        footer: ''
    });

    console.log(usage);
}