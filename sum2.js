
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
var twoSum = function(nums, target) {
    let hash_table={}
    for(let i=0;i<=nums.length;i++){
        hash_table[String(nums[i])]=i
    }
    for(let i=0;i<=nums.length;i++){
        if(hash_table.asOwnProperty((target-nums[i]))){
            retun [i,nums[i]]
        }
    }
};