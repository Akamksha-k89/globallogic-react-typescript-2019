# Assignment

1. updateItem

- Pass the updateItem function to CartItem
- input-qty, should have onChange
- onclick on update btn, call updateItem method


2. Favorite features

    Favorite Component
        state {
            items: [
                    id: 
                    name:
            ]
        }
        methods
            addItem()
            removeItem(id)
            empty()

    FavoriteList component
        Use <ul> instead of table
            each list to represent FavoriteItem

    FavoriteItem

        <li>
            <div>
                 <p>item name</p>
                 <button >delete</button>
            </div>
        </li>

App.tsx
    add routes /favorite points to Favorite component

Header
    add menu /favorite