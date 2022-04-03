

from sheldon import Sheldon
from possible_friend import PossibleFriend


def run_algorithm():
    shelly = Sheldon()
    friend = PossibleFriend()
    is_friend = shelly.ask_for_meal(friend)
    if not is_friend:
        is_friend = shelly.ask_for_drink(friend)
        if not is_friend:
            is_friend = shelly.ask_for_interests(friend)


if __name__ == '__main__':
    run_algorithm()
