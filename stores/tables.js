// Make a store for all tables

export default {

  // You must define the name of the individual store
  name: "tables",

  // The state of the cart
  state: {
    current: {}
  },


  /**
    All actions to mutate the state
  */
  select_one(item) {
    this.state.current = item
  }

}
