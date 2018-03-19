import ActionCable from 'actioncable'

export const createConnection = (channel, roomId) => {
  const App = {}
  App.cable = ActionCable.createConsumer('ws://localhost:3001/cable')
  debugger
  App.room = App.cable.subscriptions.create(
    {
      channel,
      roomId
    },
    {
      received: data => {
        console.log(data)
        debugger
      }
    }
  )

  return App
}
