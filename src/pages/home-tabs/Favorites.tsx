import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg
} from '@ionic/react';
import './Favorites.css';

const Favorites: React.FC = () => {
  const favoriteMusic = [
    { 
      title: 'Paubaya', 
      artist: 'Moira', 
      image: 'https://i.pinimg.com/474x/b1/48/cf/b148cfd75c0598dc5b0cdc59c488f050.jpg', 
     
    },
    { 
      title: 'Multo', 
      artist: 'Cup of Joe', 
      image: 'https://i.pinimg.com/736x/13/6a/75/136a75298929a86619a1de4cc6afe59f.jpg', 
    },
    { 
      title: 'Lover', 
      artist: 'Taylor Swift', 
      image: 'https://i.pinimg.com/736x/13/6a/75/136a75298929a86619a1de4cc6afe59f.jpg', 
    },

    { 
      title: 'Love Story', 
      artist: 'Taylor Swift', 
      image: 'https://i.pinimg.com/474x/f3/35/88/f33588f331c949c3229ae6f5d785f351.jpg', 
    },


    { 
      title: 'drivers license', 
      artist: 'Olivia Rodrigo', 
      image: 'https://i.pinimg.com/236x/61/54/78/615478bb0fccdd1727401e0f7d755c3c.jpg', 
    },

    { 
      title: 'As It Was', 
      artist: 'Harry Styles', 
      image: 'https://i.pinimg.com/236x/64/1a/96/641a96479ca2458ec3c4b683fec4ea02.jpg', 
    },

    
    
    
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Favorite Music</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="music-grid">
          {favoriteMusic.map((song, index) => (
            <IonCard key={index} className="music-card">
              <IonImg src={song.image} alt={song.title} />
              <IonCardHeader>
                <IonCardTitle>{song.title} - {song.artist}</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
