import { 
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonItem, 
      IonMenu, 
      IonMenuButton, 
      IonMenuToggle, 
      IonPage, 
      IonRouterOutlet, 
      IonSplitPane, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react'
  import {homeOutline, logOutOutline, rocketOutline} from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import About from './About';
import Details from './Details';

  const Menu: React.FC = () => {
    const path = [
        {name:'Home', url: '/it35-lab/app/home', icon: homeOutline},
        {name:'About', url: '/it35-lab/app/about', icon: rocketOutline},
    ]

    return(
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Menu
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                </IonMenu>
                <IonContent>
                    {path.map((IonItem.index) =>(
                        
                    )
                </IonContent>
            </IonSplitPane>
        </IonPage>
    )
