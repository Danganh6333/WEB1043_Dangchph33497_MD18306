const theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
// Xoá phần tử đầu tiên và phần tử cuối cùng của mảng
var x = theList.slice(1, -1);
console.log("Mảng sau khi xóa phần tử đầu tiên và cuối cùng là", x);
// Thêm 'FIRST' vào đầu mảng
const theList1 = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
var y = theList1.unshift('FIRST');
console.log("Mảng sau khi thêm 'FIRST' vào đầu mảng là", theList1);
// Thêm 'hello world' vào vị trí thứ 4 của mảng
const theList2 = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
var z = theList2.splice(4, 0, 'hello world');
console.log("Mảng sau khi thêm'hello world' vào vị trí thứ 4 của mảng", theList2);
// Thêm 'middle' vào vị trí thứ 3 của mảng
const theList3 = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
var xy = theList3.splice(3, 0, 'middle');
console.log("Mảng sau khi thêm 'middle' vào vị trí thứ 4 của mảng", theList3);
// Thêm 'LAST' vào cuối mảng
const theList4 = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
var xyz = theList4.push('LAST');
console.log("Mảng sau khi thêm 'LAST' vào đầu mảng là", theList4);