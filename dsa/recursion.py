def sum(n):
    if n == 1:
        return 1
    return n + sum(n-1)

def fibo(n):
    if n == 0 or n == 1:
        return n
    return fibo(n-1) + fibo(n-2)

print(sum(5))
print(fibo(16))