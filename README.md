[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11974277&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

In the worst-case, the outer loop of the main mergesort function runs for log(n) iterations, where n is the length of the array. This is because in each iteration, the size of the subarrays to be merged is doubled. Within each iteration of the outer loop, the inner loop takes O(n) time, as it iterates over the entire array once. Lastly we observe that the merge function, called within the inner loop, also takes O(n) time relative to the size of the merged subarrays. Given that each merge takes linear time, we see that the big-theta bound for the worst-case runtime is $\Theta(n log n)$
