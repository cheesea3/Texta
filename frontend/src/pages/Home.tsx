import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar, useIonPicker, useIonToast } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import axios from 'axios';

const Home: React.FC = () => {
  const [msg, setMsg] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [carrier, setCarrier] = useState<string>();
  const [error, setError] = useState(false);
  const [present, dismiss] = useIonToast();
  const [lastNumber, setLastNumber] = useState<number>();

  
  function resetOptions(){
    setNumber(NaN);
    setAmount(NaN);
    setMsg('');
  }

  function submitText(){
    setError(false);
    if(!msg || !carrier || !amount || !number){
      setError(true);
      present({
        buttons: [{ text: 'Ok', handler: () => dismiss() }],
        message: 'You have one or more errors in the form!',
        onDidDismiss: () => console.log('dismissed'),
        onWillDismiss: () => console.log('will dismiss'),
      });
    } else if (number == lastNumber){
      setError(true);
      present({
        buttons: [{ text: 'Ok', handler: () => dismiss() }],
        message: 'You are not allowed to repeatidly send texts to the same number.',
        onDidDismiss: () => console.log('dismissed'),
        onWillDismiss: () => console.log('will dismiss'),
      });
    }
     else {
      setError(false);
      console.log(`https://api.imperfectaimers.net/text?sendtext=true&number=${number}&carrier=${carrier}&msg=${msg}&amount=${amount}`);
        axios.get(`https://api.imperfectaimers.net/text?sendtext=true&number=${number}&carrier=${carrier}&msg=${msg}&amount=${amount}`).then(response => {
          present({
            buttons: [{ text: 'Done', handler: () => dismiss() }],
            message: `${amount} messages have successfully been sent to ${number}.`,
            onDidDismiss: () => console.log('dismissed'),
            onWillDismiss: () => console.log('will dismiss'),
          });
          setAmount(NaN);
          setMsg('');
          setLastNumber(number);
        }).catch(error => {
          present({
            buttons: [{ text: 'Ok', handler: () => dismiss() }],
            message: error.response.data,
            onDidDismiss: () => console.log('dismissed'),
            onWillDismiss: () => console.log('will dismiss'),
          });          
        });
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Texta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
          {error && !number ? <IonLabel color="danger" position="floating">Number</IonLabel>: <IonLabel position="floating">Number</IonLabel>}
            <IonInput  type="number" value={number} placeholder="Enter Phone Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonItem>
          {error && !carrier ? <IonLabel color="danger">Carrier</IonLabel>: <IonLabel>Carrier</IonLabel>}
          <IonSelect interface="popover" onIonChange={e => setCarrier(e.detail.value)}>
            <IonSelectOption value="tmomail.net">T-Mobile</IonSelectOption>
            <IonSelectOption value="verizon">Verizon</IonSelectOption>
            <IonSelectOption value="n64">MetroPCS</IonSelectOption>
          </IonSelect>
        </IonItem>          
          <IonItem >
            {error && !amount ? <IonLabel color="danger" position="floating">Amount</IonLabel>: <IonLabel position="floating">Amount</IonLabel>}
            <IonInput  type="number" required={true} inputmode="numeric" value={amount} placeholder="Enter Amount To Send" onIonChange={e => setAmount(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonItem>
          {error && !msg ? <IonLabel color="danger" position="floating">Msg</IonLabel>: <IonLabel position="floating">Msg</IonLabel>}
            <IonTextarea spellcheck={true} required={true} value={msg}  onIonChange={e => setMsg(e.detail.value!)}></IonTextarea>
          </IonItem>
<div className="flex justify-between p-2">
<div className=""><IonButton fill="clear" type="reset" onClick={e => (resetOptions())}>Clear</IonButton></div>

<div className=""><IonButton fill="solid" type="submit" strong={true} onClick={e => (submitText())}>Submit</IonButton></div>
        </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
