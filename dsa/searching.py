def linear_search(arr, num):
    for index, value in enumerate(arr):
        if num == value:
            return index
    return -1

def binary_search(arr, num): #itrative
    first_index = 0
    last_index = len(arr) - 1
    mid = 0
    while(first_index <= last_index):
        mid = (first_index + last_index) // 2
        if arr[mid] < num:
            first_index = mid + 1
        elif arr[mid] > num:
            last_index = mid - 1
        else:
            return mid
    return -1    

def BS(arr, num, first_index, last_index): #recursive
    mid = (first_index + last_index) // 2
    if arr[mid] < num:
        return BS(arr, num, mid+1, last_index)
    elif arr[mid] > num:
        return BS(arr,num, first_index, mid-1)
    else:
        return mid


arr = [10,15,20,25,27,96,101]
num = 101
print(linear_search(arr, num))
print(binary_search(arr, num))
print(BS(arr, num, 0, len(arr)-1))