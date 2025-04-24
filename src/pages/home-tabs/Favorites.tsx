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

const Favorites: React.FC = () => {
  const favoriteFoods = [
    {
      name: 'Burger',
      image: 'c:\Users\NEC\Downloads\burger  ngani.jpg',
      description: 'Classic delight with fresh mozzarella and basil.'
    },
    {
      name: 'Pizza',
      image: '/assets/images/sushi.jpg',
      description: 'Assorted sushi rolls with wasabi and soy sauce.'
    },
    {
      name: 'Chocolate Cake',
      image: '/assets/images/cake.jpg',
      description: 'Rich and moist chocolate cake with fudge icing.'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Favorite Foods</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {favoriteFoods.map((food, index) => (
          <IonCard key={index}>
            <IonImg src={food.image} alt={food.name} />
            <IonCardHeader>
              <IonCardTitle>{food.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{food.description}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
