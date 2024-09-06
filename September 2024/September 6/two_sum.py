def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        i = 0
        j = 1
        while i < len(nums):
            while j < len(nums):
                if nums[i] + nums[j] == target:
                    return [i,j]
                else:
                    j+=1
            i+=1
            j = i+1