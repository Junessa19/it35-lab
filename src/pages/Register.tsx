import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonInput, 
      IonItem, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';
  
  
 const Register: React.FC = () => {
   const navigation = useIonRouter();
   const doSignup = () => {
    navigation.push('/Register', 'forward', 'replace'); 
  };

  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>  
        <IonContent fullscreen>
        <IonList>
      <IonItem>
        <IonInput label="User Name" placeholder="Name"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Password input" type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Confirm Password" type="password" value="password"></IonInput>
      </IonItem>

      

    </IonList>

        </IonContent>
      </IonPage>
    );
  };
  
  export default Register;