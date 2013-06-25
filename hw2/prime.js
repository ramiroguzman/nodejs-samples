var fs = require('fs');
var outfile = 'primes.csv';
var primes = new Array();
var i = 3;
primes.push(2);  //2 is always prime
do
{
	var isPrime=true;
	for(var j = 0; j< primes.length && primes[j]*primes[j]<= i ; j++){
		if (i% primes[j]==0) {
			isPrime =false;
			break;
		}	
	}
	if(isPrime) {
		primes.push(i);
	}
	i++;
} while (primes.length<100);
fs.writeFileSync(outfile, primes);
