class Dish:
    def __init__(self, dish_id, dish_name, price, availability):
        self.dish_id = dish_id
        self.dish_name = dish_name
        self.price = price
        self.availability = availability

class Order:
    def __init__(self, order_id, customer_name, dishes, status):
        self.order_id = order_id
        self.customer_name = customer_name
        self.dishes = dishes
        self.status = status

class ZestyZomato:
    def __init__(self):
        self.menu = []
        self.orders = []
        self.order_id_counter = 1

    def add_dish(self, dish_id, dish_name, price, availability):
        dish = Dish(dish_id, dish_name, price, availability)
        self.menu.append(dish)
        print(f"{dish.dish_name} has been added to the menu.")

    def remove_dish(self, dish_id):
        for dish in self.menu:
            if dish.dish_id == dish_id:
                self.menu.remove(dish)
                print(f"{dish.dish_name} has been removed from the menu.")
                break
        else:
            print("Dish not found in the menu.")

    def update_dish_availability(self, dish_id, availability):
        for dish in self.menu:
            if dish.dish_id == dish_id:
                dish.availability = availability
                print(f"{dish.dish_name} availability has been updated.")
                break
        else:
            print("Dish not found in the menu.")

    def take_order(self, customer_name, dish_ids):
        order_dishes = []
        for dish_id in dish_ids:
            dish = next((d for d in self.menu if d.dish_id == dish_id), None)
            if not dish:
                print(f"Dish with ID {dish_id} not found in the menu.")
                return

            if not dish.availability:
                print(f"{dish.dish_name} is not available.")
                return

            order_dishes.append(dish)

        order = Order(self.order_id_counter, customer_name, order_dishes, "received")
        self.orders.append(order)
        self.order_id_counter += 1
        print(f"Order {order.order_id} received and is being prepared.")

    def update_order_status(self, order_id, new_status):
        for order in self.orders:
            if order.order_id == order_id:
                order.status = new_status
                print(f"Order {order.order_id} status has been updated to {new_status}.")
                break
        else:
            print("Order not found.")

    def review_orders(self):
        for order in self.orders:
            print(f"Order ID: {order.order_id}, Customer: {order.customer_name}, Status: {order.status}")

    def run(self):
        while True:
            print("\nWelcome to Zesty Zomato!")
            print("1. Add a dish to the menu")
            print("2. Remove a dish from the menu")
            print("3. Update dish availability")
            print("4. Take a new order")
            print("5. Update order status")
            print("6. Review all orders")
            print("7. Exit")

            choice = input("Enter your choice: ")

            if choice == "1":
                dish_id = input("Enter the dish ID: ")
                dish_name = input("Enter the dish name: ")
                price = float(input("Enter the price: "))
                availability = input("Is the dish available? (yes or no): ").lower() == "yes"
                self.add_dish(dish_id, dish_name, price, availability)

            elif choice == "2":
                dish_id = input("Enter the dish ID to remove: ")
                self.remove_dish(dish_id)

            elif choice == "3":
                dish_id = input("Enter the dish ID to update availability: ")
                availability = input("Is the dish available? (yes or no): ").lower() == "yes"
                self.update_dish_availability(dish_id, availability)

            elif choice == "4":
                customer_name = input("Enter the customer's name: ")
                dish_ids = input("Enter the dish IDs (comma-separated) for the order: ").split(",")
                self.take_order(customer_name, dish_ids)

            elif choice == "5":
                order_id = int(input("Enter the order ID to update status: "))
                new_status = input("Enter the new status: ")
                self.update_order_status(order_id, new_status)

            elif choice == "6":
                self.review_orders()

            elif choice == "7":
                print("Exiting Zesty Zomato. Have a great day!")
                break

            else:
                print("Invalid input. Please try again.")

if __name__ == "__main__":
    zesty_zomato = ZestyZomato()
    zesty_zomato.run()