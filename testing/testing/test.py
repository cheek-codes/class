import random

def number():
    while True:
        a = input("What is the starting ticket number? ")
        if a.isdigit():
            a = int(a)
            break
        else:
            print("Enter a number")
            continue

    while True:
        b = input("What is the ending ticket number? ")
        if b.isdigit():
            b = int(b)
            break
        else:
            print("Enter a number")
            continue

    ticket = random.randint(a, b)
    print(f"winning ticket is: {ticket}")

number()

while True:
    again = input("Do you have another raffle? Enter (yes) or (no) ")
    if again.lower() == "yes":
        number()
    else: 
        print("Thank you, bye bye")
        quit()
