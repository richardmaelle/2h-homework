import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../backend.service';

@Component({
    selector: 'app-add-ticket-dialog',
    templateUrl: './add-ticket-dialog.component.html'
})
export class AddTicketDialogComponent implements OnInit {
    form: FormGroup;

    constructor(
        private backendService: BackendService,
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<AddTicketDialogComponent>,
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            description: [null, Validators.required]
        });
    }

    save() {
        if(this.form.valid) {
            this.backendService.newTicket({description: this.form.get('description').value}).subscribe(
                () => this.dialogRef.close()
            );
        }
    }

    close() {
        this.dialogRef.close();
    }
}
