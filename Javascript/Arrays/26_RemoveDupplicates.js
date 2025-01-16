//26. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    let k = 0;
    for(let i = 1 ; i < nums.length ; i++)
    {
        if(nums[i] != nums[i-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

console.log(removeDuplicates([1,1,1,1,1,2,2,2,2,2,2,3]));