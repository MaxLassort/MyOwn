You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.
## TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
## Angular Best Practices
- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.
## Accessibility Requirements
- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.
### Components
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.
## State Management
- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead
## Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).
## Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Unit Testing Best Practices
# Angular Unit Testing Best Practices

## General Principles

### Test Behavior, Not Implementation
- Focus on **what** the component does, not **how** it does it
- Test from the user's perspective
- Verify DOM output and user interactions, not internal methods

### Follow the GWT Pattern (BDD Style)
- **Given**: Setup the test context
- **When**: Perform the action
- **Then**: Assert the expected outcome

### Use Descriptive Test Names
- Test names should explain the expected behavior
- Write names from a user perspective
- Avoid generic names like "should work" or "test click"

### Aim for Meaningful Coverage
- Focus on critical paths and edge cases
- Don't chase 100% coverage blindly
- Prioritize tests that catch real bugs

---

## Component Testing

### Always Trigger Change Detection
- Use `await fixture.whenStable()` before asserting on DOM
- `TestBed.createComponent()` does not bind data automatically
- Change detection must be triggered explicitly in tests

### Use `dispatchEvent()` for User Input
- Setting `input.value` alone doesn't notify Angular
- Always dispatch the appropriate event (`input`, `change`, etc.)
- Wait for change detection after dispatching events

### Set Inputs with `setInput()`
- Use `fixture.componentRef.setInput()` for component inputs
- Prefer this over directly setting properties
- Works well with signal-based inputs

---

## Service Dependencies

### Prefer `TestBed.inject()` for Services
- Simple and clean syntax
- Works for root and TestBed-provided services
- Use `fixture.debugElement.injector.get()` only for component-level providers

### Provide Test Doubles for Dependencies
- Use stub classes that implement the service interface
- Keep stubs simple and focused
- Return predictable data for consistent tests

### Use Spies for Verification
- Verify that service methods were called
- Check call counts and arguments
- Use Vitest `vi.fn()` for spy creation

---

## Async Testing

### Prefer `whenStable()` for Simple Cases
- Waits for all async operations to complete
- Clean and readable syntax
- Works well with most common scenarios

### Use Vitest Fake Timers for Complex Async
- Control `setTimeout`, `setInterval`, and Promises
- Use `vi.useFakeTimers()` and `vi.runAllTimersAsync()`
- Always reset with `vi.useRealTimers()` after tests

### Mock HTTP with `HttpTestingController`
- Use `provideHttpClientTesting()` in test configuration
- Intercept requests with `expectOne()`
- Flush responses to simulate server responses

### Avoid `fakeAsync` with Vitest
- `fakeAsync` relies on Zone.js
- Not compatible with Vitest test runner
- Prefer native async strategies or Vitest fake timers

---

## User Interactions

### Create a `click()` Helper
- Encapsulate click-triggering logic
- Handle both `HTMLElement` and `DebugElement`
- Support different mouse button events

### Test Output Events
- Subscribe to component outputs before triggering actions
- Verify emitted values match expectations
- Use synchronous subscription for `EventEmitter`

### Use `triggerEventHandler()` for DebugElement
- Raises any data-bound event by name
- Pass event object as second parameter
- Some directives require specific event properties (e.g., `RouterLink`)

---

## Test Organization

### Use a Page Object for Complex Components
- Encapsulate DOM queries in a dedicated class
- Provide getter properties for common elements
- Reduce duplication and improve readability

### Use Test Host for Child Components
- Create a wrapper component to test child behavior
- Verify property bindings and event emissions
- Test integration between parent and child

### Group Related Tests with `describe()`
- Organize tests by feature or scenario
- Share setup with nested `beforeEach()`
- Improve test output readability

---

## Handling Nested Components

### Stub Unneeded Components
- Create empty stub components with matching selectors
- Use `TestBed.overrideComponent()` to replace imports
- Keep stubs minimal unless interaction is needed

### Use `NO_ERRORS_SCHEMA` Sparingly
- Ignores unrecognized elements and attributes
- Can hide real errors and typos
- Prefer explicit stubs when possible

### Combine Both Techniques
- Use stubs for components you need to interact with
- Use `NO_ERRORS_SCHEMA` for truly irrelevant components
- Balance convenience with error detection

---

## Routing Components

### Use `RouterTestingHarness`
- Simplifies testing of routed components
- Handles navigation and component creation
- Access route parameters naturally

### Test RouterLink Bindings
- Query elements with `By.directive(RouterLink)`
- Verify `href` properties match expected routes
- Test click navigation behavior

### Provide Routes in Test Configuration
- Use `provideRouter()` with test routes
- Keep route configuration minimal
- Mock route parameters as needed

---

## Override Component Providers

### Use `overrideComponent()` for Component-Level Providers
- `TestBed.configureTestingModule()` doesn't affect component providers
- Component creates its own child injector
- Override with `TestBed.overrideComponent()`

### Provide Spy Stubs
- Replace real services with spy implementations
- Control return values for different scenarios
- Verify method calls and arguments

### Combine with Other Overrides
- Use `overrideDirective()`, `overrideModule()`, `overridePipe()` as needed
- Can be called multiple times
- Use `add`, `remove`, or `set` keys in override object
