function bubbleSort(arr) {
    const n = arr.length;
    // 外层循环：0 ~ n-1
    for (let i = 0; i < n; i++) {
    // 内层循环找到最大值
      for (let j = 1; j < n - i; j++) {
        if (arr[j - 1] > arr[j]) {
          // 交换两个数据
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
      }
    }
    return arr;
  }