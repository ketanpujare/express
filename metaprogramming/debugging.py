# debugging can be done using decorator for avoid
# time waste

from functools import wraps, partial


# decorator function for debugging
def debug(func):
    @wraps(func)  ## copies func meta data to wrapper function
    def wrapper(*args, **kwargs):
        print(func.__name__)  ## can print debugging info
        print(func.__qualname__)  ## for addtional info only works with class
        return func(*args, **kwargs)

    return wrapper


## decorator can be used with logging module
## decorator will be independent of code so it helps in debugging


## advanced version
def advanced_debug(func=None, *, prefix=''):
    if func is None:
        return partial(advanced_debug, prefix=prefix)

    msg = prefix + func.__qualname__

    @wraps(func)
    def wrapper(*args, **kwargs):
        print(msg)
        return func(*args, **kwargs)

    return wrapper


## Class decorator
## does not work with class & static methods why? don't know.
def debugmethods(cls):
    for key, val in vars(cls).items():
        if callable(val):
            setattr(cls, key, advanced_debug(val))
            ## whener we call any method advanced_debug will run as
            ## we have use setattr

    return cls


@debug
def add(x, y):
    return x + y


@advanced_debug(prefix='****')
def sub(x, y):
    return x - y


# add(2, 3)
# sub(4, 2)


@debugmethods
class Span(object):
    def methodA(self):
        return 9

    def methodB(self):
        pass


# s = Span()
# s.methodA()
