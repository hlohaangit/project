function merge (arr, t){
    var nl=t;
    var nr=arr.length-k
    var l=[nl];
    var r= [nr];
    var i=0;
    var j=0;
    var k=0;
    for (i=0;i<nl;++i){
        l[i]=arr[i];
    }
    for (j=0;i<nr;++j){
        l[j]=arr[k+j];
    }
    i=0;
    j=0;
    k=0;

    while (i<nl&&j<nr){
        if (l[i]<r[j]){
            arr[k++]=l[i++];
        }
        else {
            arr[k++]=r[j++];
        }
    }

    while (j<nr){
        arr[k++]=r[j++];
    }
    while (i<nl){
        arr[k++]=l[i++];
    }
}

function mergeSort (arr,l,r) {

    if(l<r-1){
        var mid= (l+r)/2;
        mergeSort(arr,l,mid);
        mergeSort(arr,mid+1,r);

        merge(arr,mid)
    }


}

var arr=[2,6,4,8,7,1,34,56,87,54,23];
mergeSort(arr,0,arr.length-1);
console.log(arr);