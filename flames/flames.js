function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function flames(){

    var res=document.getElementById("result");
    var text = document.getElementById("text");
    var heart = document.getElementById("heart");
    var a=document.getElementById("yourName").value.toLowerCase();
    var b=document.getElementById("partnerName").value.toLowerCase();

    if(a!=""&&b!=""){

        for (i=0;i<a.length;i++){
            for(j=0;j<b.length;j++){       
                if(a[i]==b[j]){
                    a=replaceAt(a,i,'*');
                    b=replaceAt(b,j,'*');
                }
            }
        }

        var countLetters=0;

        for (i=0;i<a.length;i++){
            if(a[i]!='*'){
                countLetters++;
            }
        }
        for (i=0;i<b.length;i++){
            if(b[i]!='*'){
                countLetters++;
            }
        }

        if(countLetters > 1){

        var flames="FLAMES";
        c=0;
        l=1;

        for(i=0;flames.length!=1;i++) {

            if(l==countLetters)
            {
                if(c>=flames.length)
                {
                    c=0;
                }
                flames=replaceAt(flames,c,'');
                l=1;
            }  
            if(c>=flames.length)
            {
                c=0;
            }        
                l++;
                c++;
                
        }
        
        switch(flames){
                case 'F':
                flames="Friend";
                res.style.background = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),  url('../images/valentine/img1.jpg') center no-repeat";
                res.style.backgroundSize = "cover";
                break;
                case 'L':
                flames="Love Line";
                res.style.background = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),  url('../images/valentine/img2.jpg') center no-repeat";
                res.style.backgroundSize = "cover";
                break;
                case 'A':
                flames="Affection";
                res.style.background = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),  url('../images/valentine/img3.jpg') center no-repeat";
                res.style.backgroundSize = "cover";
                break;
                case 'M':
                flames="Marriage Partner";
                res.style.background = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),  url('../images/valentine/img4.jpg') center no-repeat";
                res.style.backgroundSize = "cover";
                break;
                case 'E':
                flames="Enemy";
                res.style.background = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),  url('../images/valentine/img5.jpg') center no-repeat";
                res.style.backgroundSize = "cover";
                break;
                case 'S':
                flames="Sibling";
                res.style.background = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),  url('../images/valentine/img6.jpg') center no-repeat";
                res.style.backgroundSize = "cover";
                break;
        }
            
        }

        if(countLetters==1){
            flames="Sibling";
        }
        if(countLetters==0){
            flames="Both are same names";
        }
        res.style.display = 'block';
        heart.style.display = 'block';
        res.innerHTML="<b style='color:lime; font-size:20px;'>"+document.getElementById("partnerName").value+"</b> is Your <b style='color:darkturquoise; font-size:20px;'>"+flames+"</b>";
    }else{
        res.style.display = 'block';
        res.innerHTML="Please Enter Name";
    }

    const lp = calculateLovePercentage(a,b);
    text.innerText = lp + "%";

}


function calculateLovePercentage(name1, name2) {
    name1 = name1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    name2 = name2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    var combinedName = name1 + name2;

    var score = 0;
    for (var i = 0; i < combinedName.length; i++) {
        var charValue = combinedName.charCodeAt(i) - 96;
        score += charValue;
    }

    var maxScore = 26 * combinedName.length; 
    var normalizedScore = score / maxScore;

    var lovePercentage = Math.round(normalizedScore * 100);

    return lovePercentage;
}
