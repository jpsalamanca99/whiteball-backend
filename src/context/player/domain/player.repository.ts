import { Criteria } from '../../shared/domain/criteria/criteria';
import { Player } from './player.aggregate';
import { PlayerId } from './valueObjects/playerId.valueObject';

export interface PlayerRepository {
  find(id: PlayerId): Promise<Player | null>;
  add(customer: Player): Promise<Player>;
  update(customer: Player): Promise<Player>;
  delete(customer: Player): Promise<void>;
  findAll(criteria: Criteria): Promise<Array<Player>>;
}