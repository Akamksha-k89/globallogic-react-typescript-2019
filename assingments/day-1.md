npx create-react-app contact-app --typescript

delete the src

create src folder
    
    create file index.tsx
    create src/app folder
            create a file App.tsx
            create a folder components
            src/app/components
                create Home.tsx [about home page]
                create Contact.tsx [address ,email and phone]
                create About.tsx [about company]
                

Include Home, Contact and About component inside App.tsx


+

Day-2

In App.tsx,
    1. add 3 buttons to switch between Home/Contact/About page 
        (state, setState)

    2. Within contact page, implement a form

       1. name (input)
       2. subject (input)
       3. message: (textarea)
       4. msgType: (select, [options => (0, "technical"),
                                        (1, "billing")]),
                                        (3, "sales")]),
