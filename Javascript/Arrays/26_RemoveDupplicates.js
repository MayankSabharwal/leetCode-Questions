//26. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    let mergedArr = [];
    mergedArr.push(nums[0]);
    for(let i = 1 ; i < nums.length ; i++)
    {
        if(nums[i] != nums[i-1]){
            mergedArr.push(nums[i]);
        }
    }
    for(let i = 0 ; i < nums.length ; i++)
    {
        if(mergedArr[i] == null )
        {
            mergedArr.push('_');
        }
    }
    return mergedArr;
};

console.log(removeDuplicates([1,1,1,1,1,2,2,2,2,2,2,3]));