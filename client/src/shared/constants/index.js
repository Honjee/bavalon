import * as M from './minions'
import * as V from './villagers'

const MAPPING = {
  [M.hasMordred]: 'Mordred',
  [M.hasOberon]: 'Oberon',
  [M.hasMorgana]: 'Morgana',
  [M.hasAssassin]: 'Assassin',
  [V.hasMerlin]: 'Merlin',
  [V.hasPercival]: 'Percival',
  [V.hasVillager]: 'Villager'
}
const CONSTANTS = {
  M,
  V,
  MAPPING
}

export default CONSTANTS
