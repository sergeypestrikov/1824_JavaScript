function result() {

var x, y, z;

x = document.getElementById('gradus').value;
x = parseInt(x);

y = x*1.8+32;

z = (x + "градусов это" + y + "по фаренгейту");

document.getElementById('out').innerHTML = z;

}