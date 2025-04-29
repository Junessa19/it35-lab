import { 
  IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonSearchbar, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>
    </IonPage>
  );
}

export default Search;