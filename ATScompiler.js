console.log("ATScript compiler. See more at http://atscript.net");
console.log("COPYRIGHT 2017 (c) ATScript Development Team");

var fs = require("fs");

if (process.argv.length == 4){
	var ats_script = fs.readFileSync(process.argv[2]);
	
	var at_parser = require("./lib/ATScript-parser.js");
	var at_generator = require("./lib/AT-generator.js");
	var ast = at_parser.parse(ats_script, false); 
	var at_code = at_generator.gen_code(ast, {}); 

	//console.log(at_code);
	
	fs.writeFile(process.argv[3], at_code,  function(err) {
	   if (err) {
		  return console.error(err);
	   }
	   
	   console.log("AT code written to output file.");
	});
} else {
	console.log("Usage: node ATScompiler.js inputfile.ats outputfile.at");
}