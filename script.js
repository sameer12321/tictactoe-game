function iswin(){
    let x1=document.getElementById('box-1').innerHTML;
    let x2=document.getElementById('box-2').innerHTML;
    let x3=document.getElementById('box-3').innerHTML;
    let x4=document.getElementById('box-4').innerHTML;
    let x5=document.getElementById('box-5').innerHTML;
    let x6=document.getElementById('box-6').innerHTML;
    let x7=document.getElementById('box-7').innerHTML;
    let x8=document.getElementById('box-8').innerHTML;
    let x9=document.getElementById('box-9').innerHTML;
    
    if(x1=="X" && x2=="X" && x3=="X")return x1;
    if(x1=="X" && x4=="X" && x7=="X")return x1;
    if(x1=="X" && x5=="X" && x9=="X")return x1;
    if(x2=="X" && x5=="X" && x8=="X")return x2;
    if(x3=="X" && x6=="X" && x9=="X")return x3;
    if(x3=="X" && x5=="X" && x7=="X")return x3;
    if(x7=="X" && x8=="X" && x9=="X")return x7;
    if(x4=="X" && x6=="X" && x5=="X")return x4;

    if(x1=="O" && x2=="O" && x3=="O")return x1;
    if(x1=="O" && x4=="O" && x7=="O")return x1;
    if(x1=="O" && x5=="O" && x9=="O")return x1;
    if(x2=="O" && x5=="O" && x8=="O")return x2;
    if(x3=="O" && x6=="O" && x9=="O")return x3;
    if(x3=="O" && x5=="O" && x7=="O")return x3;
    if(x7=="O" && x8=="O" && x9=="O")return x7;
    if(x4=="O" && x6=="O" && x5=="O")return x4;

    return "NO";
}
    let turn=0;
    // console.log(iswin());
        document.getElementById('box-1').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
                Animation
            }
        })
        document.getElementById('box-2').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })
        document.getElementById('box-3').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })
        document.getElementById('box-4').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })
        document.getElementById('box-5').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })
        document.getElementById('box-6').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })
        document.getElementById('box-7').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })
        document.getElementById('box-8').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })
        document.getElementById('box-9').addEventListener('click',function()
        {
            if(turn==0)
            {
                this.innerHTML='X';
                turn=1;
            }else
            {
                this.innerHTML='O';
                turn=0;
            }
            if(iswin()!="NO")
            {
                alert(iswin()+" is the winner");
            }
        })       
 