import { IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar, useIonPicker } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [msg, setMsg] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [present] = useIonPicker();
  const [carrier, setCarrier] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Texta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
          <IonLabel position="floating">Select</IonLabel>
          <IonSelect>
            <IonSelectOption value="">No Game Console</IonSelectOption>
            <IonSelectOption value="nes">NES</IonSelectOption>
            <IonSelectOption value="n64">Nintendo64</IonSelectOption>
            <IonSelectOption value="ps">PlayStation</IonSelectOption>
            <IonSelectOption value="genesis">Sega Genesis</IonSelectOption>
            <IonSelectOption value="saturn">Sega Saturn</IonSelectOption>
            <IonSelectOption value="snes">SNES</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonList>
          <IonItem>
            <IonInput autofocus={true} autocomplete="tel" inputmode="tel" type="number" pattern="[0-9]{10}" value={number} placeholder="Enter Phone Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="number" required={true} inputmode="numeric" value={amount} placeholder="Enter Amount To Send" onIonChange={e => setAmount(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Msg</IonLabel>
            <IonTextarea autocapitalize="on" autoGrow={true} spellcheck={true} required={true} placeholder="Enter your text message here..." value={msg} onIonChange={e => setMsg(e.detail.value!)}></IonTextarea>
          </IonItem>       
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
