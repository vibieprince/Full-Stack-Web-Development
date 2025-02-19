for(let i=1;i<10;i++)
    console.log("Prince")

for(let i=1;i<6;i++)
    console.log(i)

for(let i=10;i>0;i--)
    console.log(i)

for(let i=1;i<6;i++)
    if(i==4)
        break
    else
        console.log(i)

for(let i=1;i<6;i++)
    if(i==4)
        continue
    else
       console.log(i)
// for(;;)
//     console.log(5) // infinite loop

let i = 1
// while(i<11){
//     console.log(i)
//     i++
// }

while(i<5){
    console.log("Inside the while loop")
    if(i==3){
        i++
        continue
    }
    else
        console.log(i)
    i++
}
i = 1
do{
    console.log(i)
    i++
}while(i<4)