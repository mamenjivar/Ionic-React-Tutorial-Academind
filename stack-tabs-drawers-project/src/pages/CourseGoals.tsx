import React, { Fragment } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const CourseGoals: React.FC = () => {
    return (
        <Fragment>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This works - course goals page!</h2>
            </IonContent>
        </Fragment>
    );
};

export default CourseGoals;