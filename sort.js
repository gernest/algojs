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
function selection(a){
    let size=a.length;
    for( let i=0;i<size;i++){
        let tmp=a[i]
        let min=i;
        for(j=i+1;j<size;j++){
            if(a[j]<a[min]){
                min=j
            }
        }
        a[i]=a[min]
        a[min]=tmp
    }
    return a;
}
function insertion(a){
    let size=a.length;
    for(let i=0;i<size;i++){
        let tmp=a[i];
        let location=i
        while(location>0&&a[location-1]>tmp){
            a[location]=a[location-1];
            location--
        }
        a[location]=tmp
    }
    return a;
}
module.exports.bubble=bubble;
module.exports.selection=selection;
module.exports.insertion=insertion;