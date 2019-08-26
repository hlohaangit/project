module.exports={
   
   
    binarySearch(arr,x){
        for (i=0;i<arr.length;++i){
            if (arr[i]==x)return i;
        
            else {
                return "not found"
            }
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
        var t=arr[y];
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

    merge(leftArr, rightArr) {
        var sortedArr = [];
          while (leftArr.length && rightArr.length) {
                if (leftArr[0] <= rightArr[0]) {  
                    sortedArr.push(leftArr[0]);
                    leftArr = leftArr.slice(1)
                } 
                else { 
                    sortedArr.push(rightArr[0]);
                    rightArr = rightArr.slice(1) 
                }
            }  
            while (leftArr.length)
                sortedArr.push(leftArr.shift());
            while (rightArr.length)    
                sortedArr.push(rightArr.shift());  
            return sortedArr;
    },

    mergesort(arr) {  
        if (arr.length < 2) {    
            return arr; 
        }  
        
        else {    
            var midpoint = Math.floor(arr.length / 2);    
            var leftArr   = arr.slice(0, midpoint);    
            var rightArr  = arr.slice(midpoint, arr.length);    
            return this.merge(this.mergesort(leftArr), this.mergesort(rightArr));  
        }
    }




}