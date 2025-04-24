
import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Oops!"
    message={message}
    buttons={['Okay']}
  />
);

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 500);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '15%',
          background: 'linear-gradient(to bottom right, #ffe7ba, #ffcc80)',
          height: '100%',
        }}>
          <IonAvatar style={{
            width: '120px',
            height: '120px',
            marginBottom: '15px',
            border: '4px solid #fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706830.png"
              alt="User Avatar"
              style={{ width: '100%', height: '100%' }}
            />
          </IonAvatar>

          <h2 style={{
            marginBottom: '25px',
            fontWeight: 'bold',
            color: '#d35400',
          }}>
            User
          </h2>

          <div style={{ width: '100%', padding: '0 20px' }}>
            <IonInput
              label="Email"
              labelPlacement="stacked"
              fill="outline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
            />
            <IonInput
              label="Password"
              labelPlacement="stacked"
              fill="outline"
              type="password"
              placeholder="Enter your password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              style={{ marginTop: '15px' }}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <IonButton onClick={doLogin} expand="block" shape="round" color="warning" style={{ marginTop: '25px' }}>
              Login
            </IonButton>

            <IonButton
              routerLink="/it35-lab/register"
              expand="block"
              fill="clear"
              color="medium"
              shape="round"
              style={{ marginTop: '10px' }}
            >
              Don't have an account? Register
            </IonButton>
          </div>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
