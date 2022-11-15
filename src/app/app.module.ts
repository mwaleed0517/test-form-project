import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component/form.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        FlexLayoutModule,
        MatInputModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
