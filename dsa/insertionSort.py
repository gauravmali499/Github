def InsertionSort(arr):
    n = len(arr)
    for i in range(0,n-1):
        for j in range(i+1, 0, -1):
            if arr[j] < arr[j-1]:
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            else:
                break

        


arr = [100,105,20,25,270,96,101]
InsertionSort(arr)
print(arr)