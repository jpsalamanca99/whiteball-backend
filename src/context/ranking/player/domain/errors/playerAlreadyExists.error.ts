import { DomainError } from '../../../../shared/domain/error/domain.error';

export class PlayerAlreadyExists extends DomainError {
  constructor() {
    super(localeService.translate('player.alreadyExists'));
  }
}
