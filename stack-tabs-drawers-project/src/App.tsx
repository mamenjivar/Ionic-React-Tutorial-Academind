import React from 'react';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router'
import { IonApp } from '@ionic/react';

// pages
import Courses from './pages/Courses';
import CourseGoals from './pages/CourseGoals';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="">
        <Courses />
      </Route>
      <Route path="/course-goals">
        <CourseGoals />
      </Route>
    </IonReactRouter>
  </IonApp>
);

export default App;