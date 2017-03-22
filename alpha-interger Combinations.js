/**
 * Created by pratheesh.pm on 22/03/17.
 */


var alpha = " abcdefghijklmnopqrstuvwxyz";
var s = [];
var i = 0;

function convert(number, index, n) {
    if(index === n){
        console.log(s.toString().replace(/,/g,""));
        return;
    }
    var numFormed = Number(number[index]);
    if(numFormed > 0){
        s[i] = alpha[numFormed];

        i+=1;

        s[i]=' ';
        console.log("before calling recursive s->",s.toString().replace(/,/g,"")," ,numformed->",numFormed," ,index-->",index,"  i->",i);

        convert(number,index+1,n);
        i-=1;
        if(n-index > 1){
            numFormed = Number(number[index])*10 + Number(number[index+1]);
            if(numFormed<27){
                s[i++] = alpha[numFormed];
                s[i] = ' ';
                console.log("\n\n\nbefore calling recursive s->",s.toString().replace(/,/g,"")," ,numformed->",numFormed," ,index-->",index,"  i->",i);

                convert(number,index+2,n);
                i--;
            }
        }
    }
}


convert('1123',0,4);