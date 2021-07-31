
function mod_inv(a,b)
{
    var x,i;
    for(i=1;i<b;i++)
    {
        if((a*i)%b ==1)
        {x=i;
        break;}
    }
    return x;
}



function eq()
{  
    var a,b,c,x,y;
a= Number(document.equation.a.value);
b= Number(document.equation.b.value);
c= Number(document.equation.c.value);

    if(a>0 && b>0)
    {
    x=(c*mod_inv(a,b))%b;
    y=(c-(a*(x)))/b;
    }
    else if(a>0 && b<0)
    {
        var B=-b,Y;
        x=(c*mod_inv(a,B))%B;
        Y=(c-(a*(x)))/b;
        y= Y;
    }
    else if(a<0 && b>0)
    {
        var A=-a,X;
        X=(c*mod_inv(A,b))%b;
        x=-X;
        y=(c-(a*(x)))/b;
    }
    else if(a<0 && b<0)
    {
        var A1=-a,B1=-b,C1=-c;
        x=(C1*mod_inv(A1,B1))%B1;
        y=(C1-(A1*(x)))/B1;
    }
    
    document.equation.solv1.value=x;
    document.equation.solv2.value=y;

    
}


