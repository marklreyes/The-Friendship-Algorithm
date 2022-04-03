
from possible_friend import PossibleFriend
from random import choices


class Sheldon:

    def __init__(self):
        pass

    def ask_for_meal(self, friend: PossibleFriend) -> bool:
        print('- Would you like to share a meal?')
        answer = friend.answer_yes_or_no()
        if answer == 'Yes':
            print('- Excellent. Let\'s dine together and begin our friendship!')
            return True
        else:
            return False

    def ask_for_drink(self, friend: PossibleFriend) -> bool:
        print('- Alright, do you enjoy a hot beverage?')
        answer = friend.answer_yes_or_no()
        if answer == 'Yes':
            print("- Excellent. Popular choices include tea, coffee, cocoa")
            drink = friend.posible_desirable_drink()
            if drink in ['tea', 'coffee', 'cocoa']:
                print(
                    f"- Let's have {drink} together and begin our friendship!")
                return True
            else:
                print(f'- I\'m sorry, I don\'t do {drink}')
                return False
        else:
            return False

    def ask_for_interests(self, friend: PossibleFriend) -> bool:
        self.interests = None
        howard_counter = 10
        collected_interests = []
        for i in range(howard_counter):
            print(f'- Tell me an interest of yours?')
            f_interest = friend.interests()
            collected_interests.append(f_interest)
            print(f"Really, {f_interest}?! I don't do {f_interest}.")
            if i > 6:
                least_objectionable_choice = choices(collected_interests)[0]
                print(
                    f'- Why don\'t we do that together? Let\'s partake in  {least_objectionable_choice} and begin our friendship!')
                return True

        return False
