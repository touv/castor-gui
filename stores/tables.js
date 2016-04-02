// Make a store for all tables

export default {

  // You must define the name of the individual store
  name: "tables",

  // The state of the cart
  state: {
    current : 2,
    items: [
      { title: "T1" },
      { title: "T2" },
      { title: "T3" }
    ]
  },


  /**
    All actions to mutate the cart state
  */
  add_item(item){ // Add an item to the cart
    this.state.items.push(item)
  }

}
