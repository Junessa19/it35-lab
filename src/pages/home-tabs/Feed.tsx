import {
  IonAvatar,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const profileImage = "https://dwezgqoxmzopbmjjnzzs.supabase.co/storage/v1/object/public/user-avatars/avatars/images.jpg";

const images = [
  { url: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/481197634_1164636125261396_2732540088613659479_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeENkwXfG9cxwRzHros6BySjNH1gUxeKDNU0fWBTF4oM1fy5Zl102VjQzfnsmBdkYzLk1HY2wpZn_PYowwlQhKJo&_nc_ohc=aubNhDqPML4Q7kNvgGjQuLQ&_nc_oc=AdjIgnNREB4-dDN7kqZMF8YNhxu3TqaSM0TqxX2v3BcrcYmF6KBbZcMO2ph2UGcgOy8&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=AFrSN72k-7L3r7pD_3KnOmX&oh=00_AYGRUoY2PIdWAkFeLBPq0TpFvbPz7qBdSHnU6ithVlBTPQ&oe=67D19692", description: "QUADRO" },
  { url: "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/471664493_1797979200969448_5467388149461712058_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF7dsHKOSdP_RwLDX184hyYlVHA8gcN5ZyVUcDyBw3lnN6J_8TSuyVYU3mbRji-RaBF4iRqpzHbAzE2fe9utqO9&_nc_ohc=QCceqswUvo0Q7kNvgEaG80l&_nc_oc=Adiy6oHwhQYdoDbQGK6gNQ8jNGVwziIMDRvcrvWQvw_0kXM6in8t1SipTCiYLJoBWTU&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AW6CT60rJESxs9rNrhBDZp1&oh=00_AYExGngg5NcJXIlstcpBoh5GCTBHti57TnJjfrxzEogEvw&oe=67D1BDB0", description: "WITH FAM" },
  { url: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/464016925_1748488142585221_2791864605887613914_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHkcYNoqbn5Cdmrkfj-pSHc82vKdvErD2fza8p28SsPZ9pONU4YH0NrPR4Ki9yesIT8yDnBqAaKQicJmmovD-js&_nc_ohc=HsCm2j5LGIMQ7kNvgE-w0UT&_nc_oc=AdhwBsNcycOGFd1HgHEZ4wzg5hBVBNx9jMsLPyGmuLkNK_NLI7Tc7ZQ_i5hh4PVvNN0&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=Ac6D6_4UKOQYpNP77cI2HOu&oh=00_AYG7oU4A8CFTFBhcvErTyfnXjKkA0-NBXUHI8fEHOU-OsQ&oe=67D1AC37", description: "Complete Fam Picture" },
  { url: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/480423777_1834411647326203_2209881036174081820_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGq3jlD-Qr8jnXnrANiPXCTgeIaMSqrbAyB4hoxKqtsDEYtpYnpDAIdGW03FSLSHwuF01VyIwFi8cv_rj1BLRv5&_nc_ohc=Vd84mjJQuYAQ7kNvgELH3-J&_nc_oc=Adg022DMWmXrPFvrXYeReYAo-4Pv1Q2kRZBd0TMdAUeJbfV0xO4VXsH-cEiZLySKJSo&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=APNfY74WpD8E1nniVJ1Y8Le&oh=00_AYE2fRkn86rqlcsV6aRBijNPji47SPNuck2U3GOGdp1a-w&oe=67D1A337", description: "In the album of life, our family pictures tell the story of love , laughter and bond that lasts forever🫶❤️" },
  { url: "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/480439876_1834414597325908_1876058028794332324_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGfuffL_cugn0BCKl55ashmI8DjW72aEfUjwONbvZoR9YAlpsS2HkhTr1L-c9-g222XWzegq9MjHoaElHnP8mno&_nc_ohc=pTMBqS7Yf_8Q7kNvgEVAN7V&_nc_oc=AdhLauewXaC6FEuu-sM604da6MzzNCqkLA5fA3kH-21Bx6ZSyPxEj8ZwcDvM1hJJyCk&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=ANEO3myVUSZEkLtazEyXYS4&oh=00_AYGQNvUD_bWsYyr1UkWZwfGdNTGB3npQX5xhN19PdTBBIw&oe=67D1CA79", description: "With lola" },

];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <IonCard color="primary">
            <IonCardHeader>
              <IonAvatar>
                <img
                  alt="Profile"
                  src={profileImage}
                />
              </IonAvatar>
              <IonCardTitle>Junessa Mae L. Bahian</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          {images.map((image, index) => (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardSubtitle>{image.description}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <img
                  src={image.url}
                  alt={image.description}
                  width="100%"
                  height="auto"
                />
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
