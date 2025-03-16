import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonInput, 
  IonItem, 
  IonPage, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonAlert,
  IonLoading,
  IonLabel,
  IonText,
  useIonRouter
} from '@ionic/react';

const Register: React.FC = () => {
  const router = useIonRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setAlertMessage("All fields are required.");
      setTimeout(() => {
        setShowAlert(true);
        setIsLoading(false); 
      }, 1000); 
      return;
    }
    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match.");
      setTimeout(() => {
        setShowAlert(true);
        setIsLoading(false); 
      }, 1000); 
      return;
    }

    setAlertMessage("Registration successful! Redirecting to login.");
    setTimeout(() => {
      setShowAlert(true);
      setIsLoading(false);
    }, 1000); 
    setTimeout(() => {
      router.push('/it35-lab'); 
    }, 3000); 
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonInput label="First Name" labelPlacement="floating" fill="solid" placeholder="Enter first name" value={firstName} onIonChange={(e) => setFirstName(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonInput label="Last Name" labelPlacement="floating" fill="solid" placeholder="Enter last name" value={lastName} onIonChange={(e) => setLastName(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonInput label="Email" labelPlacement="floating" fill="solid" type="email" placeholder="Enter email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonInput label="Password" labelPlacement="floating" fill="solid" type="password" placeholder="Enter password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonInput label="Confirm Password" labelPlacement="floating" fill="solid" type="password" placeholder="Confirm password" value={confirmPassword} onIonChange={(e) => setConfirmPassword(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={handleRegister}>Register</IonButton>

        <IonLoading 
  isOpen={isLoading} 
  message="Please wait..." 
  duration={null} 
  spinner="crescent" 
  onDidDismiss={() => setIsLoading(false)}
/>
        <IonAlert isOpen={showAlert} onDidDismiss={() => setShowAlert(false)} header={alertMessage.includes("successful") ? "Success" : "Error"} message={alertMessage} buttons={[{ text: 'OK', handler: () => setShowAlert(false) }]} />

        <IonText color="primary">
          
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Register;
