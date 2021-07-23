import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";

// import { COURSE_DATA } from "./Courses";

const COURSE_DATA = [
    {
      id: "c1",
      title: "Ionic + React - The Practical Guide",
    },
    {
      id: "c2",
      title: "Reactjs - The Complete Guide",
    },
    {
      id: "c3",
      title: "Javascript - The Complete Guide",
    }
  ];

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string}>().courseId;
    // const selectedCourseId = "c2";

  const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : "No course found!"}
            {/* {COURSE_DATA[2].title} */}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - course goals page!</h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
