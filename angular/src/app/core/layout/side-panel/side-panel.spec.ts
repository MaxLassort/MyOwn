import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SidePanel} from './side-panel';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {SidePanelHarness} from './side-panel.harness';
import {provideRouter} from '@angular/router';

  describe('SidePanel', () => {
    let fixture: ComponentFixture<SidePanel>;
    let harness: SidePanelHarness;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SidePanel],
        providers: [provideRouter([])],
      }).compileComponents();

      fixture = TestBed.createComponent(SidePanel);
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, SidePanelHarness);
    });

    describe('initial state', () => {
      it('should be closed by default', async () => {
        expect(await harness.isClosed()).toBe(true);
      });
    });

    describe('toggle behavior', () => {
      it('should open when toggled while closed', async () => {
        // When
        await harness.toggle();

        // Then
        expect(await harness.isOpen()).toBe(true);
      });

      it('should close when toggled while open', async () => {
        // Given
        await harness.open();

        // When
        await harness.toggle();

        // Then
        expect(await harness.isClosed()).toBe(true);
      });
    });

    describe('open method', () => {
      it('should open the panel', async () => {
        // When
        await harness.open();

        // Then
        expect(await harness.isOpen()).toBe(true);
      });

      it('should stay open when called multiple times', async () => {
        // When
        await harness.open();
        await harness.open();

        // Then
        expect(await harness.isOpen()).toBe(true);
      });
    });

    describe('close method', () => {
      it('should close the panel', async () => {
        // Given
        await harness.open();

        // When
        await harness.close();

        // Then
        expect(await harness.isClosed()).toBe(true);
      });
    });
  });
