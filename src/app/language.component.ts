import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TranslateService} from  '@ngx-translate/core';
import {Subscription} from 'rxjs/Subscription';
// todo: maybe delete this file
@Component({
    template: '<router-outlet></router-outlet>'
})

export class LanguageComponent implements OnInit {
    private subscription: Subscription;
    constructor(private activatedRoute: ActivatedRoute, private translateService: TranslateService) {
        this.translateService.addLangs(['en', 'es']);
        this.translateService.setDefaultLang('es');
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.queryParams.subscribe(
            (param: any) => {
                let locale = param['lang'];
                if (locale !== undefined) {
                    this.translateService.use(locale);
                }
            }
        );
        this.activatedRoute.params.subscribe((params: Params) => {
            this.translateService.use(params['lang']);
        });
    }
}
