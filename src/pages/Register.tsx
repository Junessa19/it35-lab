import { 
  IonButtons,
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonList, 
  IonPage, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';
import React from 'react';

interface RegisterProps {
  onClose: () => void; // Function to close register
}

const Register: React.FC<RegisterProps> = ({ onClose }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>  

      <IonContent fullscreen className="register-content">
        <style>
          {`
            .register-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
            }

            .register-box {
              width: 90%;
              max-width: 400px;
              background: rgba(255, 255, 255, 0.2);
              padding: 30px;
              border-radius: 15px;
              backdrop-filter: blur(10px);
              box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
              text-align: center;
            }
          `}
        </style>

        <div className="register-box">
          <IonList>
            <IonItem>
              <IonInput label="User Name" placeholder="Name"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Email" type="email" placeholder="email@domain.com"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Password" type="password"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Confirm Password" type="password"></IonInput>
            </IonItem>
          </IonList>

          <IonButton expand="full" style={{ marginTop: '20px' }}>
            Register
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
