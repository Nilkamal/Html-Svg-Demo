var fillColor;
var strokeColor;
var strokeWidth;

var queryStringValues = window.location.href.substring(window.location.href.indexOf('?')).replace('?','').split('&');

for(var i=0;i<queryStringValues.length;i++)
{
	debugger;
	if(queryStringValues[i].indexOf('fillcolor') > -1)
	{
		fillColor = queryStringValues[i].substring(queryStringValues[i].lastIndexOf('=')+1);
		fillColor = fillColor.replace('%23','#');
	}
	if(queryStringValues[i].indexOf('strokecolor') > -1)
	{
		strokeColor = queryStringValues[i].substring(queryStringValues[i].lastIndexOf('=')+1);
		strokeColor = strokeColor.replace('%23','#');
	}
	if(queryStringValues[i].indexOf('strokewidth') > -1)
	{
		strokeWidth = queryStringValues[i].substring(queryStringValues[i].lastIndexOf('=')+1);
	}
}
console.log('fill-color' + fillColor);
var circle = document.getElementById('circle');
circle.setAttribute('stroke', strokeColor);
circle.setAttribute('fill', fillColor);
circle.setAttribute('stroke-width', strokeWidth);
