window.onload=function(){
    getIt();
}

/*this is controller*/

function sel(control,actor){
    for(var i=0;i<control.length;i++){
        control[i].idx=i
        control[i].onclick=function(){
            for(var j=0;j<actor.length;j++){
                control[j].className='';
                actor[j].className='';
            }
            this.className='select-active';
            actor[this.idx].className='content-active';
        }
    }
}

function getIt(){
    var in1=document.getElementById('select01').getElementsByTagName('li');
    var con1=document.getElementById('content01').getElementsByTagName('li');
    sel(in1,con1);
    var in2=document.getElementById('select02').getElementsByTagName('li');
    var con2=document.getElementById('content02').getElementsByTagName('li');
    sel(in2,con2);
}