import { PlayerHandicap } from '../../domain/valueObjects/playerHandicap.valueObject';
import { PlayerName } from '../../domain/valueObjects/playerName.valueObject';
import { PlayerId } from '../../domain/valueObjects/playerId.valueObject';
import { PlayerRepository } from '../../domain/player.repository';
import { PrimitivesPlayer } from '../../domain/player.aggregate';
import { Result } from '../../../../shared/domain/result';
import { PlayerCreate } from '../../domain/services/playerCreate.service';
import { PlayerAlreadyExists } from '../../domain/errors/playerAlreadyExists.error';
import LocaleService from '../../../../shared/domain/localeService';

export class PlayerCreator {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly localeService: LocaleService
  ) {}

  async run(params: {
    id: string;
    name: string;
    handicap: number;
  }): Promise<Result<PrimitivesPlayer>> {
    const result = new Result<PrimitivesPlayer>();
    const playerRecord = await this.playerRepository.find(
      new PlayerId(params.id)
    );
    if (playerRecord) {
      throw new PlayerAlreadyExists();
    }
    const playerId = new PlayerId(params.id);
    const playerName = new PlayerName(params.name);
    const playerHandicap = new PlayerHandicap(params.handicap);
    const player = PlayerCreate.handle(playerId, playerName, playerHandicap);
    const playerCreated = await this.playerRepository.add(player);
    const playerPrimitives = playerCreated.toPrimitives();
    result
      .setData(playerPrimitives)
      .addMessage(this.localeService.translate('player.created'));

    return result;
  }
}
