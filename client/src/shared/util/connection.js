import ActionCable from 'actioncable'

export const createConsumer = (channel, roomId, subscriptionMethods) => {
  const App = {}
  App.cable = ActionCable.createConsumer('ws://localhost:3001/cable')
  App.room = App.cable.subscriptions.create(
    {
      channel,
      roomId
    },
    subscriptionMethods
  )

  return App
}
