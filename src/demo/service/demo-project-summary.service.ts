import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectSummaryService } from '../../app/launcher/service/project-summary.service';
import { Summary } from '../../app/launcher/model/summary.model';

@Injectable()
export class DemoProjectSummaryService implements ProjectSummaryService {

  setup(summary: Summary): Observable<any> {
    return Observable.of({'uuid_link': 'http://dummy-link.com/'}).delay(3000);
  }

}
