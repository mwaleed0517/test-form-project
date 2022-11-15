import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    theForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<FormComponent>
    ) 
    {
        this.theForm = this.formBuilder.group({
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            date_of_birth: [null, []]
        });
        
    }

    onSubmit(): void
    {
        const payload = this.theForm.value;
        // do as intended
    }

    onClose(): void
    {
        this.dialogRef.close();
    }
}