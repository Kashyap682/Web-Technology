num = window.prompt("Enter Number:");
var result = 0;

while(num > 0)
{
    r = num%10;
    result = result*10 + r;
    num = Math.floor(num/10);
}

document.write(result);