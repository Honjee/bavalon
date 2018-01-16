import ActionCable from 'actioncable'

export const createConnection = channel => {
  const App = {}
  App.cable = ActionCable.createConsumer()
  App.room = App.cable.subscriptions.create(
    channel, {
      connected: (data) => {
        debugger
      },
      disconnected: (data) => {
        debugger
      },
      received: (data) => {
        debugger
      },
      updatePlayers: (data) => {
        debugger
      }
    }
  )
}
