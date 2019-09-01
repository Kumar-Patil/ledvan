import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDatepickerModule
} from '@angular/material';

@NgModule({

    imports: [
        MatMenuModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatDatepickerModule
    ],
    exports: [
        MatMenuModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatDatepickerModule
    ]
})
export class MaterialModule {}
