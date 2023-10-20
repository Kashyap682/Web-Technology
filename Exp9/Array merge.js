arr1 = [1,2,3];
arr2 = [3,4,5];
arr = arr1.concat(arr2);
marr = [...new Set(arr)];

document.write(marr)