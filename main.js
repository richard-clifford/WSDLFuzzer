// Global Variables
var cliColors = require('colors');
var debugMode = false;
var commandLineOptions = [];


function _parseWSDL() {
    var soap = require('soap');

    soap.createClient(commandLineOptions.wsdl, function(err, client){

        if(err) {
            console.log(err.toString());
        }

        for(var i in client) {
            console.log(client.describe().GlobalWeather.GlobalWeatherSoap.GetWeather.input.CityName);
        }
    });

}

function fuzz() {
    var wsdl = _parseWSDL();
}

function main() {
    
    var cliArgs = require('command-line-args');
    
    // available CLI args
    var cli = cliArgs([
        {name: 'verbose', alias: 'v', type: Boolean, defaultOption: false},
        {name: 'wsdl', alias: 'u', type: String},
        {name: 'smart-test', alias: 'S', type: Boolean, defaultOption: false},
        {name: 'timeout', alias: 't', type: Number, defaultOption: 2000},
        {name: 'use-ssl', alias: 's', type: Boolean, defaultOption: false},
        // {name: 'port', alias: 'p', type: Number, defaultOption: 80},
        {name: 'help', alias: 'h', type: Boolean, defaultOption: false}
    ]);

    
    // parse the given options
    commandLineOptions = cli.parse();
    
    var usage = cli.getUsage({
        title: 'WSDLFuzzer',
        description: 'A WSDL Fuzzing tool written in NodeJS by Mantis and d0gpants - irc.darkscience.net:+6697 #treehouse',
        footer: 'Project home: [underline]{https://github.com/richard-clifford/WSDLFuzzer}'
    });
    
    if(commandLineOptions.hasOwnProperty('help') || 
        (!commandLineOptions.hasOwnProperty('wsdl'))) {

        console.log("  --wsdl/-u is required".bold.blue);
        console.log(usage);
    }

    var fuzzResults = fuzz();
}

main();
