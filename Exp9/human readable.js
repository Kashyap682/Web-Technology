var n;
n = window.prompt('Enter a number:');

if (n==1){
    document.write(n + 'st');
}
else if (n==2){
    document.write(n + 'nd');
}
else if (n==3){
    document.write(n + 'rd');
}
else{
    document.write(n + 'th');
}