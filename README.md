# TranslocoTestIssue

This repository shows a unit test issue with transloco pipes when using a module
that provides a scope using an inline loader.

AppModule defines a component AppComponent which uses the transloco pipe.
AppComponent also uses the BComponent from BModule. BComponent itself also uses
a transloco pipe.

BModule has its own i18n assets and configures transloco with a scope and inline
loader.

The unit test app.component.spec.ts describes our expected behaviour, i.e.
translations work in both components, and uses a TranslocoTestingModule via
getTranslocoModule() and also imports BModule (which itself also imports
TranslocoModule).

It is our impression that these two transloco modules, i.e. the TranslocoModule
and the TranslocoTestingModule, don't work together.

We have observed that the TranslocoService seems to work, only the pipe and the
structural and attribute directives are affected.
