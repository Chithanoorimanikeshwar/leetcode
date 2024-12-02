//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  let hash_table = {};
  for (let i = 0; i < nums.length; i++) {
    hash_table[String(nums[i])] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let to_need = target - nums[i];
    if (hash_table.hasOwnProperty(to_need)) {
      if (hash_table[to_need] != i) {
        return [i, hash_table[to_need]];
      }
    }
  }
};
