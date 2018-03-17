import ActionCable from 'actioncable'

export const createConnection = (channel, roomId) => {
  const App = {}
  App.cable = ActionCable.createConsumer()
  App.room = App.cable.subscriptions.create({
    channel, roomId,
    received: function (data) {
      debugger
    }
  })
}
