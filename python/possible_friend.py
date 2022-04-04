

from random import getrandbits, choices


class PossibleFriend:

    def __init__(self):
        pass

    def __print_answer(self, a):
        print(f'- {a}')

    def answer_yes_or_no(self):
        answer = 'Yes' if bool(getrandbits(1)) else 'No'
        self.__print_answer(answer)
        return answer

    def posible_desirable_drink(self):
        answer = choices(['tea', 'coffe', 'cocoa', 'other'])[0]
        self.__print_answer(answer)
        return answer

    def interests(self):
        answer = choices(['soccer', 'code', 'run', 'read', 'write', 'hiking',
                         'swimming', 'gym', 'movies', 'playing piano' 'singing'])[0]
        self.__print_answer(answer)
        return answer
