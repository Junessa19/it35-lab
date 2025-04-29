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

    const avatarUrl = 'https://i.pinimg.com/736x/25/50/d7/2550d75136e21161a496de11d17e4fcf.jpg';

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
        <IonContent fullscreen className="animated-background">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '15%',
            height: '100%',
          }}>
            <IonAvatar style={{
              width: '120px',
              height: '120px',
              marginBottom: '15px',
              border: '4px solid #fff',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: '#ffe6eb',
            }}>
              <img
                src={avatarUrl}
                alt="User Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </IonAvatar>

            <h2 style={{
              marginBottom: '25px',
              fontWeight: 'bold',
              color: '#d6336c',
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
                style={{ '--highlight-color-focused': '#ff99ac' }}
              />
              <IonInput
                label="Password"
                labelPlacement="stacked"
                fill="outline"
                type="password"
                placeholder="Enter your password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
                style={{ marginTop: '15px', '--highlight-color-focused': '#ff99ac' }}
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>

              <IonButton onClick={doLogin} expand="block" shape="round" style={{ marginTop: '25px', '--background': '#ff99ac', '--background-hover': '#ff7a94' }}>
                Login
              </IonButton>

              <IonButton
                routerLink="/it35-lab/register"
                expand="block"
                fill="clear"
                color="medium"
                shape="round"
                style={{ marginTop: '10px', color: '#d6336c' }}
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

        <style>
          {`
            .animated-background {
              background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee);
              background-size: 400% 400%;
              animation: gradientAnimation 15s ease infinite;
            }

            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </IonPage>
    );
  };

  export default Login;
