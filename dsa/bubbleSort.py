def BubbleSort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-1-i):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    

arr = [100,105,20,25,270,96,101]
BubbleSort(arr)
print(arr)
