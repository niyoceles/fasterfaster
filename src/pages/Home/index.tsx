import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './style.css';

const Home: React.FC = () => {
	let myString: string;
	let myNumber: number;
	let myAny: any;
	let strArr: Array<string>;
	let numberArr: Array<number>;
	let strNumberTriple: [string, number];

	strArr = ['strging name', '3'];
	numberArr = [1, 3];
	myAny = ['ddddd', 'ddddd', 1, true];
	myString = 'kigali';
	myNumber = 22;
	strNumberTriple = ['kigali', 6666];

	console.log('My results:', myString + myNumber);

	console.log('Any:', myAny);
	console.log('ArrayString:', strArr + '====' + numberArr);
	console.log('StringNumberTriple:', strNumberTriple);
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	);
};

export default Home;
