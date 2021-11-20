var fs = require('fs');
function read_input()
{
    var array = fs.readFileSync('dictionar.txt').toString().split("\n");
    return array;
}
function check_input()
{
    var array = fs.readFileSync('dummy.txt').toString().split("\n");
    var dictionar = read_input();
    var res = new Array();
    for(i in dictionar)
    {           
        if(array.includes(dictionar[i].toLowerCase()))
            res.push(dictionar[i]);
    }
    return res;
}
function main()
{
    var res = new Array();
    res = check_input();
}
main()