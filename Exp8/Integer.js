n = window.prompt("Enter no. of digits:");
var i = '';
while(n>0)
{
    num = window.prompt("Enter the digit:")
    i = i + num;
    n = n - 1;
}
document.write(i);