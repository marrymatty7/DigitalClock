function getClockString(repl1, repl2)
{
         var timeArray = new Array(), D = new Date(), str = "";
         var cArray = ["  1  ","  1  ","  0  ","  1  ","  1  "];
         timeArray[0] = ["11111","10001","10001","10001","11111"];
         timeArray[1] = ["0100","1100","0100","0100","0100"];
         timeArray[2] = ["11111","00001","11111","10000","11111"];
         timeArray[3] = ["11111","00001","11111","00001","11111"];
         timeArray[4] = ["01010","01010","01010","01111","01000"];
         timeArray[5] = ["11111","10000","11111","00001","11111"];
         timeArray[6] = ["11111","10000","11111","10001","11111"];
         timeArray[7] = ["11111","10001","10001","00001","00001"];
         timeArray[8] = ["11111","10001","11111","10001","11111"];
         timeArray[9] = ["11111","10001","11111","00001","00001"];
         
         for(k = 0;k < 9;k++)
         {
                for(u = 0;u < 5;u++)      
                   timeArray[k][u]  = timeArray[k][u].replace(/0/g, repl1).replace(/1/g, repl2);     
         } 
         
         for(y = 0;y<5;y++)   
            cArray[y] = cArray[y].replace(/0/g, repl1).replace(/1/g, repl2);   
       
         var Second = D.getSeconds(), Hour = D.getHours(), Minute = D.getMinutes();
         for(c = 0;c < 5;c++)
         {
                if(Hour < 10)
                   Hour = "0" + Hour.toString();
                if(Minute < 10)
                   Minute = "0" + Minute.toString();
                str += timeArray[Hour.toString()[0]][c] + ' ' + timeArray[Hour.toString()[1]][c] + cArray[c] + timeArray[Minute.toString()[0]][c] + ' ' + timeArray[Minute.toString()[1]][c] + "\n";
         }           
         return str;
}
