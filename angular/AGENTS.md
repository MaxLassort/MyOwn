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

### General Principles
- Write tests with hanesses
- Follow the GWT pattern: Given, When, Then (BDD style)
- Test behavior, not implementation details
- Aim for meaningful coverage, not 100% coverage
- Use descriptive test names that explain the expected behavior from a user perspective

### Component Testing
- Use `TestBed.configureTestingModule()` with minimal configuration
- Prefer testing public API over internal state
- Use `ComponentFixture` for DOM interactions
- Always call `fixture.detectChanges()` after setup and state changes
- Test signal-based inputs using `fixture.componentRef.setInput()`
- Use `fakeAsync()` and `tick()` for async operations
- Use `waitForAsync()` for Promise-based async code

### Signal Testing
- Test signals by reading their value with `signal()`
- Test computed signals by verifying derived values update correctly
- Use `TestBed.flushEffects()` to synchronously run pending effects
- Avoid testing signal internals; test the resulting behavior

### Service Testing
- Test services in isolation without TestBed when possible
- Mock HTTP calls using `HttpTestingController`
- Use `provideHttpClientTesting()` for HTTP testing setup
- Test error handling and edge cases

### Mocking Strategies
- Use `jest.fn()` or `vi.fn()` for function mocks
- Prefer dependency injection over global mocks
- Use `jasmine.createSpyObj()` only if still using Jasmine
- Create mock factories for reusable test doubles
- Use `ng-mocks` library for complex component mocking

### Testing Observables
- Use `firstValueFrom()` or `lastValueFrom()` for single emissions
- Use `subscribe()` with `done` callback for multiple emissions
- Test observable error and completion states
- Use marble testing for complex observable streams

### Accessibility Testing in Unit Tests
- Include `axe-core` checks in component tests
- Test keyboard navigation and focus management
- Verify ARIA attributes are correctly set
- Test screen reader announcements with live regions

### Test Organization
- Place test files next to the code they test (`.spec.ts`)
- Use descriptive test names that explain the expected behavior
- Group related tests using `describe()` blocks
- Use `beforeEach()` for common setup, avoid `beforeAll()` for stateful setup

### Performance
- Use `NO_ERRORS_SCHEMA` sparingly; prefer shallow rendering with mocked children
- Avoid full module imports; import only what's needed
- Use `overrideComponent()` to replace heavy dependencies
- Run tests in parallel when possible
