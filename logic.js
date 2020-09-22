console.log('JS connected')
$('h1').on('click', function(){
    console.log('jquery')
})
var settings = {
	// "async": true,
	// "crossDomain": true,
	"url": "https://aztro.sameerkumar.website?sign=libra&day=today",
	"method": "POST",
	// "headers": {
	// 	"x-rapidapi-host": "horoscopeapi-horoscope-v1.p.rapidapi.com",
	// 	"x-rapidapi-key": "Va6SMkwDMJmshZRuIamVHuWMrpuup1PDmMIjsnChLXFJ2p90SV"
	// }
}

$.ajax(settings).done(function (response) {
	console.log(response);
});