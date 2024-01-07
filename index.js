var arr=['green','red','yellow','blue'];
var started=false;
var ans=[];
var level=0;
var idx=0;
$(document).on("keypress",function(){
    if(!started){
        started=true;
        level=0;
        nextSequence();
    }
});
function nextSequence(){
    idx=0;
    var randomNo=Math.floor(Math.random()*4);
    var randomButton=arr[randomNo];
    ans.push(randomNo);
    showPressingEffect(randomButton);
    produceSound(randomButton);
    $("h1").text("Level "+(++level));
}
function showPressingEffect(buttonPressed){
    $("#"+buttonPressed).fadeIn(100).fadeOut(100).fadeIn(100);
}
function produceSound(buttonPressed){
    var audio=new Audio('./sounds/'+buttonPressed+'.mp3');
    audio.play();
}
$("button").on("click",function(event){
    // var buttonPressed=event.target.id;
    var buttonPressed=$(this).attr("id");
    // showPressingEffect(buttonPressed);
    showAnimationEffect(buttonPressed);
    produceSound(buttonPressed);
    check(buttonPressed);
});
function showAnimationEffect(buttonPressed){
    $("#"+buttonPressed).addClass("pressed");
    setTimeout(function(){
        $("#"+buttonPressed).removeClass("pressed");
    },100);
}
function check(buttonPressed){
    if(buttonPressed===arr[ans[idx]]){
        idx++;
        if(idx===ans.length){
            setTimeout(nextSequence,1000);
        }
    }
    else{
        started=false;
        ans=[];
        $("h1").text("Game Over, Press Any Key to Restart");
        produceSound("wrong");
        gameOverBackground();
    }
}
function gameOverBackground(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
}