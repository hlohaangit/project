module.exports={
   
   
    binarySearch(arr,x){
        for (i=0;i<arr.length;++i){
            if (arr[i]==x)return i;
        }
        else {
            return 'not found';
        }
    },

    binarySearchSorted(arr,x){
        var start=0;
        var end =arr.length-1;
        while (start <= end){
            var mid = (star+end)/2;
            if (x==arr[mid]) return mid;
            else if (x<A[mid]){
                end=mid-1
            }
            else {
                start=mid+1;
            }

        }
        return "element not found"
    },


    insertionSort(arr){
        var key;
        var j;
        for (i=0;n<arr.length;++i){
            key=arr[i];
            j=i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1]=arr[j];
                j=j-1;
            }
            arr[j+1]=key;
        }
    },

    bubbleSort(arr){
        var n=arr.length;
        for (i=0;i<n-1;++i){
            for (j=0;j<n-i-1;++j){
                if (arr[j]>arr[j+1]) this.swap(arr,j,j+1);
            }
        }
    },

    swap(arr,x,y){
        int t=arr[y];
        arr[y]=arr[x];
        arr[x]=t;     
    },

    selectionSort(arr){
        for(i=0;i<arr.length-1;++i){
            var min =i;
            for (j=i+1;j<n;j++){
                if (arr[j]<arr[min]){
                    min = j;
                    swap(arr,min,i)
                }
            }
        }
    },

    merge (arr, t){
        var nl=t;
        var nr=arr.length-k
        var l[nl];
        var r[nr];
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
        k=o;

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




}