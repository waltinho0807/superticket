import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@wctickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
