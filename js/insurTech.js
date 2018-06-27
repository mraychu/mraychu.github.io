var Web3 = require('web3');
// var web3 = new Web3();
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // web3 = new Web3(new Web3.providers.HttpProvider("http://abcdeo-dns-reg1.eastus.cloudapp.azure.com:8545"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];
var CoursetroContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "newFlight",
				"type": "string"
			}
		],
		"name": "setFlight",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newMoney",
				"type": "uint256"
			}
		],
		"name": "setMoney3",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getFlight",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newMoney",
				"type": "uint256"
			}
		],
		"name": "setMoney1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getMoney",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newName",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newMoney",
				"type": "uint256"
			}
		],
		"name": "setMoney2",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hour",
				"type": "uint256"
			}
		],
		"name": "delay",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);
var Coursetro = CoursetroContract.at('0xca35b7d915458ef540ade6068dfe2f44e8fa733c');
console.log(Coursetro);

$("#sub_btn").click(function() {
    Coursetro.setMoney1($("#amount1").val());
    console.log(Coursetro.getMoney());
});

$("#sub_btn").click(function() {
    Coursetro.setMoney2($("#amount2").val());
    alert(Coursetro.getMoney());
});

$("#sub_btn").click(function() {
    Coursetro.setMoney3($("#amount3").val());
    alert(Coursetro.getMoney());
});

		