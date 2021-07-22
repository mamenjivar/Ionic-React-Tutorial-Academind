import React, { Fragment } from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Courses: React.FC = () => {
  return (
    <Fragment>
      <IonHeader>
          <IonToolbar>
              <IonTitle>Courses</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent>
          <h2>This works - courses page</h2>
      </IonContent>
    </Fragment>
  );
};

export default Courses;
