import {Injectable, Inject} from '@angular/core'
import { Model } from '../../../model/src';
import { TOKEN } from '../../../model/src';

@Injectable()
export class Child2Service {
  constructor(@Inject(TOKEN) private readonly  facade: Model) {}
}