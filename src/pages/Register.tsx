
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
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import React, { useState } from 'react';

interface RegisterProps {
  onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ onClose }) => {
  const router = useIonRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: CustomEvent) => {
    const { name, value } = e.detail;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password || (isRegistering && (!formData.userName || !formData.confirmPassword))) {
      alert('All fields are required!');
      return;
    }
    if (isRegistering && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(isRegistering ? 'Registration Successful!' : 'Login Successful!');
    router.push('/home');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{isRegistering ? 'Register' : 'Login'}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Go to Login' : 'Sign Up'}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="register-content">
        <div className="register-box">
          <IonList>
            {isRegistering && (
              <IonItem>
                <IonInput name="userName" value={formData.userName} onIonChange={handleChange} label="User Name" placeholder="Name" />
              </IonItem>
            )}

            <IonItem>
              <IonInput name="email" type="email" value={formData.email} onIonChange={handleChange} label="Email" placeholder="email@domain.com" />
            </IonItem>

            <IonItem>
              <IonInput name="password" type="password" value={formData.password} onIonChange={handleChange} label="Password" />
            </IonItem>

            {isRegistering && (
              <IonItem>
                <IonInput name="confirmPassword" type="password" value={formData.confirmPassword} onIonChange={handleChange} label="Confirm Password" />
              </IonItem>
            )}
          </IonList>

          <IonButton expand="full" style={{ marginTop: '20px' }} onClick={handleSubmit}>
            {isRegistering ? 'Register' : 'Login'}
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;