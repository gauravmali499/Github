def selectionSort(arr):
    n = len(arr)
    for i in range(n-1):
        min_index = i
        for j in range(min_index, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i] 


arr = [100,105,20,25,270,96,101]
selectionSort(arr)
print(arr)