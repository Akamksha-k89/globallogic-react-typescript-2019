Event Queue [Click(increment), MouseMove (movemouse)]

this.state = {
    counter: 0,
    isMouseOver: false
}

Batch Update Queue = [ 
    {
       counter: 1
     },
     {
         isMouseOver: true
     }
    ]

Click(increment) = React pull messgage from queue

react calls increment()

increment calls setState({
    counter: 1
})


MouseMove (movemouse) = React pull messgage from queue

react calls movemouse()

movemouse calls setState({
    isMouseOver: true
})

Batch Merge the state


Batch Update Queue = [ 
   
     
    ]

Merge the state, make a new state called 'Next State'

Next State = {
     counter: 1,
    isMouseOver: true
}

Pull batch state from batch update queue

 {
       counter: 1
},

Pull batch state from batch update queue

{
         isMouseOver: true
     }

When processed all the batch updates,

call shouldComponentUpdate() -- defer

update currentState with nextState

calls render()