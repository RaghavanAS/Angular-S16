import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CustomerComponent } from './customer.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from './routes/customer-routes';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChangeChar } from './pipes/changeToCapital';
import { SearchPipe } from './pipes/SearchByPipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        CustomerComponent,
        CustomerComponentComponent,
        CustomerDetailComponent,
        CustomerListComponent,
        LoginComponent,
        HomeComponent,
        PagenotfoundComponent,
        ChangeChar,
        SearchPipe
      ],
      imports: [
        appRouting,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule
       ]
    }).compileComponents();
  }));
/*  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  })); */
});
