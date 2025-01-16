var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr=[];
    let sum = 0;
    for(let i = 0 ; i < nums1.length ; i++)
    {
        for(let j = i+1; j < nums1.length ; j++)
        {
            if(nums1[i] > nums1[j])
            {
                let temp = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = temp;
            }
        }
    }
    for(let i = 0 ;i < nums2.length ; i++)
    {
        for(let j = i+1 ; j < nums2.length ; j++)
        {
            if(nums2[i] > nums2[j])
            {
                let temp = nums2[i];
                nums2[i] = nums2[j];
                nums2[j] = temp;
            }
        }
    }

    i = 0 ; j = 0;
    while(i < nums1.length || j < nums2.length)
    {
        if(i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j]))
        {
            mergedArr.push(nums1[i]);
            i++;
        }
        else
        {
            mergedArr.push(nums2[j]);
            j++;
        }
    }
    if(mergedArr.length % 2 === 0)
    {
        let mid = Math.floor(mergedArr.length/2);
        let mid1 = mid - 1;
        let mid2 = mid;
        let median = (mergedArr[mid1]+mergedArr[mid2])/2;
        return median;
    }
    else{
        let mid = Math.floor(mergedArr.length/2);
        let median = mergedArr[mid];
        return median;
    }

};

console.log(findMedianSortedArrays([4,8,2,1],[3,5,6,7]));