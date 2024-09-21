import { AggregateRoot } from '../../../../context/shared/domain/aggregateRoot';

import { PlayerId } from './valueObjects/playerId.valueObject';
import { PlayerName } from './valueObjects/playerName.valueObject';
import { PlayerHandicap } from './valueObjects/playerHandicap.valueObject';

export interface PrimitivesPlayer {
  id: string;
  name: string;
  handicap: number;
}

export class Player extends AggregateRoot {
  readonly id: PlayerId;
  readonly name: PlayerName;
  readonly handicap: PlayerHandicap;

  constructor(id: PlayerId, name: PlayerName, handicap: PlayerHandicap) {
    super();
    this.id = id;
    this.name = name;
    this.handicap = handicap;
  }

  static fromPrimitives(data: PrimitivesPlayer): Player {
    return new Player(
      new PlayerId(data.id),
      new PlayerName(data.name),
      new PlayerHandicap(data.handicap)
    );
  }

  toPrimitives(): PrimitivesPlayer {
    return {
      id: this.id.value,
      name: this.name.value,
      handicap: this.handicap.value,
    };
  }
}
