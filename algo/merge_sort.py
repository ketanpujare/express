from random     import randint

def create_list(size=10, max=50):
    return list(randint(0,max) for _ in range(size))

def merge(a,b):
    c = list()
    a_index, b_index = 0, 0
    while a_index < len(a) and b_index < len(b):
        if a[a_index] < b[b_index]:
            c.append(a[a_index])
            a_index += 1
        else:
            c.append(b[b_index])
            b_index += 1

    if a_index == len(a):
        c.extend(b[b_index:])
    else:
        c.extend(a[a_index:])
    
    return c

def merge_sort(a):

    if len(a)<=1: return a
    
    left,right = merge_sort(a[:len(a)//2]), merge_sort(a[int(len(a)//2):])
    # // provides only integer result .

    return merge(left,right)


p = create_list()
print(p)
print(merge_sort(p))