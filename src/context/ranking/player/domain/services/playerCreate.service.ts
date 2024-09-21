import { Player } from '../player.aggregate';
import { PlayerId } from '../valueObjects/playerId.valueObject';
import { PlayerName } from '../valueObjects/playerName.valueObject';
import { PlayerHandicap } from '../valueObjects/playerHandicap.valueObject';

export class PlayerCreate {
  static handle(id: PlayerId, name: PlayerName, handicap: PlayerHandicap) {
    const player = new Player(id, name, handicap);

    return player;
  }
}
