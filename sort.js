function bubble(a){
    for(let i=0;i<a.length;i++){
        let pass;
        for(let j=0;j<a.length-1;j++){
            if(a[j]>a[j+1]){
                let tmp=a[j];
                a[j]=a[j+1];
                a[j+1]=tmp
                pass=true
            }
        }
    }
    return a;
}
module.exports.bubble=bubble;