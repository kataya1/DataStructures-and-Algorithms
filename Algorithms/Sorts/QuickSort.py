from random import Random, randint


def QuickSort(arr):
    if len(arr) < 2:
        return arr
    randIndex = randint(0, len(arr) - 1)
    pivot = arr[randIndex]
    return QuickSort([ x for i, x in enumerate(arr) if x <= pivot and i != randIndex ]) + [pivot] + QuickSort([ x for i, x in enumerate(arr) if x > pivot and i != randIndex ])

# print(QuickSort([4, 9, 8, 1, 2, 0, 3, 7, 99, 23, 8]))


import random
arr = random.sample(range(100), random.randint(10, 25))
print(arr)