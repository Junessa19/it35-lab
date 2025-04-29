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
  const favoriteFoods = [
    { name: 'Burger', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', description: 'Juicy beef burger with cheese, lettuce, and tomato.' },
    { name: 'Pizza', image: 'https://i.pinimg.com/236x/a0/d8/52/a0d8521a2bcca6566b08839aa759de40.jpg', description: 'Cheesy pizza loaded with pepperoni and olives.' },
    { name: 'Chocolate Cake', image: 'https://i.pinimg.com/236x/d5/47/c4/d547c40e75cb17f062b683b88ee422b3.jpg', description: 'Rich and moist chocolate cake with fudge icing.' },
    { name: 'Pasta', image: 'https://images.unsplash.com/photo-1603133872878-684f372f7174', description: 'Creamy Alfredo pasta with mushrooms.' },
    { name: 'Sushi', image: 'https://images.unsplash.com/photo-1579881228428-79e3f59f57c4', description: 'Fresh salmon and tuna sushi rolls.' },
    { name: 'Ice Cream', image: 'https://images.unsplash.com/photo-1589712235200-6809c688c5de', description: 'Vanilla and strawberry ice cream scoops.' },
    { name: 'Fries', image: 'https://images.unsplash.com/photo-1556800544-5315695dada1', description: 'Crispy golden French fries.' },
    { name: 'Steak', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141', description: 'Grilled steak with herbs and butter.' },
    { name: 'Ramen', image: 'https://images.unsplash.com/photo-1602339925373-df4e0f63f0b4', description: 'Spicy pork ramen with egg and seaweed.' },
    { name: 'Donuts', image: 'https://images.unsplash.com/photo-1548365328-9c6dbfd9993a', description: 'Glazed and sprinkled donuts.' },
    { name: 'Tacos', image: 'https://images.unsplash.com/photo-1604908177522-43f04068e540', description: 'Mexican tacos with beef and salsa.' },
    { name: 'Pancakes', image: 'https://images.unsplash.com/photo-1554109489-7ef5b40d8649', description: 'Stack of pancakes with syrup and berries.' },
    { name: 'Salad', image: 'https://images.unsplash.com/photo-1604908177522-43f04068e540', description: 'Healthy vegetable salad with avocado.' },
    { name: 'Chicken Wings', image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36', description: 'Spicy and crispy chicken wings.' },
    { name: 'Mac & Cheese', image: 'https://images.unsplash.com/photo-1601050690590-0e1e00b73550', description: 'Cheesy macaroni and cheese.' },
    { name: 'Hotdog', image: 'https://images.unsplash.com/photo-1600628422010-9ea273d4a1de', description: 'Classic hotdog with mustard and ketchup.' },
    { name: 'Cupcake', image: 'https://images.unsplash.com/photo-1612197522068-1e44e3ecf942', description: 'Frosted cupcakes with sprinkles.' },
    { name: 'Grilled Cheese', image: 'https://images.unsplash.com/photo-1607330289192-c9f467524d1e', description: 'Melted cheese sandwich.' },
    { name: 'Smoothie', image: 'https://images.unsplash.com/photo-1582719478181-2f5aa7c0d443', description: 'Refreshing fruit smoothie.' },
    { name: 'Nachos', image: 'https://images.unsplash.com/photo-1601924928333-98ce7d91c2ed', description: 'Cheesy nachos with jalapenos and salsa.' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="food-grid">
          {favoriteFoods.map((food, index) => (
            <IonCard key={index} className="food-card">
              <IonImg src={food.image} alt={food.name} />
              <IonCardHeader>
                <IonCardTitle>{food.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{food.description}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
