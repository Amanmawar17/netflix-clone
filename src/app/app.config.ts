import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment.development';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { connectAuthEmulator } from "firebase/auth";

const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:4200");

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};



