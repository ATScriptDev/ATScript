# ATScript 

http://ATScript.net

## ATScript is programming language similar to JavaScript for BURST AT (Automated Transactions aka Smart Contracts)

Here is sample parrot ATScript contract:

```javascript
//Parrot ATScript - AT/SmartContract that sends back all transfered funds with message: Hello. This is echo message: <MESSAGE IN SENDING TRANSACTION>

var txid = 0;

AT.loop(function () {
	//AT.getNextTx will return first tx after AT transaction 
	txid = AT.getNextTx(txid);
	
	while (txid) {
		if (AT.getTxTarget(txid) == AT.getAddress()){
			//send money back with parrot message
			AT.transfer(AT.getTxAmount(txid), AT.getTxSource(txid), 'Hello. This is echo message: ' + AT.getTxMessage(txid));
		}
	}
});
```

See sample/ directory to find draft of other example Smart Contracts written in ATScript

More info about Automated Contracts (written without ATScript) can be found at http://ciyam.org/at/

As part of this Project ATScript compiler will be created. It will let you compile ATScript into AT Byte Code that can be used in BURST ecosystem. 

ATScript language will be created with well defined API and documentation. ATScript compiler will be created for multiple target platform (including Linux and Windows). 

Now it is really hard to analyze what AT, that you are interacting with, is doing because you need to know how to read AT byte code. See sample crowdfunding AT written
without ATScript: http://ciyam.org/at/at_crowdfund.html
 
ATScript.net will have online compiler and verifier so you will be able to paste ATScript and AT address you would like to examine. Based on that ATScript.net will 
compile provided script and verify if its machine code is the same as code of AT deployed on blockchain so you will be sure that it works as you expected.

Project is planned to be finished in 12 month from work start. 

PROJECT IS IN DEVELOPMENT NOW AND SOURCE CODE IS NOT YET COMPLETED!

Crowdfunding for that project: BURST-WCGB-F4SG-VKLG-GV3C4

You can also donate: BURST-FAB6-RXH7-CHA3-FWUVH

You can contact us: dev@atscript.net