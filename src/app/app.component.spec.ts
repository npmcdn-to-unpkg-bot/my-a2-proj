/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { async, TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppComponent]});
  });

  describe('without overriding', () => {
    beforeEach(async(() => {
      TestBed.compileComponents();
    }));

    it('should instantiate component', () => {
      let fixture = TestBed.createComponent(AppComponent);
      expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    it('should have expected <h1> text', () => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

          h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

      expect(h1.innerText).toMatch(/customer app/i, '<h1> should say something about "Customer App"');
    });
  });
});