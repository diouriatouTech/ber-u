import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function App() {

  return (
    <div className="App">
      <h1>Commandez une course</h1>
      <div style={{display: 'inline-block'}}>
        <Autocomplete
          id="grouped-demo"
          options={destinations.sort((a, b) => -b.quartier.localeCompare(a.quartier))}
          groupBy={(d: Destination) => d.commune.toUpperCase()}
          getOptionLabel={(d: Destination) => d.quartier}
          style={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="Où allez-vous ?" variant="outlined" />}
        />
      </div>
    </div>
  );
}

interface Destination {
  ville: string;
  commune: string;
  quartier: string;
  secteur?: string;
  lieu: string;
}

// data from https://www.stat-guinee.org/images/Documents/Publications/INS/annuelles/annuaire/Region_de_Conakry.pdf
const destinations: Destination[] = [
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Belle Vue Ecole',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Belle Vue Marché I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Belle Vue Marché II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Camayenne',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Cameroun',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Dixinn Centre I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Dixinn Centre II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Dixinn Gare',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Dixinn Gare Rails',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Dixinn Mosquée',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Dixinn Port',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia Château d"eau',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia III',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia Minière I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia Minière II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia Minière Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Hafia Mosquée Kénien',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Landréah',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'dixinn',
    quartier: 'Minière Cité',
    lieu: 'test1'
  },// DIXINN
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Almamya I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Almamya II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Boulbinet',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Coronthie I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Coronthie II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Kassa',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Koulewondy',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Manquepas',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Sandervalia',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Sans Fil',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Tamara',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Téminetaye',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'kaloum',
    quartier: 'Tombo',
    lieu: 'test1'
  },// KALOUM
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Bonfi',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Bonfi Marché',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Bonfi Routière',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Boussoura',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Carrière Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Carrière Cité',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Coléah Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Coléah Cité',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Coléah Domino',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Coléah Imprimérie',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Hermakonon Mosquée',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Hermakonon Permanance',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Lanseboundji',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Madina Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Madina Cité (SIG)',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Madina Marché',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Madina Mosquée',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Madina Ecole',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Mafanco',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Mafanco Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Matam',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Matam Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Matam Lido',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matam',
    quartier: 'Touguiwondy',
    lieu: 'test1'
  },// MATAM
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Behanzin',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Camp Alpha Yaya Diallo',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Cité de L"Air',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dabompa',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dabompa Plateau',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dabondy Ecole',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dabondy I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dabondy II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dabondy III',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dabondy Rails',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Dar Es Salam I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Enta Marché',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Gbèssia Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Gbèssia Cité Ecole',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Gbèssia Cité I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Gbèssia Cité II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Gbèssia Cité III',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Gbèssia Port I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Gbèssia Port II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Kissosso',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Kissosso Plateau',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Lansanaya',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Matoto Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Matoto Khabitaya',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Matoto Marché',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Sangoya Marché',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Sangoya Mosquée',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Simbaya Ecole',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Simbaya I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Simbaya II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Tanènè Marché',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Tanènè Mosquée',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Tombolia',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Tombolia Plateau',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Yimbaya Ecole',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Yimbaya Permanence',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Yimbaya Port',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'matoto',
    quartier: 'Yimbaya Tanerie',
    lieu: 'test1'
  },// MATOTO
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Bantounka I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Bantounka II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Dar Es Salam I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Dar Es Salam II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Hamdallaye I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Hamdallaye II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Hamdallaye Mosquée',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Kaporo Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Kaporo Rails',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Kipé',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Kobaya',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Koloma I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Koloma II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Lambanyi',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Nasroullaye',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Nongo',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Nongo Tady',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Ratoma Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Ratoma Dispensaire',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Simbaya Gare',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Soloprimo',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Sonfonia Centre I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Sonfonia Centre II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Sonfonia Gare I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Sonfonia Gare II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Soumabossia',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Taouyah',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Wanindara I',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Wanindara II',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Wanindara III',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Wareya',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Yattaya Centre',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Yattaya Fossedè',
    lieu: 'test1'
  },
  {
    ville: 'conakry',
    commune: 'ratoma',
    quartier: 'Yembeya',
    lieu: 'test1'
  },

];
