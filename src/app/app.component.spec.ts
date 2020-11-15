import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import { BackendService } from './backend.service';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                RouterTestingModule
            ],
            providers: [
                BackendService
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
    });

    it('should create the app', () => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Tickets Manager');
    });
});
