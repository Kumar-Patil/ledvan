import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-unreviewed-display',
    templateUrl: './unreviewed-display.component.html',
    styleUrls: ['./unreviewed-display.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnreviewedDisplayComponent implements OnInit {

    users: User[];

    cols: any[];
    ngOnInit() {
        this.users = [
            { id: '1', name: 'kiran', email: 'kiran@gmail.com' },
            { id: '2', name: 'tom', email: 'tom@gmail.com' },
            { id: '3', name: 'john', email: 'john@gmail.com' },
            { id: '4', name: 'Frank', email: 'frank@gmail.com' },
            { id: '5', name: 'kiran', email: 'kiran@gmail.com' },
            { id: '6', name: 'tom', email: 'tim@gmail.com' },
            { id: '7', name: 'john', email: 'fun@gmail.com' },
            { id: '8', name: 'Frank', email: 'gun@gmail.com' },
            { id: '9', name: 'kiran', email: 'run@gmail.com' },
            { id: '10', name: 'tom', email: 'gin@gmail.com' },
            { id: '11', name: 'john', email: 'kin@gmail.com' },
            { id: '12', name: 'Frank', email: 'tin@gmail.com' },
            { id: '13', name: 'kiran', email: 'kiue@gmail.com' },
            { id: '14', name: 'tom', email: 'fff@gmail.com' },
            { id: '15', name: 'john', email: 'surf@gmail.com' },
            { id: '16', name: 'Frank', email: 'rnk@gmail.com' },
            { id: '17', name: 'kiran', email: 'riran@gmail.com' },
            { id: '18', name: 'tom', email: 'tomuus@gmail.com' },
            { id: '19', name: 'john', email: 'joen@gmail.com' },
            { id: '20', name: 'Frank', email: 'fanker@gmail.com' },

        ];
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
        ];
    }
}

export interface User {
    id;
    name;
    email;
}
