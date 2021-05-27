import { ExampleEnum } from '@demo/shared/models/ExampleEnum';
import { ExampleModel } from '@demo/shared/models/ExampleModel';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    examples: Array<ExampleModel> = [{
        Id: 1,
        Name: ExampleEnum.Enum1.toString(),
    },
    {
        Id: 2,
        Name: ExampleEnum.Enum2.toString()
    }
    ];

    constructor(){

    }


}
