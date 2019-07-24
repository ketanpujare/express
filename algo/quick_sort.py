from random     import randint

def create_list(max_ele=10,max_num=100):
    return [randint(0,max_num) for _ in range(max_ele)]


# Simple Way        # Simple But High Space complexity
def quicksort(a):
    if len(a)<=1: return a
    smaller,equal,larger = list(),list(),list()
    pivot = a[randint(0,len(a)-1)]

    for x in a:
        if x < pivot: 
            smaller.append(x)
        elif x == pivot: 
            equal.append(x)
        else: 
            larger.append(x)

    return quicksort(smaller) + equal + quicksort(larger)



# Best Way
def partition(a,low,high):
    i = low-1
    pivot = a[high]
    for j in range(low,high):
        if a[j]<=pivot:
            i+=1
            a[i],a[j] = a[j],a[i]
    a[i+1],a[high] = a[high],a[i+1]
    return i+1


def quicksort_inplace(a,low=0,high=None):
    if high==None:
        high = len(a)-1
    if low<high:
        pivot_index = partition(a,low,high)
        quicksort_inplace(a,low,pivot_index-1)
        quicksort_inplace(a,pivot_index+1,high)


a = create_list(12,80)
print(a)
print(quicksort_inplace(a))
print(a)

