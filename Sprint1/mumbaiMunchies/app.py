
snack_inventory = []

def add_snack(snack_id, snack_name, price):
    for snack in snack_inventory:
        if snack["snack_id"] == snack_id:
            print("Snack ID already exists. Please choose a different ID.")
            return
    snack = {
        "snack_id": snack_id,
        "snack_name": snack_name,
        "price": price,
        "availability": True
    }
    snack_inventory.append(snack)

def remove_snack(snack_id):
    for snack in snack_inventory:
        if snack["snack_id"] == snack_id:
            snack_inventory.remove(snack)
            break

def update_availability(snack_id, availability):
    for snack in snack_inventory:
        if snack["snack_id"] == snack_id:
            snack["availability"] = availability
            break

def record_sale(snack_id):
    for snack in snack_inventory:
        if snack["snack_id"] == snack_id and snack["availability"]:
            snack["availability"] = False
            return True
        elif snack["snack_id"] == snack_id and not snack["availability"]:
            print("Snack is unavailable.")
            return False
    print("Invalid Snack ID.")
    return False




def main():
    while True:
        print("Mumbai Munchies - Snack Inventory Management")
        print("1. Add Snack")
        print("2. Remove Snack")
        print("3. Update Snack Availability")
        print("4. Record Sale")
        print("5. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            snack_id = int(input("Enter Snack ID: "))
            snack_name = input("Enter Snack Name: ")
            price = float(input("Enter Price: "))
            add_snack(snack_id, snack_name, price)
        elif choice == 2:
            snack_id = int(input("Enter Snack ID to remove: "))
            remove_snack(snack_id)
        elif choice == 3:
            snack_id = int(input("Enter Snack ID to update: "))
            availability = input("Enter Availability (True/False): ").lower() == "true"
            update_availability(snack_id, availability)
        elif choice == 4:
            snack_id = int(input("Enter Snack ID for sale: "))
            record_sale(snack_id)
        elif choice == 5:
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
